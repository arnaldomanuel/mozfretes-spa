<template>
      <q-card style="width: 700px; max-width: 80vw">
        <q-card-section>
          <div class="text-h6">Adicionar serviço</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
        <q-form
         @submit="onSubmit"
        >
           <q-file
        name="poster_file"
        v-model="file"
        filled
        use-chips
        accept=".pdf, .jpeg, .png, .jpg"
        max-file-size="10"
        
        label="Carregue um PDF ou uma foto com os seus serviços"
        >  <template v-slot:prepend>
          <q-icon name="attachment" />
        </template> </q-file>

      <q-input
            filled
            class="q-mt-lg"
          type="text"
         
            v-model="service.title"
            label="Título ou descrição"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Campo obrigatório',
              
            ]"
          >
          <template v-slot:prepend>
                <q-icon name="description" />
                </template> 
          </q-input>
          

        </q-form>

        </q-card-section>

        <q-card-section>
          <q-btn label="Guardar" type="submit"  color="primary"/>
        </q-card-section>

       
      </q-card>
   
</template>

<script>
export default {
     props: {
        opetion: { type: Boolean, default: false }
    },
     data(){
    return {

      file:null,
      service:{
        title:'',
      },
      options:this.opetion,
      }
    },
    methods:{
      onSubmit(){


      }


    },
    computed: {
        $_options: {
            get: function () {
                return this.opetion;
            },
            set: function (val) {
                this.$emit('update-options', val);
            }
        }
    },
};
</script>