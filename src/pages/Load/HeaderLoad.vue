<template>
    <div>
          <q-card
      class="my-card"
    >
      <q-card-section>
        <div class="text-h5">Gestão de cargas</div>
        <div class="text-subtitle2">Se possui alguma carga que precisa despachar, registe aqui</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
          <template>
            <div class="">
                <q-btn to="/carga/criar" class="q-mr-lg" color="secondary" label="Criar" icon="add" />
                <q-btn to="/carga" class="q-mr-lg" color="secondary" label="Listar" icon="visibility" />
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
