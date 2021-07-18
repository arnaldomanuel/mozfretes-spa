<template>

  <div class="q-pa-md">

    <q-form

      class="q-gutter-md"
    >
      <q-card>
        <div class="row">

          <div class="col-12">
            <div class="text-h6">Informação sobre a empresa</div>
          </div>
        <div class="col-12 col-md-6">

            <q-input
              v-model="company.name"
              label="Nome"
              readonly

              lazy-rules
              :rules="[ val => val && val.length > 0 || 'O nome está vazio']"
            > <template v-slot:prepend>
              <q-icon name="person" />
            </template>
            </q-input>
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="company.telephone"
              label="Telefone"
              readonly

              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
            > <template v-slot:prepend>
              <q-icon name="call" />
            </template>
            </q-input>
          </div>
          <div class="col-12 col-md-6">

            <q-input
              v-model="company.address"
              label="Endereço"

              readonly
              lazy-rules

            > <template v-slot:prepend>
              <q-icon name="house" />
            </template>
            </q-input>
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="company.address1"
              label="Telefone"
              readonly

              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
            > <template v-slot:prepend>
              <q-icon name="call" />
            </template>
            </q-input>
          </div>
          <div class="col-12 col-md-6">

            <q-input
              v-model="company.website"
              label="Website"
              readonly

              lazy-rules

            > <template v-slot:prepend>
              <q-icon name="public" />
            </template>
            </q-input>
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="company.email"
              label="Email"
              readonly

              lazy-rules

            > <template v-slot:prepend>
              <q-icon name="email" />
            </template>
            </q-input>
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="company.email1"
              label="Email"
              readonly

              lazy-rules

            > <template v-slot:prepend>
              <q-icon name="email" />
            </template>
            </q-input>
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="company.address2"
              label="Outro endereço"
              readonly

              lazy-rules

            > <template v-slot:prepend>
              <q-icon name="home" />
            </template>
            </q-input>
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="company.address3"
              readonly
              label="Outro endereço"

              lazy-rules

            > <template v-slot:prepend>
              <q-icon name="home" />
            </template>
            </q-input>
          </div>
        </div>
      </q-card>
    </q-form>

    <q-card class="q-mt-md" style="margin-bottom:40px; ">
      <q-card-section>
        <div class="text-h6">Serviços e portfólio da empresa</div>
        <list-services :services="services" @updateServiceList="updateServicesList"/>
      </q-card-section>


      <div>


      </div>
    </q-card>

  </div>
</template>

<style lang="sass" scoped>
.row > div
  padding: 10px 15px

.row + .row
  margin-top: 1rem
</style>

<script>

import ListServices from "pages/Services/ListServices";
export default {
  components:{ListServices},
  data(){
    return {
      services: [],
      company:{
        name:'fggf', address1:'', address2:'', address:'', address3:'', email:'', email1:'', website:'', telephone:'', telephone1:'',
      }
    }
  },

  methods:{
    updateServicesList() {

      this.$axios.get('/service').then(done => {
        this.services = done.data
      })
    }
  },
  beforeMount() {

    let urlArray= location.href.split("/")
    let id = urlArray[urlArray.length-1]
    this.$axios.get('/company/'+id).then(done=>{this.company=done.data})
    this.updateServicesList()
  }
}
</script>
