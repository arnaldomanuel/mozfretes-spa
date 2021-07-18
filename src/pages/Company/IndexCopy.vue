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

              <q-select outlined v-model="company_type" @input="filterCompanies"  :options="options" :dense="dense" :options-dense="denseOpts">
                <template v-slot:prepend>
                  <q-icon name="business" />
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
              @row-click="goTo"
                title="Empresas"
                :data="data"
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
import HeaderCompany from "./HeaderCompany.vue"
export default {
    components:{HeaderCompany: HeaderCompany},
     data(){
    return {

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
      company_type:'',
      dense: false,
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
          name: 'name',
          required: true,
          label: 'Nome',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'company_type',align: 'left', label: 'Tipo de empresa', field: 'company_type', sortable: true },
        { name: 'address1', align: 'left', label: 'Endereço', field: 'address1', sortable: true,  },
        { name: 'telephone',align: 'left', label: 'Telefone', field: 'telephone', sortable: true },

      ],

       data: [
        ],
    }
  },

  methods: {
    filterCompanies(newValue, oldValue){
      console.log(this.$store.getters["mozfretes/users"])
      console.log("changge ",this.company_type)
    },
    goTo(evt, row, index){
      console.log(row);
     this.$router.push("empresa/"+row.id)
    }
  },
  beforeMount() {
      this.$axios.get('company').then(done=>{
        this.data=done.data
      })
  }

}
</script>
