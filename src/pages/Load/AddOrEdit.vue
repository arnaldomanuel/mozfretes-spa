<template>
  <div>
    <header-freight-journey/>


    <q-card
      class="my-card q-mt-md"

    >
      <q-card-section>
        <div class="text-h6">Adicionar carga</div>

      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form
          @submit="onSubmit"

          class="q-gutter-md"
        >

          <div class="row">
                        <div class="col-12  q-mt-md">
                <q-file
                  name="poster_file"
                  v-model="file"
                  filled
                  use-chips
                  accept=".jpeg, .png, .jpg"
                  max-file-size="1024"
                  @rejected="onRejectedLoadPic"
                  class="q-mr-lg"
                  label="Carregue uma foto da carga"
                >  <template v-slot:prepend>
                  <q-icon name="insert_photo" />
                </template> </q-file>
              </div>

            </div>

          <div class="row">
            <div class="col-12 col-lg-6">
              <q-input
                filled
                class="q-mr-lg"
                v-model="load.from_location"
                label="Ponto de partida"
                hint="Seja específico e evite erros ortográficos"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
              >

                <template v-slot:prepend>
                  <q-icon name="add_location"/>
                </template>
              </q-input>

            </div>
            <div class="col-12 col-lg-6">
              <q-input
                filled
                class="q-mr-lg"
                type="number"
                step=".01"
                v-model="load.to_location"
                label="Local de destino"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Campo obrigatório',
                val => val > 0  || 'Peso deve possuir valor positivo'
              ]"
              >
                <template v-slot:prepend>
                  <q-icon name="add_location"/>
                </template>
              </q-input>
            </div>


            <div class="col-12 col-lg-6 q-mt-md">
              <q-input class="q-mr-lg" @click="showDateTutorial=true" hint="Clique no ícone de calendário e depois no relógio"
                       label="Data de partida" readonly filled v-model="load.from_date">
                <template v-slot:prepend>
                  <q-icon color="primary" name="event" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                      <q-date v-model="load.from_date" mask="YYYY-MM-DD HH:mm">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Fechar" color="primary" flat/>
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>

                <template v-slot:append>
                  <q-icon color="primary" name="access_time" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                      <q-time v-model="load.from_date" mask="YYYY-MM-DD HH:mm" format24h>
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Fechar" color="primary" flat/>
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <di class="col-12 col-lg-6 q-mt-md">
              <q-input class="q-mr-lg" @click="showDateTutorial=true" hint="Clique no ícone de calendário e depois no relógio"
                       label="Data de destino" readonly filled v-model="load.to_date">
                <template v-slot:prepend>
                  <q-icon color="primary" name="event" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                      <q-date v-model="load.to_date" mask="YYYY-MM-DD HH:mm">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Fechar" color="primary" flat/>
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>

                <template v-slot:append>
                  <q-icon color="primary" name="access_time" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                      <q-time v-model="load.to_date" mask="YYYY-MM-DD HH:mm" format24h>
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Fechar" color="primary" flat/>
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </di>
            <div class="col-12 col-lg-6 q-mt-md">
              <q-input
                filled
                class="q-mr-lg"
                type="number"
                step=".01"
                v-model="load.weight"
                label="Capacidade máxima de carga em KG"
                lazy-rules
                :rules="[
          val => val !== null && val !== '' || 'Campo obrigatório',
          val => val > 0  || 'Peso deve possuir valor positivo'
        ]"
              >
                <template v-slot:prepend>
                  <q-icon name="add_location" />
                </template>
              </q-input>
            </div>


            <div class="col-12 col-lg-6 q-mt-md">
              <q-input
                filled
                class="q-mr-lg"
                v-model="load.phone_journey"
                hint="Se deixar em branco, os contactos da empresa serão usados"
                label="Contacto na viagem"
                lazy-rules

              >
                <template v-slot:prepend>
                  <q-icon name="phone"/>
                </template>
              </q-input>
            </div>


          </div>

          <div>
            <q-btn label="Criar" type="submit" color="primary"/>

          </div>
        </q-form>
      </q-card-section>
    </q-card>

    <!-- Dialogs e afins -->
    <template>
      <q-dialog v-model="showDateTutorial">
        <q-card>
          <q-card-section>
            <div class="text-h6">Como alterar a data?</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Clique no símbolo <span class="text-h5"><q-icon color="primary" name="event"/></span>
            e depois no símbolo <span class="text-h5"><q-icon color="primary" name="access_time"/></span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </template>
  </div>
</template>


<script>
import HeaderFreightJourney from "./HeaderLoad"

export default {
  components: {HeaderFreightJourney},
  data() {
    return {
      dialogDate: false,
      showDateTutorial: false,
      load: {
        name: '',
        description: '',
        from_location: '',
        to_location: '',
        from_date: '',
        to_date: '',
        phone_journey: '',
        status: '',
        id: '',
        weight:'',
        picture:null,
        from_date_date_part: '',
        from_date_hour_part: '',
      },
      options:[],
      file: null,
    }
  },
  methods: {
    onSubmit() {

    },
    onRejectedLoadPic() {
      alert(233)
    },
    filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.options=[]
          this.trucks.forEach(v=>{ this.options.push(v.name) })
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.options= this.trucks.filter(v => v.name.toLowerCase().indexOf(needle) > -1)
        /*this.options=[]
        trucksFiltered.forEach(v=>{ this.options.push(v.name) })*/
      })
    }
  }

}
</script>
