<template>
    <div>
      <header-load/>
           <q-card class="my-card q-mt-md">
              <q-card-section>
                <div class="text-h6">Carga </div>

              </q-card-section>

          <q-card-section class="">
            <div class="row">
              <div class=" col-12 col-lg-6 q-mr-lg">
                <q-img
                  src="~assets/img/truck.jpg"
                >
                  <div class="absolute-bottom text-body1 text-center">
                    Foto da carga
                  </div>
                </q-img>
                <div class="q-mt-md">
                  <q-btn  class="q-mr-md" color="secondary" icon="edit" :to="'/carga/editar/'+load.id" >Editar</q-btn>
                  <q-btn color="negative" icon="delete" >Apagar</q-btn>
                </div>
              </div>
              <div class="col-12 col-lg-4">
               <div class="text-h5">Partida</div>
               {{load.from_location}}

               <div class="text-h5 q-mt-md">Destino</div>
               {{load.to_location}}

                <div class="text-h5 q-mt-md">Hora de partida</div>
                {{load.from_date}}

                <div class="text-h5 q-mt-md">Hora de chegada</div>
                {{load.to_date}}
               <div class="text-h5 q-mt-md">Capacidade máxima</div>
               {{load.weight}} KG

                <div class="text-h5 q-mt-md">Descrição</div>
                {{load.description}}
              </div>
            </div>

          </q-card-section>

      <q-separator />
    </q-card>
    </div>
</template>


<script>
import HeaderLoad from "./HeaderLoad.vue"
export default {
    components: {HeaderLoad},
    data(){
        return {
      load: {
        name: '',
        description: '',
        from_location: '',
        to_location: '',
        from_date: '',
        to_date: '',
        phone_journey: '',
        status: '',
        id: '',
        weight:'',
        picture:null,
        from_date_date_part: '',
        from_date_hour_part: '',
      },
            file:null,
        }
    },
  computed:{

  },
    methods:{
        onSubmit(){

        },
        onRejectedTruckPic(){

        },
    }

}
</script>
