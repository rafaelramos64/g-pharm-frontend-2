<template>
  <b-row>
    <b-form @submit.prevent="medicineRegister()" class="centralize">
      <h1 class="mb-3">Inscrever-se</h1>
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
        description="Informe o preço do produto"
        label-for="price"
        class="text-left my-3"
      >
        <b-form-input
          autocomplete="off"
          id="price"
          v-model="medicine.price"
          type="number"
          placeholder="Preço do medicamento"
          required
          step="any" 
        ></b-form-input>
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
          :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }"
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
          :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }"
          locale="pt"
          placeholder="Validade"
        ></b-form-datepicker>
      </b-form-group>

      <b-button type="submit" variant="outline-success">Salvar</b-button>
    </b-form>
  </b-row>
</template>

<script>

export default {
  data () {
    return {
      medicine: {
        name: '',
        price: undefined,
        purchaseDate: '',
        dueDate: '',
        stock: undefined
      }
    }
  },

  methods: {
    medicineRegister () {
      const { name, price, purchaseDate, dueDate, stock } = this.medicine;

      try {
        this.$axios.push("/medicines/:pharmacyId", {
          name,
          price,
          purchaseDate,
          dueDate,
          stock
        });
        
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
      };
    }
  }
}
</script>

<style scoped>

</style>