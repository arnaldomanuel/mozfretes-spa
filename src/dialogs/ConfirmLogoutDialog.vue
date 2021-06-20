<template>
   
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="logout" color="primary" text-color="white" />
          <span class="q-ml-sm">{{confirm}}Confirma o logout? Terá de inserir a senha e email da próxima vez que aceder ao site</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat @click="logout" label="Sim" color="primary" v-close-popup />
          <q-btn flat label="Não" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
  
</template>

<script>

export default {
   props:['confirm'],
   methods:{
     logout(){

     }
   },
}
</script>