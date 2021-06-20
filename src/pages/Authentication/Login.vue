
<template>
  <div class="q-mt-xl q-pt-xl">
    <div class="flex flex-center">
      <img
        alt="Quasar logo"
        src="~assets/img/logo.jpg"
        style="width: 150px; height: 150px; margin: 0 auto"
      />
    </div>
    <div class="text-h5 q-mt-md text-center primary-color-text">
      Insira seu email e senha
    </div>
    <div>
      <div>
        <div class="row">
             <q-card style="margin: 0 auto" class="col-12 col-md-6 col-lg-5 my-card">
      <q-card-section>
        <div  class="col-12">
            <template>
              <div class="q-pa-md ">
                  <template>
  <div class="q-pa-md" >

    <q-form
      @submit="onSubmit"
     
      ref="myForm"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="user.email"
        label="Email*"
        hint=""
        type="email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Digite seu email']"
      />

      <q-input
        filled
        type="password"
        v-model="user.password"
        label="Senha *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Digite sua senha']"
      />
      
      <div>
        <q-btn label="Login" type="submit" color="primary"/>
       
      </div>
    </q-form>

  </div>
</template>
              </div>
            </template>
          </div>
      </q-card-section>
    </q-card>
         
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
     
      model: "",
      dense: false,
      user: {
        email: "",
        name: "",
        password: "",
      },
      messageFromSerer:"",
      denseOpts: false,
    };
  },
  methods: {
     onSubmit () {
       
      if (this.$refs.myForm !== null && this.$refs.myForm !== undefined) {
        this.$refs.myForm.validate().then(success => {
            var spinner = this.$q.notify({
        spinner: true,
        message: 'Por favor agaurde',
        timeout:0,
      })
          if (success) {
                
             this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Credenciais erradas'
        })
          }
          else {
            
            console.log('no');
          }
        })
      }

    },
  },
  computed: {
    
  },
};
</script>

<style >
.q-spinner {
  margin: 0 auto;
  display: block;
}
</style>

