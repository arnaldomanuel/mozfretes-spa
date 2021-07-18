<template>

  <div class="q-pa-md">
    <div class="row">
      <div class="col-12 col-md-6 ">
        <q-card class="">
          <q-card-section>
            <div class="text-h6 ">Actualize a sua foto de perfil</div>
            <div class="q-mb-md">
              <q-file
                name="poster_file"
                v-model="file"
                filled
                use-chips
                accept=".jpeg, .png, .jpg"
                max-file-size="10"
                @rejected="onRejectedProfilePicture"
                label="Escolha a sua foto de perfil"
              >
                <template v-slot:prepend>
                  <q-icon name="image"/>
                </template>
              </q-file>


            </div>

            <div>
              <q-btn label="Actualizar" type="submit" color="primary"/>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-6 q-pa-md">
        <q-card>
          <q-card-section>
            <q-form
              @submit="onSubmit"
              class="q-gutter-md"
            >
              <div class="col-12">
                <q-input
                  v-model="user.name"
                  label="Nome *"

                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'O nome está vazio']"
                >
                  <template v-slot:prepend>
                    <q-icon name="person"/>
                  </template>
                </q-input>
              </div>
              <div class="col-12">
                <q-btn label="Actualizar nome" type="submit" color="primary"/>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6 q-pa-md">
        <q-card>
          <q-card-section>
            <div class="text-h6">Actualize a sua senha</div>
            <q-input v-model="password" label="Senha antiga" filled :type="isPwd ? 'password' : 'text'">
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <q-input v-model="password_new" label="Senha nova" filled :type="isPwd ? 'password' : 'text'">
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <q-input v-model="password_new_confirmation" label="Repita a nova senha" filled
                     :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                  :rules="[val=> val!==this.password_new || 'A senha deve ser igual a anterior']"
                />
              </template>
            </q-input>
            <q-btn label="Actualizar senha" type="submit" color="primary"/>
          </q-card-section>
        </q-card>
      </div>


    </div>

  </div>
</template>

<style lang="sass" scoped>
.row > div
  padding: 10px 15px

.row + .row
  margin-top: 1rem
</style>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        address1: '',
        address2: '',
        address: '',
        address3: '',
        email: '',
        email1: '',
        website: '',
        telephone: '',
        telephone1: '',
      },
      password: '',
      password_new: '',
      password_new_confirmation: '',
      file: null,

      isPwd: true,

      submitEmpty: false,
      submitResult: []

    }
  },

  methods: {
    onSubmit() {

    },
    onRejectedProfilePicture(rejectedEntries) {
      this.$q.notify({
        type: 'negative',
        message: `ficheiro deve ser uma foto com menos de 1MB`
      })
    }
  },
  mounted() {
    this.$axios.get('/company/get/user-company').then(done=>{this.user=done.data})
  }
}
</script>
