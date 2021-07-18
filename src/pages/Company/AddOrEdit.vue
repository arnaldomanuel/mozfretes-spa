<template>
  <div>
    <header-freight-journey/>


    <q-card
      class="my-card q-mt-md"

    >
      <q-card-section>
        <div class="text-h6">Adicionar viajem</div>

      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form
          @submit="onSubmit"

          class="q-gutter-md"
        >
          <div class="row">
            <div class="col-12 col-lg-6">
              <q-input
                filled
                class="q-mr-lg"
                v-model="freight_journey.from_location"
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
                v-model="freight_journey.to_location"
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
                       label="Data de partida" readonly filled v-model="freight_journey.from_date">
                <template v-slot:prepend>
                  <q-icon color="primary" name="event" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                      <q-date v-model="freight_journey.from_date" mask="YYYY-MM-DD HH:mm">
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
                      <q-time v-model="freight_journey.from_date" mask="YYYY-MM-DD HH:mm" format24h>
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Fechar" color="primary" flat/>
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col-12 col-lg-6 q-mt-md">
              <q-input class="q-mr-lg" @click="showDateTutorial=true" hint="Clique no ícone de calendário e depois no relógio"
                       label="Data de destino" readonly filled v-model="freight_journey.to_date">
                <template v-slot:prepend>
                  <q-icon color="primary" name="event" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                      <q-date v-model="freight_journey.to_date" mask="YYYY-MM-DD HH:mm">
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
                      <q-time v-model="freight_journey.to_date" mask="YYYY-MM-DD HH:mm" format24h>
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Fechar" color="primary" flat/>
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col-12 col-lg-6 q-mt-md">
              <q-select
                filled
                v-model="freight_journey.truck_id"
                use-input
                input-debounce="0"
                label="Selecione o veículo da viagem"
                :options="options"
                @filter="filterFn"
               class="q-mr-md"
                behavior="menu"
              >
                <template v-slot:prepend>
                  <q-icon name="local_shipping" />
                </template>
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      <template>
                        <div class="q-pa-md q-gutter-sm">
                          Não existe um veículo com este nome. Pode
                          <q-btn to="/veiculo/criar" type="a" color="primary" label="Criar um novo" />
                        </div>
                      </template>
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </div>
            <div class="col-12 col-lg-6 q-mt-md">
              <div class="row">
                <div class="col-6 col-lg-4">
                  <q-toggle
                    v-model="freight_journey.price_set"
                    label="Preço negociável"
                    left-label
                  />
                </div>
                <div class="col-6 col-lg-8">
                  <q-input
                    filled
                    class="q-mr-lg"
                    v-model="freight_journey.price_negotiate"
                    label="Preço da viagem"
                    type="number"
                    step=".01"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
                  >

                    <template v-slot:prepend>
                      <q-icon name="monetization_on"/>
                    </template>
                  </q-input>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6 q-mt-md">
              <q-input
                filled
                class="q-mr-lg"
                v-model="freight_journey.phone_journey"
                hint="Se deixar em branco, os contactos da empresa serão usados"
                label="Contacto na viagem"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
              >
                <template v-slot:prepend>
                  <q-icon name="phone"/>
                </template>
              </q-input>
            </div>
            <div class="col-12 q-mt-lg">
              <div class="text-h6">
                  Descreva a viagem (opcional)
              </div>

              <q-editor hint="Descrição" v-model="freight_journey.description" min-height="5rem" />
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
import HeaderFreightJourney from "./HeaderCompany.vue"

export default {
  components: {HeaderFreightJourney},
  data() {
    return {
      dialogDate: false,
      showDateTutorial: false,
      freight_journey: {
        name: '',
        description: '',
        from_location: '',
        to_location: '',
        from_date: '',
        to_date: '',
        truck_id:'',
        price_set: true,
        price_negotiate: '',
        phone_journey: '',
        status: '',
        id: '',
        from_date_date_part: '',
        from_date_hour_part: '',
      },
      trucks:[ {
        id: '12',
        name: "MLK 20-34",
        brand: "Mazda",
        label:"MLK 20-34",
        value:'12',
        model: "Corolla",
        maximum_capacity: 2000.67,
      },
        {
          id: '13',
          name: "MLK 20-347",
          label:'MLK 20-347',
          value:'13',
          brand: "BMW",
          model: "Corolla",
          maximum_capacity: 2000.67,
        },
      ],
      options:[],
      file: null,
    }
  },
  methods: {
    onSubmit() {

    },
    onRejectedfreight_journeyPic() {

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
