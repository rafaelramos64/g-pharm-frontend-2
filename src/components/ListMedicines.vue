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
            <div class="text-center d-inline-flex-center">
              <b-button
                v-b-tooltip.hover="{ variant: 'success' }" title="Editar medicamento"
                @click="editById(data.item.id)">
                <span style="color: #13c09d"><i class="fas fa-pencil-alt fa-lg"></i></span>
              </b-button>
              <b-button
                v-b-tooltip.hover.v-danger title="Deletar medicamento"
                @click="deleteById(data.item.id)"
                class="mx-4">
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
  name: "ListMedicines",
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
          label: "Opções",
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
    async getAllMedicines(){
      const res = await this.$axios.get('medicines')
      this.items = res.data;
      this.loading = false;
    },

    editById(id){
      this.$router.push({ name:'MedicinesRegistrationEdit', params:{id} });
    },

    async deleteById (idToDelete) {
      this.$swal.fire({
        title: 'Você tem certeza?',
        text: 'Você está deletando este medicamento.',
        icon: 'warning',
        focusConfirm: false,
        showCloseButton: true,
        confirmButtonText: 'Confirmar',
        denyButtonText: 'Cancelar',
        showCancelButton: true,
        confirmButtonColor: '#38C172',
        cancelButtonColor: '#dc3545'
        }).then((result) => {
        if (result.isConfirmed) {
          try {
            this.$axios.delete(`/medicines/${idToDelete}`);

            this.$swal({
              icon: "success",
              title: "Medicamento deletado com sucesso!",
              confirmButtonColor: '#38C172',
              timer: 1500
            });

            setTimeout(() => {
              document.location.reload();
            }, 1100)

          } catch (error) {
            console.log(error);
            this.$swal({
            icon: "error",
            confirmButtonColor: '#38C172',
            title: "Oops...",
            text: "Erro ao deletar medicamento.",
            timer: 1500
          });
          }
        };
      })
       
    },
    
    infoById () {

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

.btn:hover {
  box-shadow: none !important;
}

</style>
