<template>
  <span>
    <q-list bordered class="rounded-borders q-mb-lg" padding>

    <q-item @click="goOutside(service.photo ? $apiPath + service.photo : $apiPath +  service.pdf_booklet)" v-ripple clickable v-for="service in services" :key="service.id">
      <q-item-section avatar top>
        <q-avatar color="primary"  icon="camera" text-color="white"/>
      </q-item-section>

      <q-item-section>
        <q-item-label lines="1">{{service.title}}</q-item-label>
        <q-item-label caption>{{service.photo ? 'Imagem' : 'Booklet'}}</q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-icon color="red" @click="deleteService(service)" name="delete"/>
      </q-item-section>
    </q-item>
  </q-list>
      <q-dialog v-model="confirm" >
          <confirm-delete-service-dialog @updateServiceList="reactToEvent()" :service="serviceSelected"/>
      </q-dialog>
  </span>

</template>

<script>
import ConfirmDeleteServiceDialog from "src/dialogs/ConfirmDeleteServiceDialog";
export default {
  props: ['services'],
  components:{ConfirmDeleteServiceDialog},
  data(){
    return {
      serviceSelected:{},
      confirm:false,
    }
  },
  methods:{
    goOutside(goto){

      location.href=goto
    },
    deleteService(service){
      this.confirm = true
      this.serviceSelected=service
    },
    reactToEvent(){
      this.$emit('updateServiceList')
      this.confirm=false
      console.log('emitted')
    }

  }
}
</script>
