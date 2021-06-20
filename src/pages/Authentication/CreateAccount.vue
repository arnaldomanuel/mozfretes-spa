<template>
  <div class="q-mt-xl q-pt-xl">
    <div class="flex flex-center">
      <img
        alt="Quasar logo"
        src="~assets/img/logo.jpg"
        style="width: 150px; height: 150px; margin: 0 auto;"
      />
    </div>
    <div class="text-h4 text-center primary-color-text">
      Seja Bem Vindo a Moz Fretes
    </div>
    <div>
<div >
<div  class="row">
        <div style="margin:0 auto;" class="col-lg-9">
            <template>
  <div class="q-pa-md">
      
    <q-stepper
      v-model="step"
      ref="stepper"
     contracted
      color="primary"
     
      animated
    >
      <q-step
        :name="1"
        title="Select campaign settings"
        icon="settings"
        :done="step > 1"
      >
        <div>
            <div class="row">
                <div class="col-12">
                    <div class="text-h5 ">Ficamos felizes em seu interesse em utilizar nosso sistema.</div>
                    <div class="q-mt-md text-body1">Precisamos saber mais algumas coisas antes de você poder utilizar o Moz Fretes para os seus transportes. </div>
                
                </div>
                 <div class="q-pa-md" style="max-width: 400px">

    

  </div>

                <div class="q-mt-md col-12">
                    <div class="text-body2 q-mb-md">Como te descreves?</div> 
                <q-select outlined v-model="user.type.value" :options="options" :dense="dense" :options-dense="denseOpts">
                    <template v-slot:prepend>
                        <q-icon name="person" />
                    </template>
                     <template v-slot:hint>
                    Quem é você?
                    </template>
                </q-select>
                </div>
            </div>
        </div>
      </q-step>

      <q-step
        :name="2"
        title="Create an ad group"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
      >
       <div >
                <div >
                    <div class="q-mt-md q-ml-md text-body1">Precisamos saber mais algumas coisas antes de você poder utilizar o Moz Fretes para os seus transportes. </div>
                
    
         <div class="q-pa-md">
           <q-form
      
      @submit="onSubmit"
    
      ref="myForm"
      >
    <div class="q-gutter-md" >
     
       <q-input color="primary" filled 
       lazy-rules
       v-model="user.name" 
       :rules="[
          val => val !== null && val !== '' || 'Campo obrigatório',
          val => val.length > 5  || 'Nome deve possuir mais de 5 caractéres e no máximo 255'
        ]"
       label="Nome">
        <template v-slot:prepend>
          <q-icon name="home" />
        </template>
      </q-input>

       <q-input color="primary"  ref="email" lazy-rules  filled v-model="user.email" type="email" 
           :rules="[
          val => val !== null && val !== '' || 'Campo obrigatório',
          val => this.validEmail()  || 'Email inválido',
        ]"
          label="Email">
        <template v-slot:prepend>
          <q-icon name="email" />
        </template>
      </q-input>

       <q-input color="primary" ref="password" :type="'password'" lazy-rules  filled v-model="user.password"
       :rules="[
          val => val !== null && val !== '' || 'Campo obrigatório',
          val => val.length > 7  || 'Senha deve possuir no mínimo 7 caractéres'
        ]"
        label="Senha">
        <template v-slot:prepend>
          <q-icon name="password" />
        </template>
      </q-input>

       <q-input color="primary"  :type="'password'" 
         :rules="[
          val => val !== null && val !== '' || 'Campo obrigatório',
          val => val !== this.user.password  || 'Senha deve ser igual a anterior'
        ]" 
        lazy-rules
          ref="password_confirmation"
       filled v-model="user.password_confirmation" label="Repita a senha">
        <template v-slot:prepend>
          <q-icon name="password" />
        </template>
      </q-input>
     
    </div>
     <q-btn v-if="step==2"  label="Criar conta" type="submit" color="primary"/>
    </q-form>
       </div>
     
        </div>
       </div>
      
      </q-step>

    

      <template v-slot:navigation>
        <q-stepper-navigation>
         
          <q-btn v-if="step==1 && user.type.value" @click="nextStepper()" color="primary" :label="'Continuar'" />
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Voltar" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
     
  </div>
</template>
        </div>
    </div>
</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
       options: [
           {
                label: 'Eu sou uma transportadora de cargas',
                value: '1',
           },
            {
                label: 'Eu preciso de transportar mercadoria',
                value: '2',
           },
            {
                label: 'Eu sou uma empresa que faz cargas e mercadorias',
                value: '3',
           },
        
      ],

        model:'',
      dense: false,
      emailTouched: false,
      user:{
          type:{},
          email:'',
          name:'',
          password: '',
          password_confirmation: '',
      },
      denseOpts: false
    };
  },
  methods: {
    validEmail: function(){
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.user.email).toLowerCase())
    },
    nextStepper(){
      this.$refs.stepper.next()
    },
     onSubmit () {
       
      if (this.$refs.myForm !== null && this.$refs.myForm !== undefined) {
        this.$refs.myForm.validate().then(success => {
          if (success) {
            console.log('sucess');
          }
          else {
            alert(29)
            console.log('no');
          }
        })
      }

    },

  },
  computed: {
    isEmailValid:function(){
      
      if(!this.user)
        return true

      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.user.email).toLowerCase())
     
    },
  }, 
  
};
</script>

<style >
.q-spinner {
  margin: 0 auto;
  display: block;;
}
</style>

