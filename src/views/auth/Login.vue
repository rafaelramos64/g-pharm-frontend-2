<template>
  <b-container>
    <b-row>
      <b-form @submit="onSubmit" class="centralize">
        <h1 class="mb-3">Login</h1>
        <b-form-group
          id="input-group-1"
          label="E-mail"
          description="Informe seu melhor e-mail"
          label-for="email"
          class="text-left"
        >
          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Informe um e-mail"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          description="Informe sua senha"
          label="Senha"
          label-for="password"
          class="my-3"
        >
          <b-form-input
            type="password"
            id="password"
            aria-describedby="password-help-block"
            v-model="form.password"
            placeholder="Informe uma senha"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="success">Submit</b-button>
      </b-form>
      <div class="mt-3">
        <p>
          Ainda não é um inscrito? <b-link to="/signup">Inscrever-se</b-link>
        </p>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();

      const { email, password } = this.form;
      try {
        const dataAuthPharmacie = await this.$axios.post("/pharmacies/auth", {
          email,
          password,
        });

        this.$swal({
          icon: "success",
          title: "Login efetuado com sucesso",
        });

        this.$storage.setItem(
          "application-token",
          dataAuthPharmacie.data.token
        );
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
.centralize {
  margin-top: 100px;
}
</style>
