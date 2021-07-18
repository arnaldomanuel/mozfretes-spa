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
                  :src="imagePath"
                >
                  <div class="absolute-bottom text-body1 text-center">
                    Foto do veículo que fará a viagem
                  </div>
                </q-img>
                <div class="q-mt-md">
                  <q-btn  class="q-mr-md" color="secondary" icon="edit" :to="'/viagem/editar/'+freight_journey.id" >Editar</q-btn>
                  <q-btn color="negative" @click="confirm=true" icon="delete" >Apagar</q-btn>
                </div>
              </div>


              <div class="col-12 col-lg-4">

                <div style="display: inline-block" class="q-mb-md">
                 <q-btn v-if="freight_journey.company_id!=null" color="primary"> <a  class="img-link" :href="'https://wa.me/'
                  +company.whatsapp+'?text=Olá'">
                    <q-img class="img-img-link"  src="~/assets/whatsapp.svg"/>
                 </a> </q-btn>

                  <q-btn class="q-mx-sm" v-if="freight_journey.status.toLowerCase()=='fechado'" label="Viagem fechada"/>

                  <q-btn class="q-mx-sm" v-if="freight_journey.status.toLowerCase()!='fechado'" @click="closeFreightJouney=true" color="secondary" icon="close" label="Fechar"/>
                  <q-btn color="secondary" to="/carga" icon="business_center" label="Conectar carga"/>
                </div>



               <div class="text-h5">Partida</div>
               {{freight_journey.from_location}}

               <div class="text-h5 q-mt-md">Destino</div>
               {{freight_journey.to_location}}

               <div class="text-h5 q-mt-md">Preço</div>
               {{freight_journey.price_negotiate + " MT"}}
                <strong>{{resultNegotiate}}</strong>

                <div class="text-h5 q-mt-md">Hora de partida</div>
                {{freight_journey.from_date}}

                <div class="text-h5 q-mt-md">Hora de chegada</div>
                {{freight_journey.to_date}}
               <div class="text-h5 q-mt-md">Capacidade máxima</div>
               {{freight_journey.vehicle?freight_journey.vehicle.maximum_capacity +' KG':'Informação indisponível'}}
              </div>
            </div>

          </q-card-section>

      <q-separator />
    </q-card>
      <template>
        <q-dialog v-model="confirm" persistent>
          <confirm-delete-freight-journey-dialog :freightJourney="freight_journey"/>
        </q-dialog>
      </template>
      <template>
        <q-dialog v-model="closeFreightJouney" >
          <confirm-close-freight-journey-dialog
            @closeFreightJourneyEE="closeFreightJouneyMethod()"
            :freight_journey="freight_journey"/>
        </q-dialog>
      </template>
    </div>
</template>


<script>
import HeaderFreightJourney from "./HeaderFreightJourney.vue"
import ConfirmDeleteFreightJourneyDialog from "src/dialogs/ConfirmDeleteFreightJourneyDialog";
import ConfirmCloseFreightJourneyDialog from "src/dialogs/ConfirmCloseFreightJourneyDialog";
export default {
    components: {HeaderFreightJourney,ConfirmCloseFreightJourneyDialog, ConfirmDeleteFreightJourneyDialog},
    data(){
        return {
          confirm:false,
          closeFreightJouney:false,
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
              company_id:null,
              company:{},
              vehicle:{
                name: '',
                brand:'',
                model: '',
                maximum_capacity:'700',
                photo_path:null,
              },
            },
          company: {},
          vehicle: {},
          file:null,
        }
    },
  computed:{
    resultNegotiate(){
      return this.freight_journey.price_set==true?'Negociável': 'Não negociável'
    },
    imagePath(){
      return this.$apiPath+(this.freight_journey.vehicle?this.freight_journey.vehicle.photo_path:'img/truckstandard.jpg')
    }
  },
    methods:{
      closeFreightJouneyMethod(){
        console.log("afraid")
        this.freight_journey.status='Fechado'
      }
    },

  created() {
    let urlArray= location.href.split("/")
    let id = urlArray[urlArray.length-1]
    this.$axios.get('/freight-journey/'+id).then(done=>{this.freight_journey=done.data;
      console.log(this.freight_journey)
      this.vehicle=this.freight_journey.vehicle
      this.$axios.get('/company/'+this.freight_journey.company_id).then(done=>{
        this.company=done.data
        console.log(this.freight_journey)
      })

    })


  }

}
</script>

<style>
.img-link {

}
.img-img-link{
  display: inline-block;
  width: 30px !important;
}
</style>
