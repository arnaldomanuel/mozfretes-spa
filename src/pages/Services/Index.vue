<template>
  <div>
    <div class="col-12 col-md-6 q-pa-md q-pb-lg">
      <q-card class="" style="margin-bottom:40px; ">
        <q-card-section>
          <div class="text-h6 q-mb-sm">Serviços e portfólio da empresa</div>
          <list-services :services="services" @updateServiceList="updateServicesList"/>

        </q-card-section>
        <q-card-section>
          <q-btn class="glossy q-ma-md absolute-bottom-right" color="primary" icon="add" round style=""
                 type="submit" @click="openAdd= true"/>
        </q-card-section>

        <div>
          <q-dialog ref="model" v-model="openAdd">
            <add-service @serviceCreated="updateServicesList"/>
          </q-dialog>

        </div>
      </q-card>


    </div>

  </div>
</template>

<script>
import AddService from "./AddService.vue"
import ListServices from "./ListServices.vue"

export default {
  components: {AddService, ListServices},
  data() {
    return {
      openAdd: false,
      services: [],
    }
  },
  methods: {
    updateServicesList() {
      this.openAdd = false
      this.$axios.get('/service').then(done => {
        this.services = done.data
      })
    }
  },
  mounted() {
    this.updateServicesList()
  }
}
</script>
