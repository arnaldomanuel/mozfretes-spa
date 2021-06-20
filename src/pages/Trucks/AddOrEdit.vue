<template>
    <div>
         <header-truck/>

           <q-card
      class="my-card q-mt-md"

    >
      <q-card-section>
        <div class="text-h6">Adicionar caminhão</div>

      </q-card-section>

      <q-card-section class="q-pt-none">
         <q-form
      @submit="onSubmit"

      class="q-gutter-md"
    >
    <div class="row">
        <div class="col-12 col-lg-8">
<q-input
        filled
         class="q-mr-lg"
        v-model="truck.name"
        label="Nome único do veículo"
        hint="Pode colocar a matrícula ou um nome que identifique o seu veículo"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
      >

      <template v-slot:prepend>
            <q-icon name="local_shipping" />
            </template>
      </q-input>

        </div>
        <div class="col-12 col-lg-4">
            <q-input
        filled
        class="q-mr-lg"
       type="number"
       step=".01"
        v-model="truck.maximum_capacity"
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
         <div class="col-12 col-lg-6  q-mt-md">
<q-input
        filled
         class="q-mr-lg"
        v-model="truck.brand"
        label="Marca veículo"

        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
      >

      <template v-slot:prepend>
            <q-icon name="dashboard" />
            </template>
      </q-input>

        </div>

          <div class="col-12 col-lg-6 q-mt-md">
<q-input
        filled
         class="q-mr-lg"
        v-model="truck.model"
        label="Modelo do veículo"

        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
      >

      <template v-slot:prepend>
            <q-icon name="layers" />
            </template>
      </q-input>

        </div>

        <div class="col-12">
            <q-file
        name="poster_file"
        v-model="file"
        filled
        use-chips
        accept=".jpeg, .png, .jpg"
        max-file-size="1024"
        @rejected="onRejectedTruckPic"
        label="Carregue a foto do veículo"
      >  <template v-slot:prepend>
          <q-icon name="image" />
        </template> </q-file>

        </div>

    </div>

      <div>
        <q-btn label="Criar" type="submit" color="primary"/>

      </div>
    </q-form>
      </q-card-section>
    </q-card>

    </div>
</template>


<script>
import HeaderTruck from "./HeaderTruck.vue"
export default {
    components: {HeaderTruck},
    data(){
        return {
            truck: {
                name: '',
                brand:'',
                model: '',
                maximum_capacity:'',
                photo_path:'',
            },
            file:null,
        }
    },
    methods:{
        onSubmit(){

        },
        onRejectedTruckPic(){

        },
    }

}
</script>
