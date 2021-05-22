<template>
  <b-container fluid>
  <Loader v-if="loading"> </Loader>
    <b-row v-else class="justify-content-md-center">
      <b-col md="8">
        <b-form
          @submit.prevent="editOrCreateMedicine()"
          class="centralize"
        >
          <h1 class="mb-3 mt-3 text-center">Cadastro de Medicamento</h1>
          <b-form-group
            id="input-group-name"
            label="Nome"
            description="Informe o nome do medicamento"
            label-for="name"
            class="text-left my-3"
          >
            <b-form-input
              autocomplete="off"
              id="name"
              v-model="medicine.name"
              type="text"
              placeholder="Nome do medicamento"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-price"
            label="Preço"
            description="Informe o preço do medicamento"
            label-for="price"
            class="text-left my-3"
          >
            <b-input-group prepend="$">
              <b-form-input
                style="border-left: none"
                autocomplete="off"
                id="price"
                v-model="medicine.price"
                type="number"
                placeholder="Preço do medicamento"
                required
                step="any"
              ></b-form-input>
            </b-input-group>
          </b-form-group>

          <b-form-group
            id="input-group-puschaseDate"
            label="Data de compra"
            description="Informe o data de compra do medicamento"
            label-for="purchaseDate"
            class="text-left my-3"
          >
            <b-form-datepicker
              id=""
              v-model="medicine.purchaseDate"
              :date-format-options="{
                year: 'numeric',
                month: 'short',
                day: '2-digit',
                weekday: 'short',
              }"
              locale="pt"
              placeholder="Data de compra"
            ></b-form-datepicker>
          </b-form-group>

          <b-form-group
            id="input-group-dueDate"
            description="Informe a data de validade do medicamento"
            label="Validade"
            label-for="dueDate"
            class="my-3"
          >
            <b-form-datepicker
              id=""
              v-model="medicine.dueDate"
              :date-format-options="{
                year: 'numeric',
                month: 'short',
                day: '2-digit',
                weekday: 'short',
              }"
              locale="pt"
              placeholder="Validade"
            ></b-form-datepicker>
          </b-form-group>
          <b-form-group
            id="input-group-stock"
            label="Quantidade em estoque"
            description="Informe a quantidade em estoque do medicamento"
            label-for="stock"
            class="text-left my-3"
          >
            <b-form-input
              autocomplete="off"
              id="stock"
              v-model="medicine.stock"
              type="number"
              placeholder=""
              required
              step="any"
            ></b-form-input>
          </b-form-group>

          <b-button
            type="submit"
            variant="outline-success"
          >Salvar</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Loader from "../components/Loader"

export default {
  components: { Loader },
  data () {
    return {
      id: null,
      medicine: {
        name: "",
        price: undefined,
        purchaseDate: "",
        dueDate: "",
        stock: undefined,
        loading: false
      },
    };
  },

  created () {
    this.id = this.$route.params.id;

    
  },

  mounted() {
    if (this.id) {
      this.loading = true;
      this.getMedicineById();
      this.loading = false;
    };
  },

  methods: {
    editOrCreateMedicine () {
      if (this.id) {
        this.medicineEdit();
      } else {
        this.medicineRegister();
      }
    },

    async medicineRegister () {
      const { name, price, purchaseDate, dueDate, stock } = this.medicine;

      try {
        await this.$axios.post(
          "/medicines",
          {
            name,
            price,
            purchaseDate,
            dueDate,
            stock,
          },
        );

        this.$swal({
          icon: "success",
          title: "Medicamento cadastrado com sucesso!",
        });
      } catch (error) {
        console.log(error);
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Informe dados válidos",
        });
      }
    },

    async getMedicineById () {
      
      const res = await this.$axios.get(`/medicines/${this.id}/perid`);
      this.medicine = res.data[0];
      
      this.loading = false;
    },

    async medicineEdit () {

    },

    
  },
};
</script>

<style scoped>
.input-group-text {
  background-color: #fff !important;
  border-right: none !important;
}
</style>
