<template>
    <div>
          <q-card
      class="my-card"
    >
      <q-card-section>
        <div class="text-h5">Gestão de viajens</div>
        <div class="text-subtitle2">Se possui algum camião vago, registe-o aqui junto do percurso que vai seguir</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
          <template>
            <div class="">
                <q-btn to="/viagem/criar" class="q-mr-lg" color="secondary" label="Criar" icon="add" />
                <q-btn to="/viagem" class="q-mr-lg" color="secondary" label="Listar" icon="visibility" />
                <q-btn to="/viagem?news=novo" class="q-mr-lg" color="secondary" label="Listar novos" icon="visibility" />
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
