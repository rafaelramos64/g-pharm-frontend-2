<template>
  <b-container class="pt-4">
    <b-row class="login shadow h-100 justify-content-center align-items-center" >
      <b-col md="12" class="p-0">
        <b-row class="text-center"><b-col><h1 style="font-weight: 800">Login</h1></b-col></b-row>
      </b-col>
      <b-col class="pl-5 pr-5" style="top: 0rem;">
        <b-form @submit.prevent.stop="onSubmit">
          <b-form-group
            class="group"
            label="Email"
            label-for="email"
            label-class="required"
          >
            <span class="icons-forms"><i class="far fa-envelope fa-lg"></i></span>
            <b-form-input
              v-model="form.email"
              autocomplete="off"
              id="email"
              type="email"
              placeholder="exemplo@email.com"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            class="mt-3"
            label="Senha"
            label-for="password"
            label-class="required"
          >
            <span class="icons-forms"><i class="fas fa-lock-open fa-lg"></i></span>
            <b-form-input
              v-model="form.password"
              autocomplete="off"
              id="password"
              type="password"
              aria-describedby="password-help-block"
              placeholder="Senha"
            ></b-form-input>
          </b-form-group>
          <b-row class="my-5 text-center">
            <b-col>
              <b-button
                type="submit"
                class="login-button"
                variant="outline-success">
                ENTRAR
              </b-button>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="text-center">
                <p>
                  Ainda não tem conta? <b-link :to="{ name: 'Signup' }">Cadastre-se</b-link>.
                </p>
              </div>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Login",
  data () {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit () {

      const { email, password } = this.form;
      try {
        const dataAuthPharmacie = await this.$axios.post("/pharmacies/auth", {
          email,
          password,
        });

        this.$swal({
          icon: "success",
          title: "Login efetuado com sucesso",
          confirmButtonColor: '#38C172',
          timer: 1500
        });

        this.$storage.setItem(
          "application-token",
          dataAuthPharmacie.data.token
        );

        this.$router.push({ name: "Default" });

      } catch (error) {
        console.log(error);
        this.$swal({
          icon: "error",
          title: "Oops...",
          confirmButtonColor: '#38C172',
          text: "Informe dados válidos",
        });
      }
    },
  },
};
</script>

<style scoped >

.login {
  margin: 0 auto !important;
  border-radius: 10px;
  background-color: #fff;
  width: 42%;
  padding-top: 0%;
  padding-bottom: 0.5%;
  min-height: 80vh;
  position: relative;
  bottom: -2.5rem !important;
  border: 1px solid #f8f8f8;
  /* box-shadow: 0px 5px 10px 0px rgba(153, 153, 153, 0.3); */
  /* box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 6px 0px; */
}

a {
  text-decoration:none !important;
}
</style>
