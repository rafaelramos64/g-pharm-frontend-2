<template>
  <b-container>
    <b-row class="text-center">
      <h1 class="my-4">
        Bem vindo ao G-Pharm
      </h1>
    </b-row>
    <b-row align-h="center" class="pt-2 ">
      <b-col cols="5" class="px-4">
        <b-card class="shadow-sm">
          <b-card-body class="py-4">
            <b-card-title>Cadastro de medicamentos</b-card-title>
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
              Veja aqui a lista de <code>Medicamentos</code>.
            </b-card-text>
            <router-link :to="{ name: 'ListMedicines' }">
              <b-button
                variant="outline-success"
              >
              <span><i class="fas fa-list-ul"> </i></span> Medicamentos
            </b-button>
          </router-link>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <b-row align-h="center" class=" mt-3">
      <b-col cols="5" class="px-4">
        <b-card class="shadow-sm">
          <b-card-body class="py-4">
            <b-card-title>Vendedores</b-card-title>

            <b-card-text>
              Cadastro aqui um novo <code>Vendedor</code>.
            </b-card-text>
            <router-link :to="{ name: 'VendorsRegistration' }">
              <b-button
                variant="outline-success"
              >
              <span><i class="fas fa-plus"></i></span> Vendedor
            </b-button>
          </router-link>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col cols="5"></b-col>
    </b-row>

    <b-row align-h="center" class=" mt-3">
      <b-col cols="5" class="px-4">
        <b-card class="shadow-sm">
          <b-card-body class="py-4">
            <b-card-title>Cadastro de vendas</b-card-title>

            <b-card-text>
            Cadastre aqui uma <code>Venda</code>.
            </b-card-text>
            <router-link :to="{ name: 'SalesRegistration' }">
              <b-button
                variant="outline-success"
              >
              <span><i class="fas fa-plus"></i></span> Vendas
            </b-button>
          </router-link>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col cols="5" class="px-4">
        <b-card class="shadow-sm">
          <b-card-body class="py-4">
            <b-card-title>Vendas</b-card-title>

            <b-card-text>
            Veja aqui a lista de <code>Vendas</code>.
            </b-card-text>
            <router-link :to="{ name: 'ListSales' }">
              <b-button
                variant="outline-success"
              >
              <span><i class="fas fa-list-ul"></i></span> Vendas
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
  min-height: 3rem !important;
}

.card:hover {
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
  border-left: none !important;
  border-right: none !important;
  border-bottom: none !important;
}
</style>