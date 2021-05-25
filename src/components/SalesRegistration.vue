<template>
  <b-container>
    <b-row class="vendor shadow h-100 justify-content-center align-items-center" >
      <b-col>
        <b-row class="text-center mb-4"><b-col><h1 style="font-weight: 800">Cadastro de Vendas</h1></b-col></b-row>
        <b-row>
          <b-col class="pl-5 pr-5" style="top: 0rem;">
            <b-form @submit.prevent.stop="saleRegistration()">
              <b-row>
                <b-col>
                  <b-form-group
                    class="group"
                    label="Valor"
                    label-for="sale-price"
                    label-class="required"
                    description="Informe o valor da venda."
                  >
                    <b-input-group prepend="R$">
                      <b-form-input
                        v-model="sale.salePrice"
                        autocomplete="off"
                        id="sale-price"
                        type="text"
                        placeholder="Valor da venda"
                      ></b-form-input>
                    </b-input-group>
                  </b-form-group>
                </b-col>
              </b-row>
              
              <b-row 
                class="mt-3">
                <b-col cols="6">
                  <b-form-group
                    class="group"
                    label="Data"
                    label-for="sale-date"
                    label-class="required"
                    description="informe a data da venda."
                  >
                    <span class="icons-forms"><i class="far fa-envelope fa-lg"></i></span>
                    <b-form-datepicker
                      id="sale-date"
                      v-model="sale.saleDate"
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
              <b-row >
                <b-col cols="6" class="mt-5 mx-auto text-center">
                  <b-button
                    type="submit"
                    class="login-button"
                    variant="outline-success">
                    CADASTRAR VENDEDOR
                  </b-button>
                </b-col>
              </b-row>
            </b-form>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "SalesRegistration",
  data () {
    return {
      sale: {
        salePrice: undefined,
        saleDate: "",
        medicines: []
      }
    }
  },

  methods: {
    async saleRegistration () {
      const { name, email, password } = this.vendor;
      
      try {
        await this.$axios.post(
          "/sales",
          {
            name,
            email,
            password
          });
          
        this.$swal({
          icon: "success",
          title: "Vendedos cadastrado com sucesso!",
          timer: 1500
        });
      } catch (error) {
        console.error(error);
        this.$swal({
          icon: "error",
          title: "Oops!",
          text: "Informe dados válidos.",
          timer: 1500
        });
      }
    }
  }
}
</script>

<style scoped>

.vendor {
  margin: 0 auto !important;
  border-radius: 10px;
  background-color: #fff;
  width: 70%;
  padding-top: 0%;
  min-height: 80vh;
  position: relative;
  bottom: -1rem !important;
  border: 1px solid #f8f8f8;
  /* box-shadow: 0px 5px 10px 0px rgba(153, 153, 153, 0.3); */
  /* box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 6px 0px; */
}

a {
  text-decoration:none !important;
}

.input-group-text {
  background-color: #fff !important;
  border-right: none !important;
  border-top: none !important;
  border-left: none !important;
  border-color: rgb(118, 118, 118) !important;
  border-bottom-right-radius: 0px !important;
  color: rgb(118, 118, 118) !important;
}

.form-control {
  padding-left: 0 !important;
}

label {
  padding-left: -10px !important;
  margin: 0 !important;
  bottom: -15px;
}
</style>
