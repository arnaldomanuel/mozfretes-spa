<template>

      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="primary" text-color="white" />
          <span class="q-ml-sm">Confirma que quer apagar esta viagem? </span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat @click="deleteVehicle" label="Sim" color="primary" v-close-popup />
          <q-btn flat label="Não" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>

</template>

<script>

import Loading from "components/Loading";
import Error from "components/Error";

export default {
   props:['freightJourney'],
   methods:{
     deleteVehicle() {
       this.$axios.delete('/freight-journey/'+this.freightJourney.id).then(done=>{
         Loading.openSuccess("Viagem apagada com sucesso", 4000)
         this.$router.push('/viagem')
         console.log(done)
       }).catch(error=>{
         Error.openNotify("Houve um erro ao tentar apagar a viage,", 5000);
       })
     }
   },
}
</script>
