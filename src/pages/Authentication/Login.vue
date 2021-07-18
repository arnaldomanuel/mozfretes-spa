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
              <div class="col-12">
                <template>
                  <div class="q-pa-md ">
                    <template>
                      <div class="q-pa-md">

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
import Error from "components/Error";
import AuthService from "src/Services/AuthServices";
import Loading from "components/Loading";
export default {
  data() {
    return {

      model: "",
      dense: false,
      user: {
        email: "",

        password: "",
      },
      messageFromSerer: "",
      denseOpts: false,
    };
  },
  methods: {
    onSubmit() {

      if (this.$refs.myForm !== null && this.$refs.myForm !== undefined) {
        this.$refs.myForm.validate().then(success => {
          if (success) {
            Loading.openNotify()
             AuthService.login(this.user).then(success=>{
               this.$store.dispatch("mozfretes/getAuthUser");
               Loading.openSuccess("Autenticação feita com sucesso")
               this.$router.push("/veiculo");
             }).catch(erro => {
                Error.openNotify(erro.response.data.email[0]);
             });
            Loading.closeNotify()
          }
        })
      }

    },
  },
  computed: {},
  mounted() {

  }
};
</script>

<style>
.q-spinner {
  margin: 0 auto;
  display: block;
}
</style>

