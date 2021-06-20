<template>
    <div>
         <header-truck/>
         
           <q-card
      class="my-card q-mt-md"
     
    >
      <q-card-section>
        <div class="text-h6">{{truck.name}}</div>
        
      </q-card-section>

      <q-card-section class="">
        <div class="row">
          <div class=" col-12 col-lg-6 q-mr-lg">
              <q-img
                src="~assets/img/truck.jpg"
               
      >
        <div class="absolute-bottom text-body1 text-center">
        Foto do veículo
        </div>
      </q-img>
             <div class="q-mt-md">
                <q-btn  class="q-mr-md" color="secondary" icon="edit" :to="'/veiculo/editar/'+truck.id" >Editar</q-btn>
                <q-btn color="negative" icon="delete" >Apagar</q-btn>
             </div>
          </div>
          <div class="col-12 col-lg-4">
           <div class="text-h5">Nome</div>
           {{truck.name}}

           <div class="text-h5 q-mt-md">Marca</div>
           {{truck.brand}}

           <div class="text-h5 q-mt-md">Modelo</div>
           {{truck.model}}

           <div class="text-h5 q-mt-md">Capacidade máxima</div>
           {{truck.maximum_capacity}} KG
          </div>
        </div>
        
        
      </q-card-section>

      <q-separator />
    </q-card>

    </div>
</template>


<script>
import HeaderTruck from "./HeaderTruck.vue"
export default {
    components: {HeaderTruck},
    data(){
        return {
            truck: {
              id:12,
                name: 'MLK',
                brand:'Toyota',
                model: 'Volvo',
                maximum_capacity:'20000',
                photo_path:'',
            }, 
            file:null,
        }
    },
    methods:{
        onSubmit(){

        },
        onRejectedTruckPic(){

        },
    }

}
</script>