<template>
  <b-container>
    <b-row>
      <b-form @submit="onSubmit" class="centralize">
        <h1 class="mb-3">Login</h1>
        <b-form-group
          id="input-group-1"
          label="Email"
          label-for="input-1"
          class="text-left"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
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
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="success">Submit</b-button>
      </b-form>
    </b-row>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
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
    onSubmit(event) {
      event.preventDefault();
      const { email, password } = this.form;
      alert(email, password);
    },
  },
};
</script>

<style scoped>
.centralize {
  margin-top: 100px;
}
</style>
