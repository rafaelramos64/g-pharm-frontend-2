<template>
  <b-container>
    <b-row class="text-center">
      <h1 class="my-5">
        Bem vindo ao G-Pharm
      </h1>
    </b-row>
    <b-row align-h="center" class="pt-4 ">
      <b-col cols="5" class="px-4">
        <b-card class="shadow-sm">
          <b-card-body class="py-4">
            <b-card-title>Cadastro</b-card-title>
            <b-card-text>
              Cadastre aqui um novo <code>Medicamento</code>.
            </b-card-text>
            <router-link :to="{ name: 'MedicinesRegistration' }">
              <b-button
                class="mr-0"
                variant="outline-success">
                <span><i class="fas fa-plus"></i></span> Medicamentos
              </b-button>
            </router-link>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col cols="5" class="px-4">
        <b-card class="shadow-sm">
          <b-card-body class="py-4">
            <b-card-title> Medicamentos</b-card-title>

            <b-card-text>
              Lista de <code>Medicamentos</code>.
            </b-card-text>
            <router-link :to="{ name: 'ListMedicines' }">
              <b-button
                variant="outline-success"
                @click="listMedicines"
              >
              Lista de Medicamentos
            </b-button>
          </router-link>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  name: "Home",
  components: {
  },
};
</script>

<style scoped>
.card {
  border-top: 3px solid #13c09d;

}

.card:hover {
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
  border-left: none !important;
  border-right: none !important;
  border-bottom: none !important;
}
</style>