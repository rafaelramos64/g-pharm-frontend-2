<template>
  <b-container fluid>
  <Loader v-if="loading"> </Loader>
    <b-row v-else class="justify-content-md-center mt-3">
      <b-col
        class="shadow-lg border border-light"
        md="6"
        style="border-radius: 10px;">
        <h1 v-if="!this.id" class="mb-1 mt-3 text-center">Cadastro de Medicamentos</h1>
        <h1 v-else class="mb-1 mt-3 text-center">Editar Medicamento</h1>
        <b-form
          @submit.prevent="editOrCreateMedicine()"
          class="p-4"
        >
          <b-form-group
            id="input-group-name"
            label="Nome"
            description="Informe o nome do medicamento."
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

          <b-row>
            <b-col cols="6">
              <b-form-group
                id="input-group-price"
                label="Preço"
                description="Informe o preço do medicamento."
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
            </b-col>

            <b-col cols="6">
              <b-form-group
                id="input-group-stock"
                label="Quantidade em estoque"
                description="Informe a quantidade do medicamento em estoque."
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
            </b-col>
          </b-row>

          <b-row>
            <b-col cols="">
              <b-form-group
                id="input-group-puschaseDate"
                label="Data de compra"
                description="Informe o data de compra do medicamento."
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
            </b-col>

            <b-col cols="6">
              <b-form-group
                id="input-group-dueDate"
                description="Informe a data de validade do medicamento."
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
            </b-col>
          </b-row>

          <b-row  align-h="end">
            <b-col cols="4">
              <b-button
                v-if="!this.id"
                class="btn-lg"
                type="submit"
                variant="outline-success"
                >Cadastrar
              </b-button>

              <b-button
                v-else
                class="btn-lg"
                type="submit"
                variant="outline-success"
                >Salvar
              </b-button>
            </b-col>
          </b-row>

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
        stock: undefined
      },
      loading: false
    };
  },

  created () {
    this.id = this.$route.params.id;
    if (this.id) {
      
      this.getMedicineById();
    };
    
  },

  methods: {
    editOrCreateMedicine () {
      if (this.id) {
        this.EditMedicineById();
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
      this.loading = true;

      const res = await this.$axios.get(`/medicines/${this.id}/perid`);
      this.medicine = res.data[0];
      
      this.loading = false;
    },

    async EditMedicineById () {
      try {
        const { name, price, purchaseDate, dueDate, stock } = this.medicine;

        await this.$axios.put(
          `/medicines, ${
            name,
            price,
            purchaseDate,
            dueDate,
            stock
          }, ${this.id}`);
        /* await this.$axios.put(`/medicines${
            name,
            price,
            purchaseDate,
            dueDate,
            stock,
          }/${this.id}`); */

        /* this.$router.push({ name: "ListMedicines" }) */;

        this.$swal({
          icon: "success",
          title: "Medicamento alterado com sucesso!",
        });
      } catch (error) {
        console.error(error);
      };
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
