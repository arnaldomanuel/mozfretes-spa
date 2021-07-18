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
                :src="imagePath"

      >
        <div class="absolute-bottom text-body1 text-center">
        Foto do veículo
        </div>
      </q-img>
             <div class="q-mt-md">
                <q-btn  class="q-mr-md" color="secondary" icon="edit" :to="'/veiculo/editar/'+truck.id" >Editar</q-btn>
                <q-btn color="negative" @click="confirm=true" icon="delete" >Apagar</q-btn>
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
      <template>
        <q-dialog v-model="confirm" persistent>
          <confirm-delete-vehicle-dialog :truck="truck"/>
        </q-dialog>
      </template>

    </div>
</template>


<script>
import HeaderTruck from "./HeaderTruck.vue"
import ConfirmDeleteVehicleDialog from "src/dialogs/ConfirmDeleteVehicleDialog";
export default {
    components: {HeaderTruck,ConfirmDeleteVehicleDialog},
    data(){
        return {
          confirm:false,
            truck: {
              id:12,
                name: '',
                brand:'',
                model: '',
                maximum_capacity:'',
                photo_path:'',
            },
            file:null,
        }
    },
  computed:{
    imagePath(){
      console.log(this.$apiPath+this.truck.photo_path)
      return this.$apiPath+this.truck.photo_path
    }
  },
    methods:{
        onSubmit(){

        },
        onRejectedTruckPic(){

        },
    },
  mounted() {
      let urlArray= location.href.split("/")
      let id = urlArray[urlArray.length-1]
    console.log(
      "id", id
    )
    console.log(this.$apiPath)
      this.$axios.get('vehicle/'+id).then(done=>{

        this.truck=done.data
        console.log( this.truck)
      })
  }

}
</script>
