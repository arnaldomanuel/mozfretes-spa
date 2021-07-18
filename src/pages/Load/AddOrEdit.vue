<template>
  <div>
    <header-freight-journey/>


    <q-card
      class="my-card q-mt-md"

    >
      <q-card-section>
        <div class="text-h6">{{titlePage}}</div>

      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form
          class="q-gutter-md"
          ref="myForm"
          @submit="onSubmit"
        >

          <div class="row">
            <div class="col-12  q-mt-md">
              <q-file
                v-model="file"
                accept=".jpeg, .png, .jpg"
                class="q-mr-lg"
                filled
                :hint="hintImage"
                label="Carregue uma foto da carga"
                max-file-size="1024000"
                name="poster_file"
                use-chips
                @rejected="onRejectedLoadPic"
              >
                <template v-slot:prepend>
                  <q-icon name="insert_photo"/>
                </template>
              </q-file>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-lg-6">
              <q-input
                v-model="load.from_location"
                :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
                class="q-mr-lg"
                filled
                hint="Seja específico e evite erros ortográficos"
                label="Ponto de partida"
                lazy-rules
              >

                <template v-slot:prepend>
                  <q-icon name="add_location"/>
                </template>
              </q-input>

            </div>
            <div class="col-12 col-lg-6">
              <q-input
                v-model="load.to_location"
                :rules="[
                val => val !== null && val !== '' || 'Campo obrigatório',

              ]"
                class="q-mr-lg"
                filled
                label="Local de destino"
                lazy-rules

              >
                <template v-slot:prepend>
                  <q-icon name="add_location"/>
                </template>
              </q-input>
            </div>


            <div class="col-12 col-lg-6 q-mt-md">
              <q-input v-model="load.from_date" class="q-mr-lg"
                       filled
                       hint="Clique no ícone de calendário e depois no relógio" label="Data de partida" readonly @click="showDateTutorial=true">
                <template v-slot:prepend>
                  <q-icon class="cursor-pointer" color="primary" name="event">
                    <q-popup-proxy transition-hide="scale" transition-show="scale">
                      <q-date v-model="load.from_date" mask="YYYY-MM-DD HH:mm">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup color="primary" flat label="Fechar"/>
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>

                <template v-slot:append>
                  <q-icon class="cursor-pointer" color="primary" name="access_time">
                    <q-popup-proxy transition-hide="scale" transition-show="scale">
                      <q-time v-model="load.from_date" format24h mask="YYYY-MM-DD HH:mm">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup color="primary" flat label="Fechar"/>
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col-12 col-lg-6 q-mt-md">
              <q-input v-model="load.to_date" class="q-mr-lg"
                       filled
                       hint="Clique no ícone de calendário e depois no relógio" label="Data de destino" readonly @click="showDateTutorial=true">
                <template v-slot:prepend>
                  <q-icon class="cursor-pointer" color="primary" name="event">
                    <q-popup-proxy transition-hide="scale" transition-show="scale">
                      <q-date v-model="load.to_date" mask="YYYY-MM-DD HH:mm">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup color="primary" flat label="Fechar"/>
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>

                <template v-slot:append>
                  <q-icon class="cursor-pointer" color="primary" name="access_time">
                    <q-popup-proxy transition-hide="scale" transition-show="scale">
                      <q-time v-model="load.to_date" format24h mask="YYYY-MM-DD HH:mm">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup color="primary" flat label="Fechar"/>
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col-12 col-lg-6 q-mt-md">
              <q-input
                v-model="load.weight"
                :rules="[
          val => val !== null && val !== '' || 'Campo obrigatório',
          val => val > 0  || 'Peso deve possuir valor positivo'
        ]"
                class="q-mr-lg"
                filled
                label="Capacidade máxima de carga em KG"
                lazy-rules
                step=".01"
                type="number"
              >
                <template v-slot:prepend>
                  <q-icon name="add_location"/>
                </template>
              </q-input>
            </div>


            <div class="col-12 col-lg-6 q-mt-md">
              <q-input
                v-model="load.phone_journey"
                class="q-mr-lg"
                filled
                hint="Se deixar em branco, os contactos da empresa serão usados"
                label="Contacto na carga"
                lazy-rules

              >
                <template v-slot:prepend>
                  <q-icon name="phone"/>
                </template>
              </q-input>
            </div>


          </div>

          <div>
            <q-btn color="primary" label="Criar" type="submit"/>

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
            <q-btn v-close-popup color="primary" flat label="OK"/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </template>


  </div>
</template>


<script>
import HeaderFreightJourney from "./HeaderLoad"
import Loading from "components/Loading";
import Error from "components/Error";

export default {
  components: {HeaderFreightJourney},
  data() {
    return {
      editPage:false,
      dialogDate: false,
      showDateTutorial: false,
      load: {
        name: '',
        description: '',
        from_location: '',
        to_location: '',
        from_date: null,
        to_date: null,
        phone_journey: '',
        status: '',
        id: '',
        weight: '',
        picture: null,
        from_date_date_part: '',
        from_date_hour_part: '',
      },
      options: [],
      file: null,
    }
  },
  methods: {
    onSubmit() {

      if(this.load.from_date==null){
          Error.openNotify("Preencha a data de partida", 5000)
        return
      }
      if(this.load.to_date==null){
        Error.openNotify("Preencha a data de destino", 5000)
        return
      }

      if (this.$refs.myForm !== null && this.$refs.myForm !== undefined) {
        this.$refs.myForm.validate().then(success => {
          Loading.openNotify()
          let formData= new FormData()

         formData.append("load", JSON.stringify(this.load))
          formData.append("picture", this.file)

          let submit = null
          if (this.editPage){
            if(this.file){
              formData.append("photo", this.file);
            }

            submit= this.$axios.post('load/'+this.load.id,formData)
          }else{
            formData.append("photo", this.file);
            submit= this.$axios.post('/load',formData)
          }
          submit.then(done=>{
            console.log(done)
            Loading.closeNotify()
            Loading.openSuccess(this.successMessage)
            this.$router.push(this.editPage ? '/carga/'+this.load.id:'/carga')
          }).catch(error=>{
            console.log(error)
            Loading.closeNotify()
          })
        })
      }
    },
    onRejectedLoadPic() {
      Error.openNotify("Imagem deve ter menos de 1MB")
    },
  },
  computed:{
    successMessage(){
      return this.editPage ? 'Carga editada com sucesso' : 'Carga criada com sucesso'
    },
    hintImage(){
      return this.editPage ? 'Se não quiser mudar a foto da carga, não carregue e nem mexa' : ''
    },
    titlePage(){
      return this.editPage ?'Actualizar carga': 'Adicionar carga'
    }
  },
  mounted() {
    let url = location.href
    if (url.indexOf("edit")>=0){
      this.editPage = true
      let urlArray = url.split("/")
      let id = urlArray[urlArray.length-1]
      this.$axios.get('load/'+id).then(done=>{
        this.load = done.data
      })
    }
  }

}
</script>
