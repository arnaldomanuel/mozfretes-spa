<template>

  <div class="q-pa-md">

     <q-form
      @submit="onSubmit"

      class="q-gutter-md"
    >
   <q-card>
    <div class="row">

            <div class="col-12">
        <div class="text-h6">Actualize informações da empresa</div>
     </div>


      <div class="col-12 col-md-6">

          <q-input
                v-model="company.name"
                label="Nome *"
                hint="Nome da empresa"
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
                label="Telefone *"
                hint="Telefone principal"
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
                label="Endereço *"
                hint="Endereço físico"
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
                hint="Telefone secundário"
                lazy-rules

        > <template v-slot:prepend>
            <q-icon name="call" />
            </template>
        </q-input>
      </div>
     <div class="col-12 col-md-6">

          <q-input
                v-model="company.website"
                label="Website"
                hint="Website da empresa"
                lazy-rules

        > <template v-slot:prepend>
            <q-icon name="public" />
            </template>
        </q-input>
      </div>
        <div class="col-12 col-md-6">
          <q-input
                v-model="company.email1"
                label="Email"
                type="email"
                hint="Email da empresa"
                lazy-rules

        > <template v-slot:prepend>
            <q-icon name="email" />
            </template>
        </q-input>
      </div>
       <div class="col-12 col-md-6">
          <q-input
                v-model="company.email2"
                label="Email"
                type="email"
                hint="Email secundário da empresa"
                lazy-rules

        > <template v-slot:prepend>
            <q-icon name="email" />
            </template>
        </q-input>
      </div>
      <div class="col-12 col-md-6">
        <q-input
          v-model="company.whatsapp"
          label="Whatsapp"
          type="text"
          hint="Inclua o indicativo do país. Exemplo: +258821234567"
          lazy-rules

        > <template v-slot:prepend>
          <q-icon name="smartphone" />
        </template>
        </q-input>
      </div>
      <div class="col-12 col-md-6">
          <q-input
                v-model="company.address2"
                label="Outro endereço"
                hint="Outro endereço"
                lazy-rules

        > <template v-slot:prepend>
            <q-icon name="home" />
            </template>
        </q-input>
      </div>
       <div class="col-12 col-md-6">
          <q-input
                v-model="company.address3"
                label="Outro endereço"
                hint="Outro endereço"
                lazy-rules

        > <template v-slot:prepend>
            <q-icon name="home" />
            </template>
        </q-input>
      </div>



      <div class="col-12">
        <q-btn label="Actualizar informação" type="submit" color="primary"/>
      </div>
    </div>
     </q-card>



    </q-form>


  </div>
</template>

<style lang="sass" scoped>
.row > div
  padding: 10px 15px

.row + .row
  margin-top: 1rem
</style>

<script>
import Loading from "components/Loading";
export default {
    data(){
        return {
            company:{
                name:'', address1:'', address2:'', address:'',whatsapp:'', address3:'', email2:'', email1:'', website:'', telephone:'', telephone1:'',
            }
        }
    },

    methods:{
        onSubmit(){
            this.$axios.put('company/'+this.company.id, {
              data:this.company,
              _method:'patch'
            }).then(done=>{
              console.log(done)
              Loading.openSuccess("Perfil actualizado com sucesso")
            }).catch(error=>{
              console.log(error)})
        }
    },
  mounted() {
      this.$axios.get('/company/get/user-company').then(done=>{this.company=done.data})
  }
}
</script>
