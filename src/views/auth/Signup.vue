<template>
  <b-container>
    <b-row>
      <b-form @submit="onSubmit" class="centralize">
        <h1 class="mb-3">Inscrever-se</h1>
        <b-form-group
          id="input-group-email"
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
          id="input-group-name"
          label="Nome"
          description="Informe um nome"
          label-for="name"
          class="text-left"
        >
          <b-form-input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Informe um nome"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-description"
          label="Descrição"
          description="Informe uma descrição"
          label-for="description"
          class="text-left"
        >
          <b-form-input
            id="description"
            v-model="form.description"
            type="text"
            placeholder="Informe uma descrição"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-password"
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
        <p>Já é inscrito? <b-link to="/">Login</b-link></p>
      </div>
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
          title: "Sucesso ao inscrever-se",
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
.centralize {
  margin-top: 100px;
}
</style>
