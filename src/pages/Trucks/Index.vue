<template>
    <div>
      <header-truck/>
     
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
</template>

<script>
import HeaderTruck from "./HeaderTruck.vue"

export default {
  components: {HeaderTruck},
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
          name: 'name',
          required: true,
          label: 'Nome',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        
        { name: 'brand', align: 'left', label: 'Marca', field: 'brand', sortable: true,  },
        { name: 'model', label: 'Modelo', field: 'model', sortable: true },
        { name: 'maximum_capacity', label: 'Capacidade máxima', field: 'maximum_capacity', sortable: true },
      ],

       data: [
        {
          id: '12',
          name: "MLK 20-34",
          brand: "Mazda",
          model: "Corolla",
          maximum_capacity: 2000.67,
        },
        {
          id: '13',
          name: "MLK 20-34",
          brand: "BMW",
          model: "Corolla",
          maximum_capacity: 2000.67,
        },
        {
          id: '14',
          name: "MLK 20-34",
          brand: "Toyota",
          model: "Corolla",
          maximum_capacity: 2000.67,
        },
        ],
    }
  },

  methods: {
    goTo(evt, row, index){
      console.log(row);
     this.$router.push("veiculo/"+row.id)
    }
  }
}
</script>