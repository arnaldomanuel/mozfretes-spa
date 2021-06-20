<template>

  <div>
      <header-freight-journey/>

      <div class="q-pt-md">
      <template>
            <div class="q-mt-md">
              <q-table
              @row-click="goTo"
                title="Veículos"
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
import HeaderFreightJourney from "./HeaderFreightJourney.vue"
export default {
    components:{HeaderFreightJourney},
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
        { name: 'maximum_capacity',align: 'left', label: 'Capacidade máxima (Kg)', field: 'maximum_capacity', sortable: true },
        { name: 'to_location', align: 'left', label: 'Destino', field: 'to_location', sortable: true,  },
        { name: 'from_date',align: 'left', label: 'Data Saída', field: 'from_date', sortable: true },

      ],

       data: [
        {
          id: '12',
          from_location: "Maputo/Massinga",
          to_location: "Mazda",
          from_date: "Corolla",
          maximum_capacity: 2000.67,
        },

        ],
    }
  },

  methods: {
    goTo(evt, row, index){
      console.log(row);
     this.$router.push("viagem/"+row.id)
    }
  }
}
</script>
