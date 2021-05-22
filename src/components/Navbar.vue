<template>
  <b-navbar class="p-3 shadow bg-white">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
    <div>
      <router-link :to="{name: 'MedicinesRegistration'}">
        <b-button
          class="mr-4"
          variant="outline-info"
        >
          <span><i class="fas fa-plus"></i></span> Medicamentos
        </b-button>
      </router-link>
    </div>

    <b-button
      variant="outline-info"
      @click="listMedicines"
    >
      Lista de Medicamentos 11
    </b-button>
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
      console.log("dsdas", this.$route.params.view = "listaDeMedicamentos")
      return this.$route.params.view = "listaDeMedicamentos"
    }
  }
}
</script>