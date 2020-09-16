<template lang="pug">
v-container(fluid fill-height)
  v-row(:justify="'center'" :align="'center'")
    v-col(xs12 sm8 md4 lg3).text-cente
      h1 Enter a new password
      p Enter a new password and click the save button. On success you will be redirected to the loginform
      v-form(lazy-validation ref="form")
        v-text-field(label="Password" name="password" v-model="password" :append-icon="show ? 'visibility' : 'visibility_off'" :type="show ? 'text' : 'password'" @click:append="show = !show" :rules="[rules.required]")
        v-text-field(v-model="password_confirmation" name="password_confirmation" label="Repeat password" :type="show ? 'text' : 'password'" :rules="[rules.required, (password === password_confirmation) || 'Password must match']")
        v-btn(name="submit_new_password" color="primary" @click="newPassword" block) Save new password
</template>

<script>
export default {
  data: () => {
    return {
      show: false,
      email: "",
      token: "",
      password: "",
      password_confirmation: "",
      rules: {
        required: v => !!v || "This field is is required"
      }
    };
  },
  methods: {
    async newPassword() {
      if (!this.$refs.form.validate()) {
        return;
      }

      this.email = this.$route.query.email;
      this.token = this.$route.query.token;

      // TODO: Send password reset request
      this.$router.push("/login");
    }
  }
};
</script>
