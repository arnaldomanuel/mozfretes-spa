<template>

      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="primary" text-color="white" />
          <span class="q-ml-sm">Confirme que quer apagar esta carga? </span>
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
   props:['load'],
   methods:{
     deleteVehicle() {
       this.$axios.delete('/load/'+this.load.id).then(done=>{
         if(done.status ==200 | done.status==201){
           Loading.openSuccess("Carga apagada com sucesso", 4000)
           this.$router.push('/carga')
           console.log(done)
         } else {
           Error.openNotify("Houve um erro ao tentar apagar a carga", 5000);
         }

       }).catch(error=>{

       })
     }
   },
}
</script>
