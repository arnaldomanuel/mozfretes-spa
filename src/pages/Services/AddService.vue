<template>
  <q-card style="width: 700px; max-width: 80vw">
    <q-card-section>
      <div class="text-h6">Adicionar serviço</div>
    </q-card-section>
    <q-form
      @submit="onSubmit"
    >
    <q-card-section class="q-pt-none">

        <q-file
          v-model="file"
          accept=".pdf, .jpeg, .png, .jpg, .pdf"
          filled
          label="Carregue um PDF ou uma foto com os seus serviços"
          max-file-size="3000000"
          name="poster_file"
          use-chips
          @rejected="onRejectedFile"
        >
          <template v-slot:prepend>
            <q-icon name="attachment"/>
          </template>
        </q-file>

        <q-input
          v-model="service.title"
          :rules="[
              val => val !== null && val !== '' || 'Campo obrigatório',
            ]"
          class="q-mt-lg"
          filled
          label="Título ou descrição"
          lazy-rules
          type="text"
        >
          <template v-slot:prepend>
            <q-icon name="description"/>
          </template>
        </q-input>




    </q-card-section>

    <q-card-section>
      <q-btn color="primary" label="Guardar" type="submit"/>
    </q-card-section>
    </q-form>

  </q-card>

</template>

<script>
import Error from "components/Error";
import Loading from "components/Loading";

export default {
  props: {
    option: {type: Boolean, default: false}
  },
  data() {
    return {

      file: null,
      service: {
        title: '',
        file: '',
      },

      options: this.option,
    }
  },
  methods: {
    onSubmit() {
      console.log("DOne")
      let formData = new FormData();
      formData.append('title', this.service.title)
      formData.append('file', this.file)

      this.$axios.post('/service', formData).then(done=>{
        Loading.openSuccess("Serviço criado com sucesso", 5000)
        this.$emit('serviceCreated')
        console.log(done)
      }).catch(error=>{
        Error.openNotify("Houve um erro ao tentar criar serviço", 4000)
        console.log(error)
      })
    },
    onRejectedFile() {
      Error.openNotify("Imagem ou Documento PDF deve ter menos de 3MB", 5000)
    },


  },
  computed: {
    $_options: {
      get: function () {
        return this.option;
      },
      set: function (val) {
        this.$emit('update-options', val);
      }
    }
  },
};
</script>
