<template>
    <div>
          <q-card
      class="my-card"
    >
      <q-card-section>
        <div class="text-h5">Gestão de empresas</div>
        <div class="text-subtitle2">Aqui verifique a lista de empresas que se registaram na plataforma</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
          <template>
            <div class="">

                <q-btn to="/empresa" class="q-mr-lg" color="secondary" label="Listar" icon="visibility" />
            </div>
            </template>
      </q-card-section>
    </q-card>

    </div>
</template>


<script>
export default {

}
</script>
