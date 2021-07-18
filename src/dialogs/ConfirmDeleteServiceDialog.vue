<template>

      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="primary" text-color="white" />
          <span class="q-ml-sm">Confirme que quer apagar o serviço {{service.title}}? </span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat @click="deleteVehicle" label="Sim" color="primary"  />
          <q-btn flat label="Não" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>

</template>

<script>

import Loading from "components/Loading";
import Error from "components/Error";

export default {
   props:['service'],
   methods:{
     emitEvent(){
       this.$emit('updateServiceList')
     },
     deleteVehicle() {
       this.$axios.delete('service/'+this.service.id).then(done=>{
        this.emitEvent()
         Loading.openSuccess("Serviço apagado com sucesso", 4000)

       }).catch(error=>{
         Error.openNotify("Houve um erro ao tentar apagar o serviço", 5000);
       })
     }
   },
}
</script>
