<template>

  <div>
      <header-freight-journey/>

      <div class="q-pt-md">
      <template>
            <div class="q-mt-md">
              <q-table
              @row-click="goTo"
                title="Viagens"
                :data="rows"
              :loading="loading"
              :pagination.sync="pagination"
              binary-state-sort
              @request="onRequest"
                :columns="columns"
                :filter="filter"
                row-key="id"
              > <template v-slot:top-right>
                <q-input borderless dense debounce="300" v-model="filter" placeholder="Pesquise">
                  <template v-slot:append>
                    <q-icon name="search" />
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
import HeaderFreightJourney from "./HeaderFreightJourney.vue"
export default {
    components:{HeaderFreightJourney},
     data(){
    return {
      pagination: {
        sortBy: 'id',
        descending: false,
        page: 1,
        rowsPerPage: 3,
        rowsNumber: 10
      },
      filter:'',
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
          name: 'from_location',
          required: true,
          label: 'Partida',
          align: 'left',
          field: row => row.from_location,
          format: val => `${val}`,
          sortable: true
        },
         { name: 'to_location', align: 'left', label: 'Destino', field: 'to_location', sortable: true,  },
        { name: 'from_date',align: 'left', label: 'Data Saída', field: 'from_date', sortable: true },
        { name: 'status',align: 'left', label: 'Estado', field: 'status', sortable: false },

      ],
      loading:false,
       data: [],
      rows: [],
      status:'',
    }
  },
  computed:{
    params: function (){
      let params = new URLSearchParams(location.search)
      console.log('logs ',  params.get('status'))
      return params
    }
  },

  methods: {
    goTo(evt, row, index){
      console.log(row);
     this.$router.push("viagem/"+row.id)
    },
    async  getRowsNumberCount(filter) {
      let rows = 0
      await this.$axios.get('freight-journey/search/count?filter=' + filter+"&news="+this.params.get("news")).then(done => {
        rows = done.data
        rows = parseInt(rows)
      })
      return rows
    },
    async fetchFromServer(startRow, fetchCount, filter, sortBy, descending) {
      let dataFromServer = []
      await this.$axios.get(`/freight-journey/global/search/?filter=${filter}&startRow=${startRow}&fetchCount=${fetchCount}&sortBy=${sortBy}&descending=${descending}&status=${this.status}&news=${this.params.get("news")}`).then(done => {
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
      console.log('pagination', this.pagination)

      // ...and turn of loading indicator
      this.loading = false
    }
  },
  async beforeMount() {
    let numberOfRows = await this.getRowsNumberCount('')
    this.pagination.rowsNumber=numberOfRows
    this.onRequest()
  },

}
</script>
