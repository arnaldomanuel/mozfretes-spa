<template>

  <div>
    <header-company/>

    <div>
      <q-card
        class="my-card"
      >
        <q-card-section>
          <div class="text-h5">Filtre</div>
          <div class="text-subtitle2">Verifique a lista de empresas que se registaram na plataforma</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <template>
            <div class="">

              <q-select v-model="company_type" :dense="dense" :options="options" :options-dense="denseOpts" outlined
                        @input="filterCompanies">
                <template v-slot:prepend>
                  <q-icon name="business"/>
                </template>
              </q-select>
            </div>
          </template>
        </q-card-section>
      </q-card>

    </div>

    <div class="q-pt-md">
      <template>
        <div class="q-mt-md">
          <q-table

            :columns="columns"
            :filter="filter"
            :loading="loading"
            :pagination.sync="pagination"
            :data="rows"
            binary-state-sort
            row-key="id"
            title="Empresas"
            @request="onRequest"
            @row-click="goTo"

          >
            <template v-slot:top-right>
              <q-input v-model="filter" borderless debounce="300" dense placeholder="Pesquise">
                <template v-slot:append>
                  <q-icon name="search"/>
                </template>
              </q-input>
            </template>
          </q-table>
        </div>
      </template>

    </div>
  </div>
</template>

<script>
import HeaderCompany from "./HeaderCompany.vue"

export default {

  components: {HeaderCompany: HeaderCompany},

  data() {
    return {
      pagination: {
        sortBy: 'id',
        descending: false,
        page: 1,
        rowsPerPage: 3,
        rowsNumber: 10,
      },
      options: [
        {
          label: 'Transportadora de cargas',
          value: '1',
        },
        {
          label: 'Empresa de mercadorias',
          value: '2',
        },
        {
          label: 'Transportadora de cargas e Empresa de mercadorias',
          value: '3',
        },

      ],
      denseOpts: false,
      company_type: '',
      dense: false,
      filter: '',
      columns: [
        {
          name: 'id',
          required: true,
          label: 'id',
          align: 'left',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true
        },

        {
          name: 'name',
          required: true,
          label: 'Nome',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {name: 'company_type', align: 'left', format: val => {return val==1?'Transportadora de cargas':

            val==2?'Empresa de mercadorias':'Empresa de mercadorias e cargas'}, label: 'Tipo de empresa', field: 'company_type', sortable: true},
        {name: 'address1', align: 'left', label: 'Endereço', field: 'address1', sortable: true,},
        {name: 'telephone', align: 'left', label: 'Telefone', field: 'telephone', sortable: true},

      ],
      loading: false,
      data: [],
      rows: [],
    }
  },

  methods: {
    filterCompanies(newValue, oldValue) {
      this.onRequest()
    },
    goTo(evt, row, index) {
      console.log(row);
      this.$router.push("empresa/" + row.id)
    },
   async  getRowsNumberCount(filter) {
      let rows = 0
      await this.$axios.get('company/search/count/?filter=' + filter+'&company_type='+this.company_type.value).then(done => {
        rows = done.data
        this.pagination.rowsNumber = done.data
       rows = parseInt(rows)
      })
      return rows
    },
    async fetchFromServer(startRow, fetchCount, filter, sortBy, descending) {
      let dataFromServer = []
      await this.$axios.get(`company/search/?filter=${filter}&startRow=${startRow}&fetchCount=${fetchCount}&sortBy=${sortBy}&descending=${descending}&company_type=${this.company_type.value}`).then(done => {
        console.log('done', done.data)
        dataFromServer = done.data
      })
      return dataFromServer
    },
    async onRequest(props) {
      console.log('props', props)
      const {page, rowsPerPage, sortBy, descending} = props ? props.pagination : this.pagination
      const filter = this.filter
      this.loading = true
      this.pagination.rowsNumber = await this.getRowsNumberCount(filter)
      console.log('payroll', this.pagination.rowsNumber)
      // get all rows if "All" (0) is selected
      const fetchCount = rowsPerPage === 0 ? this.pagination.rowsNumber : rowsPerPage
      const startRow = (page - 1) * rowsPerPage
      const returnedData = await this.fetchFromServer(startRow, fetchCount, filter, sortBy, descending)


      this.rows.splice(0, this.rows.length, ...returnedData)

      console.log('rows ', this.rows)
      // don't forget to update local pagination object
      this.pagination.page = page
      this.pagination.rowsPerPage = rowsPerPage
      this.pagination.sortBy = sortBy
      this.pagination.descending = descending


      // ...and turn off loading indicator
      this.loading = false
    }
  },

  async mounted() {
    let numberOfRows = await this.getRowsNumberCount('')
    this.pagination.rowsNumber=numberOfRows
    this.onRequest()
  },

}
</script>
