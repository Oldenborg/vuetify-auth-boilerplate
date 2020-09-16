<template lang="pug">
  v-container(fluid fill-height)
    v-row(:justify="'center'" :align="'center'")
      v-col(xs12 sm8 md4 lg3)
        h1.display Login
        v-form.mb-5(ref="form" lazy-validation)
          v-text-field(v-model="username" label="E-mail" name="username" :rules="[rules.required]")
          v-text-field(label="Password" name="password" v-model="password" :append-icon="show ? 'visibility' : 'visibility_off'" :type="show ? 'text' : 'password'" @click:append="show = !show" :rules="[rules.required]")
          v-btn(name="submit_login" color="primary" @click="login" block) Login
        div: router-link(to="/password/reset") Forgot your password?
        div: router-link(to="/register") Don't have an account?
</template>

<script>
export default {
  name: "Home",
  data: () => {
    return {
      show: false,
      username: "",
      password: "",
      rules: {
        required: v => !!v || "This field is is required"
      }
    };
  },
  methods: {
    async login() {
      this.$refs.form.validate();
      // TODO: Send login request and redirect if successfull
    }
  }
};
</script>
