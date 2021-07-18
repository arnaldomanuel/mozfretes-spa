<template>
  <q-layout view="lHh Lpr lff" style="height: 900px" class="shadow-2 rounded-borders">

    <q-header reveal elevated>
      <q-toolbar>
        <q-btn flat round @click="drawer = !drawer" dense icon="menu" class="q-mr-sm"/>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>

        <q-toolbar-title>MozFretes</q-toolbar-title>

        <q-btn-dropdown class="gt-sm" color="primary" :label="authUser">
          <q-list>
            <q-item to="/meu-perfil" clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar icon="assignment_ind" color="primary" text-color="white"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Meu Perfil</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" color="amber"/>
              </q-item-section>
            </q-item>

            <q-item to="/perfil-empresa" clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar icon="assignment_ind" color="primary" text-color="white"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Perfil da empresa</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" color="amber"/>
              </q-item-section>
            </q-item>


            <q-item @click="confirm=true" clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar icon="lock_open" color="primary" text-color="white"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Logout</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" color="amber"/>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="400"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item to="/veiculo" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="local_shipping"/>
            </q-item-section>

            <q-item-section>
              Veículos
            </q-item-section>
          </q-item>

          <q-item to="/viagem" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="edit_road"/>
            </q-item-section>

            <q-item-section>
              Viajens
            </q-item-section>
          </q-item>

          <q-item to="/servico" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="star"/>
            </q-item-section>

            <q-item-section>
              Serviços
            </q-item-section>
          </q-item>
          <q-item to="/carga" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="business_center"/>
            </q-item-section>

            <q-item-section>
              Carga
            </q-item-section>
          </q-item>
          <q-item to="/empresa" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="business" />
            </q-item-section>

            <q-item-section>
              Empresas
            </q-item-section>
          </q-item>
          <q-item class="lt-sm" @click="confirm=true" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="lock_open"/>
            </q-item-section>

            <q-item-section>
              Logout
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="~/assets/img/backgroundimage.jpg" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container class="bg-grey-3">
      <q-page padding>
        <router-view/>
      </q-page>
    </q-page-container>
    <template>
      <q-dialog v-model="confirm" persistent>
        <confirm-logout-dialog/>
      </q-dialog>
    </template>

  </q-layout>
</template>

<script>
import ConfirmLogoutDialog from "../dialogs/ConfirmLogoutDialog.vue";
import AuthServices from "src/Services/AuthServices";
import { mapGetters } from "vuex";
export default {
  name: 'MainLayout',
  components: {ConfirmLogoutDialog},
  data() {
    return {
      drawer: false,
      miniState: true,
      confirm: false,
    }
  },
  methods:{
    logout() {
      this.$store.dispatch("auth/logout");
    }
  },
  computed: {
    ...mapGetters("mozfretes", ["authUser"]),
  },

 async beforeCreate() {
    await this.$store.dispatch("mozfretes/getAuthUser");
   console.log(this.$store.getters["mozfretes/authUser"])
  }

}
</script>
