<template lang="pug">
  v-container(fluid fill-height)
    v-row(:justify="'center'" :align="'center'")
      v-col(xs12 sm8 md4 lg3)
        h1 Register
        v-form(:lazy-validation="lazy" ref="form")
          v-text-field(v-model="name" label="Name" :rules="[rules.required]")
          v-text-field(v-model="email" name="email" label="E-mail" :rules="[rules.required, rules.validEmail]")

          v-text-field(label="Password" name="password" v-model="password" :append-icon="show ? 'visibility' : 'visibility_off'" :type="show ? 'text' : 'password'" @click:append="show = !show" :rules="[rules.required]")
          v-text-field(
            v-model="password_confirmation"
            name="password_confirmation"
            label="Repeat password"
            :type="show ? 'text' : 'password'" :rules="[rules.required, (password === password_confirmation) || 'Password must match']")
          v-checkbox(v-model="terms" name="terms" :rules="[rules.terms]")
            template(slot="label")
              |I agree to the 
              router-link(to="/terms") Terms of use
          v-btn(name="submit_register" color="primary" @click="register" block) Create account
        v-divider.my-4
        div: router-link(to="/login") Already have an account?
        div: router-link(to="/") Back to frontpage
</template>

<script>
export default {
  name: "Register",
  data: () => {
    return {
      show: false,
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      terms: false,
      redirect_url: `${process.env.VUE_APP_BASE_URL}/register/confirm/`,
      rules: {
        required: v => !!v || "This field is is required",
        terms: v => !!v || "You must agree to our terms of use",
        validEmail: v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      }
    };
  },
  methods: {
    async register() {
      if (!this.$refs.form.validate()) {
        return;
      }

      try {
        // TODO: Send this.data to the API
        this.$router.push("/check-registration-email");
      } catch (error) {
        // TODO: Handle error
      }
    }
  }
};
</script>
