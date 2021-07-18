<template>
  <div>
    <header-truck/>

    <q-card
      class="my-card q-mt-md"

    >
      <q-card-section>
        <div class="text-h6">{{titlePage}}</div>


      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form ref="myForm"
          class="q-gutter-md"

          @submit="onSubmit"
        >
          <div class="row">
            <div class="col-12 col-lg-8">
              <q-input
                v-model="truck.name"
                :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
                class="q-mr-lg"
                filled
                hint="Pode colocar a matrícula ou um nome que identifique o seu veículo"
                label="Nome único do veículo"
                lazy-rules
              >

                <template v-slot:prepend>
                  <q-icon name="local_shipping"/>
                </template>
              </q-input>

            </div>
            <div class="col-12 col-lg-4">
              <q-input
                v-model="truck.maximum_capacity"
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
            <div class="col-12 col-lg-6  q-mt-md">
              <q-input
                v-model="truck.brand"
                :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
                class="q-mr-lg"
                filled

                label="Marca veículo"
                lazy-rules
              >

                <template v-slot:prepend>
                  <q-icon name="dashboard"/>
                </template>
              </q-input>

            </div>

            <div class="col-12 col-lg-6 q-mt-md">
              <q-input
                v-model="truck.model"
                :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
                class="q-mr-lg"
                filled

                label="Modelo do veículo"
                lazy-rules
              >

                <template v-slot:prepend>
                  <q-icon name="layers"/>
                </template>
              </q-input>

            </div>

            <div class="col-12">
              <q-file
                v-model="file"
                accept=".jpeg, .png, .jpg"
                filled
                label="Carregue a foto do veículo"
                max-file-size="1024000"
                name="poster_file"
                :hint="hintImage"
                use-chips
                @rejected="onRejectedTruckPic"
              >
                <template v-slot:prepend>
                  <q-icon name="image"/>
                </template>
              </q-file>

            </div>

          </div>

          <div>
            <q-btn color="primary" label="Criar" type="submit"/>

          </div>
        </q-form>
      </q-card-section>
    </q-card>

  </div>
</template>


<script>
import HeaderTruck from "./HeaderTruck.vue"
import Loading from "components/Loading";
import Error from "components/Error";

export default {
  components: {HeaderTruck},
  data() {
    return {
      truck: {
        name: '',
        brand: '',
        model: '',
        maximum_capacity: '',
        photo_path: '',
      },
      file: null,
      editPage:false,
    }
  },
  computed:{
    successMessage(){
      return this.editPage ? 'Veículo editado com sucesso' : 'Veículo criado com sucesso'
    },
    hintImage(){
      return this.editPage ? 'Se não quiser mudar a foto do veículo, não carregue e nem mexa' : ''
    },
    titlePage(){
      return this.editPage ?'Actualizar veículo': 'Adicionar Veículo'
    }
  },
  methods: {
    onSubmit() {
      if (this.$refs.myForm !== null && this.$refs.myForm !== undefined) {
        this.$refs.myForm.validate().then(success => {
          Loading.openNotify()
          let formData= new FormData()
          console.log(this.file)
          formData.append('name', this.truck.name)
          formData.append('model', this.truck.model)
          formData.append('brand', this.truck.brand)
          formData.append('maximum_capacity', this.truck.maximum_capacity)

          let submit = null
          if (this.editPage){
            if(this.file){
              formData.append("photo", this.file);
            }
            console.log('edir', formData.get('name'))
            submit= this.$axios.post('vehicle/'+this.truck.id,formData)
          }else{
            formData.append("photo", this.file);
            submit= this.$axios.post('/vehicle',formData)
          }
            submit.then(done=>{
              console.log(done)
              Loading.closeNotify()
              Loading.openSuccess(this.successMessage)
              this.$router.push(this.editPage ? '/veiculo/'+this.truck.id:'/veiculo')
          }).catch(error=>{
            console.log(error)
            Loading.closeNotify()
          })
        })
      }
    },
    onRejectedTruckPic() {
      Error.openNotify("Imagem deve ter menos de 1MB", 4000)
    },
  },
  mounted() {
    let url = location.href
    if (url.indexOf("edit")>=0){
      this.editPage = true
      let urlArray = url.split("/")
      let id = urlArray[urlArray.length-1]
      this.$axios.get('vehicle/'+id).then(done=>{
        this.truck = done.data
      })
    }
  }

}
</script>
