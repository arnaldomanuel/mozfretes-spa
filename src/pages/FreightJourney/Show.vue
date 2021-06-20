<template>
    <div>
      <header-freight-journey/>
           <q-card class="my-card q-mt-md">
              <q-card-section>
                <div class="text-h6">Viagem {{freight_journey.name}}</div>

              </q-card-section>

          <q-card-section class="">
            <div class="row">
              <div class=" col-12 col-lg-6 q-mr-lg">
                <q-img
                  src="~assets/img/truck.jpg"
                >
                  <div class="absolute-bottom text-body1 text-center">
                    Foto do veículo que fará a viagem
                  </div>
                </q-img>
                <div class="q-mt-md">
                  <q-btn  class="q-mr-md" color="secondary" icon="edit" :to="'/viagem/editar/'+freight_journey.id" >Editar</q-btn>
                  <q-btn color="negative" icon="delete" >Apagar</q-btn>
                </div>
              </div>
              <div class="col-12 col-lg-4">
               <div class="text-h5">Partida</div>
               {{freight_journey.from_location}}

               <div class="text-h5 q-mt-md">Destino</div>
               {{freight_journey.to_location}}

               <div class="text-h5 q-mt-md">Preço</div>
               {{freight_journey.price_negotiate + " "}}
                <strong>{{resultNegotiate}}</strong>

                <div class="text-h5 q-mt-md">Hora de partida</div>
                {{freight_journey.from_date}}

                <div class="text-h5 q-mt-md">Hora de chegada</div>
                {{freight_journey.to_date}}
               <div class="text-h5 q-mt-md">Capacidade máxima</div>
               {{freight_journey.truck.maximum_capacity}} KG
              </div>
            </div>

          </q-card-section>

      <q-separator />
    </q-card>
    </div>
</template>


<script>
import HeaderFreightJourney from "./HeaderFreightJourney.vue"
export default {
    components: {HeaderFreightJourney},
    data(){
        return {
            freight_journey: {
              name: '',
              description: '',
              from_location: '',
              to_location: '',
              from_date: '',
              to_date: '',
              truck_id:'',
              price_set: true,
              price_negotiate: '',
              phone_journey: '',
              status: '',
              id: '',
              truck:{
                name: '',
                brand:'',
                model: '',
                maximum_capacity:'700',
                photo_path:'',
              },
            },
            file:null,
        }
    },
  computed:{
    resultNegotiate(){
      return this.freight_journey.price_set==true?'Negociável': 'Não negociável'
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
