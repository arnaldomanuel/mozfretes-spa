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
      <div>
        <div class="row">
          <div class="col-lg-9" style="margin:0 auto;">
            <template>
              <div class="q-pa-md">

                <q-stepper
                  ref="stepper"
                  v-model="step"
                  animated
                  color="primary"

                  contracted
                >
                  <q-step
                    :done="step > 1"
                    :name="1"
                    icon="settings"
                    title="Select campaign settings"
                  >
                    <div>
                      <div class="row">
                        <div class="col-12">
                          <div class="text-h5 ">Ficamos felizes em seu interesse em utilizar nosso sistema.</div>
                          <div class="q-mt-md text-body1">Precisamos saber mais algumas coisas antes de você poder
                            utilizar o Moz Fretes para os seus transportes.
                          </div>

                        </div>
                        <div class="q-pa-md" style="max-width: 400px">


                        </div>

                        <div class="q-mt-md col-12">
                          <div class="text-body2 q-mb-md">Como te descreves?</div>
                          <q-select v-model="user.company_type" :dense="dense" :options="options"
                                    :options-dense="denseOpts" outlined>
                            <template v-slot:prepend>
                              <q-icon name="person"/>
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
                    :done="step > 2"
                    :name="2"
                    caption="Optional"
                    icon="create_new_folder"
                    title="Create an ad group"
                  >
                    <div>
                      <div>
                        <div class="q-mt-md q-ml-md text-body1">Precisamos saber mais algumas coisas antes de você poder
                          utilizar o Moz Fretes para os seus transportes.
                        </div>

                        <div>
                          <ul>
                            <li style="color:red" :key="message" v-for="message in messages" >{{message}}</li>
                          </ul>
                        </div>


                        <div class="q-pa-md">
                          <q-form

                            ref="myForm"

                            @submit="onSubmit"
                          >
                            <div class="q-gutter-md">

                              <q-input v-model="user.name" :rules="[
          val => val !== null && val !== '' || 'Campo obrigatório',
          val => val.length > 5  || 'Nome deve possuir mais de 5 caractéres e no máximo 255'
        ]"
                                       color="primary"
                                       filled

                                       label="Nome"
                                       lazy-rules>
                                <template v-slot:prepend>
                                  <q-icon name="home"/>
                                </template>
                              </q-input>

                              <q-input ref="email" v-model="user.email" :rules="[
          val => val !== null && val !== '' || 'Campo obrigatório',
          val => this.validEmail()  || 'Email inválido',
        ]" color="primary" filled label="Email"
                                       lazy-rules
                                       type="email">
                                <template v-slot:prepend>
                                  <q-icon name="email"/>
                                </template>
                              </q-input>

                              <q-input ref="password" v-model="user.password" :rules="[
          val => val !== null && val !== '' || 'Campo obrigatório',
          val => val.length > 7  || 'Senha deve possuir no mínimo 7 caractéres'
        ]" :type="'password'" color="primary" filled
                                       label="Senha"
                                       lazy-rules>
                                <template v-slot:prepend>
                                  <q-icon name="password"/>
                                </template>
                              </q-input>

                              <q-input ref="password_confirmation" v-model="user.password_confirmation"
                                       :rules="[
          val => val !== null && val !== '' || 'Campo obrigatório',
          val => val === this.user.password  || 'Senha deve ser igual a anterior'
        ]"
                                       :type="'password'"
                                       color="primary"
                                       filled label="Repita a senha" lazy-rules>
                                <template v-slot:prepend>
                                  <q-icon name="password"/>
                                </template>
                              </q-input>

                            </div>
                            <q-btn v-if="step==2" color="primary" label="Criar conta" type="submit"/>
                          </q-form>
                        </div>

                      </div>
                    </div>

                  </q-step>


                  <template v-slot:navigation>
                    <q-stepper-navigation>

                      <q-btn v-if="step==1 && user.company_type" :label="'Continuar'" color="primary"
                             @click="nextStepper()"/>
                      <q-btn v-if="step > 1" class="q-ml-sm" color="primary" flat label="Voltar"
                             @click="$refs.stepper.previous()"/>
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
import AuthService from "src/Services/AuthServices";
import Loading from "components/Loading";
import Error from "components/Error";
export default {

  data() {
    return {
      step: 1,
      options: [
        {
          label: 'Eu sou uma empresa de fretes',
          value: '1',
        },
        {
          label: 'Eu preciso de transportadora mercadoria',
          value: '2',
        },
        {
          label: 'Eu sou uma empresa que faz cargas e mercadorias',
          value: '3',
        },

      ],
      messages : [],
      model: '',
      dense: false,
      emailTouched: false,
      user: {
        company_type: '',
        email: '',
        name: '',
        password: '',
        password_confirmation: '',
      },
      denseOpts: false
    };
  },
  methods: {
    validEmail: function () {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.user.email).toLowerCase())
    },
    nextStepper() {
      this.$refs.stepper.next()
    },
    onSubmit() {

      if (this.$refs.myForm !== null && this.$refs.myForm !== undefined) {
        this.$refs.myForm.validate().then(success => {
          if (success) {
            this.messages=[]
            Loading.openNotify()
            AuthService.registerUser(this.user).then((done) => {

              AuthService.getAuthUser().then(done=>{

                this.$router.push('/perfil-empresa')
                console.log(done)
              })
              this.$router.push('/perfil-empresa')
            }).catch(({response}) => {
              Error.openNotify("Falha ao criar conta.",5000)
              let errors = response.data.errors
              Object.keys(errors).forEach(index=>{this.messages.push(errors[index].toString().replaceAll(",", "\n"))})
              console.log()
              Loading.closeNotify()
            });
            Loading.closeNotify()
          } else {
            console.log('no');
          }
        })
      }

    },

  },
  computed: {
    isEmailValid: function () {

      if (!this.user)
        return true

      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.user.email).toLowerCase())

    },
  },
  mounted() {

  }

};
</script>

<style>
.q-spinner {
  margin: 0 auto;
  display: block;;
}
</style>

