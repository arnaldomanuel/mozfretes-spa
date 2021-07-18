<template>

      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="close" color="primary" text-color="white" />
          <span class="q-ml-sm">Confirme que quer fechar essa viagem? </span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat @click="closeJourney" label="Sim" color="primary" v-close-popup />
          <q-btn flat label="Não" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>

</template>

<script>

import Loading from "components/Loading";
import Error from "components/Error";

export default {
   props:['freight_journey'],
   methods:{
     closeJourney() {
       this.$axios.post('/freight-journey/global/close-journey', {freight_journey_id:this.freight_journey.id}).then(done=>{
         Loading.openSuccess("Viagem fechada com sucesso", 4000)
         console.log('closeFreightJourneyEE',done)
         this.$router.push("/viagem/")
       }).catch(error=>{
         Error.openNotify("Houve um erro ao tentar fechar a viagem", 5000);
       })
     }
   },
}
</script>
