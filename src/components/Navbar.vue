<template>
  <b-navbar class="px-5 py-3 shadow bg-white">
    <b-navbar-brand href="#">G-Pharm</b-navbar-brand>

    <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
    <div>
      <router-link :to="{ name: 'MedicinesRegistration' }">
        <b-button
          class="mr-0"
          variant="outline-info"
        >
          <span><i class="fas fa-plus"></i></span> Medicamentos
        </b-button>
      </router-link>
    </div>

    <router-link :to="{ name: 'ListMedicines' }">
      <b-button
        variant="outline-info"
        @click="listMedicines"
      >
        Lista de Medicamentos
      </b-button>
    </router-link>
  </b-navbar>

</template>

<script>
export default {
  data () {
    return {
    }
  },

  methods: {
    listMedicines () {
    }
  }
}
</script>

<style scoped>
.navbar-expand {
  justify-content: space-between !important;
}
</style>