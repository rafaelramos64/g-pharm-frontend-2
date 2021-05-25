<template>
  <b-container>
    <b-row class="vendor shadow h-100 justify-content-center align-items-center" >
      <b-col>
        <b-row class="text-center mb-4"><b-col><h1 style="font-weight: 800">Cadastro de Vendedores</h1></b-col></b-row>
        <b-row>
          <b-col class="pl-5 pr-5" style="top: 0rem;">
            <b-form @submit.prevent.stop="vendorRegistration()">
              <b-row>
                <b-col>
                  <b-form-group
                    class="group"
                    label="Nome"
                    label-for="email"
                    label-class="required"
                    description="Informe o nome do vendedor."
                  >
                    <span class="icons-forms"><i class="far fa-user fa-lg"></i></span>
                    <b-form-input
                      v-model="vendor.name"
                      autocomplete="off"
                      id="anem"
                      type="text"
                      placeholder="Nome do vendedor"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              
              <b-row 
                class="mt-3">
                <b-col cols="6">
                  <b-form-group
                    class="group"
                    label="Email"
                    label-for="email"
                    label-class="required"
                    description="informe o email do vendedor."
                  >
                    <span class="icons-forms"><i class="far fa-envelope fa-lg"></i></span>
                    <b-form-input
                      v-model="vendor.email"
                      autocomplete="off"
                      id="email"
                      type="email"
                      placeholder="exemplo@email.com"
                    ></b-form-input>
                  </b-form-group>
                </b-col>

                <b-col cols="6">
                  <b-form-group
                    label="Senha"
                    label-for="password"
                    label-class="required"
                    description="Informe a senha do vendedor."
                  >
                    <span class="icons-forms"><i class="fas fa-lock  fa-lg"></i></span>
                    <b-form-input
                      v-model="vendor.password"
                      autocomplete="off"
                      id="password"
                      type="password"
                      aria-describedby="password-help-block"
                      placeholder="Senha"
                    ></b-form-input>
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
      vendor: {
        name: "",
        email: "",
        password: ""
      }
    }
  },

  methods: {
    async vendorRegistration () {
      const { name, email, password } = this.vendor;
      
      try {
        await this.$axios.post(
          "/vendors",
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
</style>