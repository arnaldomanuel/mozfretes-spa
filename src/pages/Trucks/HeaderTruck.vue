<template>
    <div>
          <q-card
      class="my-card"
    >
      <q-card-section>
        <div class="text-h5">Gestão de veículos</div>
        <div class="text-subtitle2">Registe, edite e elimine veículos que sua empresa possui</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
          <template>
            <div class="">
                <q-btn to="/veiculo/criar" class="q-mr-lg" color="secondary" label="Criar" icon="add" />
                <q-btn to="/veiculo" class="q-mr-lg" color="secondary" label="Listar" icon="visibility" />
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