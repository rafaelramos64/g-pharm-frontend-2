<template>
  <b-container class="pt-3">
    <b-row class="register shadow h-100 justify-content-center align-items-center">
      <b-col md="12" class="p-0">
        <b-row class="text-center"><b-col><h1 style="font-weight: 800">Cadastro de Farmácias</h1></b-col></b-row>
      </b-col>
      <b-col md="12" class="">
        <b-form @submit="onSubmit">
          <b-row>
            <b-col cols="6">
              <b-form-group
                id="input-group-name"
                label="Nome"
                description="Informe um nome"
                label-for="name"
                class="text-left"
              >
                <span class="icons-forms"><i class="far fa-user fa-lg"></i></span>
                <b-form-input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="Informe um nome"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            
            <b-col cols="6">
              <b-form-group
                id="input-group-description"
                label="Descrição"
                description="Informe uma descrição"
                label-for="description"
                class="text-left"
              >
                <span class="icons-forms"><i class="fas fa-file-signature fa-lg"></i></span>
                <b-form-input
                  id="description"
                  v-model="form.description"
                  type="text"
                  placeholder="Informe uma descrição"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row 
            class="my-3">
            <b-col cols="6">
              <b-form-group
                id="input-group-email"
                label="E-mail"
                description="Informe seu melhor e-mail"
                label-for="email"
                class="text-left"
              >
                <span class="icons-forms"><i class="far fa-envelope fa-lg"></i></span>
                <b-form-input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="Informe um e-mail"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col cols="6">
              <b-form-group
                id="input-group-password"
                description="Informe sua senha"
                label="Senha"
                label-for="password"
              >
                <span class="icons-forms"><i class="fas fa-lock fa-lg"></i></span>
                <b-form-input
                  type="password"
                  id="password"
                  aria-describedby="password-help-block"
                  v-model="form.password"
                  placeholder="Informe uma senha"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row align-h="end">
            <b-col cols="5" class="mx-auto my-3">
              <b-button
                variant="outline-success" type="submit"
                class="btn-lg login-button">CADASTRAR FARMÁCIA
              </b-button>
            </b-col>
          </b-row>
        </b-form>
        <div class="mt-3">
          <p>Já tem sua farmácia cadastrada? Faça <b-link :to="{ name: 'Login' }">Login</b-link>.</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      form: {
        email: "",
        password: "",
        name: "",
        description: "",
      },
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();

      const { email, password, description, name } = this.form;
      try {
        const dataCreatePharmacie = await this.$axios.post("/pharmacies", {
          email,
          password,
          name,
          description,
        });

        this.$swal({
          icon: "success",
          title: "Farmácia cadastrada com sucesso!",
          timer: 1500
        });

        this.$storage.setItem(
          "application-token",
          dataCreatePharmacie.data.token
        );

        this.$router.push("/");
      } catch (error) {
        console.log(error);
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Informe dados válidos",
        });
      }
    },
  },
};
</script>
<style scoped>
.register {
  margin: 0 auto !important;
  border-radius: 10px;
  background-color: #fff;
  width: 90%;
  padding-top: 0%;
  padding-bottom: 0.5%;
  min-height: 80vh;
  position: relative;
  bottom: -3.5rem !important;
  border: 1px solid #f8f8f8;
  /* box-shadow: 0px 5px 10px 0px rgba(153, 153, 153, 0.3); */
  /* box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 6px 0px; */
}

a {
  text-decoration:none !important;
}
</style>
