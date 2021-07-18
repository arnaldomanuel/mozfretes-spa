<template>

  <div>
      <header-freight-journey/>

      <div class="q-pt-md">
      <template>

            <div class="q-mt-md">
              <q-table
              @row-click="goTo"
                title="Cargas"
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
import HeaderLoad from "./HeaderLoad"
import AuthServices from "src/Services/AuthServices";
export default {
    components:{HeaderFreightJourney: HeaderLoad},
     data(){
    return {

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
        { name: 'weight',align: 'left', label: 'Peso estimado (Kg)', field: 'weight', sortable: true },
        { name: 'to_location', align: 'left', label: 'Destino', field: 'to_location', sortable: true,  },
        { name: 'from_date',align: 'left', label: 'Data Saída', field: 'from_date', sortable: true },

      ],
       data: [],
    }
  },

  methods: {
    goTo(evt, row, index){
      console.log(row);
     this.$router.push("carga/"+row.id)
    }
  },

  mounted() {
      this.$axios.get('/load').then(done=>{this.data=done.data})
  }
}
</script>
