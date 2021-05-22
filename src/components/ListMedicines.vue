<template>
  <b-container>
    <Loader v-if="loading"> </Loader>
    <b-row v-else>
      <b-col>
        <b-table
          striped
          hover
          :items="items"
          :fields="fields"
        >
          <template #cell(action)="data">
            <div class="text-center">
              <b-button
                v-b-tooltip.hover="{ variant: 'success' }" title="Editar medicamento"
                @click="editById(data.item.id)">
                <span style="color: #13c09d"><i class="far fa-edit fa-lg"></i></span>
              </b-button>
              <b-button
                v-b-tooltip.hover.v-danger title="Deletar medicamento"
                class="mx-4" @click="deletById(data.item.id)">
                <span style="color: #dc3545"><i class="far fa-trash-alt fa-lg"></i></span>
              </b-button>
              <b-button
                v-b-tooltip.hover="{ variant: 'info' }" title="Informações sobre o medicamento"
                @click="infoById(data.item.id)">
                <span style="color: #0dcaf0"><i class="fas fa-info-circle fa-lg"></i></span>
              </b-button>
            </div>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Loader from "../components/Loader";

export default {
  components: { Loader },
  data () {
    return {
      fields: [
        {
          key: "name",
          label: "Nome",
          sortable: true,
        },
        {
          key: "price",
          label: "Preço",
          sortable: false,
        },
        {
          key: "purchase_date",
          label: "Data de compra",
          sortable: true,
        },
        {
          key: "due_date",
          label: "Dada de vencimento",
          sortable: true,
        },
        {
          key: "stock",
          label: "Estoque",
          sortable: true,
        },
        {
          key: "action",
          label: "Ações",
          sortable: true,
          variant: "danger",
        },
      ],
      items: [
      ],
      loading: true
    };
  },
  created(){
    this.getAllMedicines()
  },

  methods: {
    editById(id){
      this.$router.push({name:'MedicinesRegistrationEdit', params:{id}});
    },

    deletById () {

    },
    
    infoById () {

    },
    async getAllMedicines(){
      const res = await this.$axios.get('medicines')
      this.items = res.data;
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.btn {
  padding: 0 !important;
  background-color: transparent !important;
  border: none !important;
}

</style>
