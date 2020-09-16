<template lang="pug">
  v-container(fluid fill-height)
    v-row(:justify="'center'" :align="'center'")
      v-col(xs12 sm8 md4 lg3)
        h1 Forgot your password?
        v-form(lazy-validation ref="form")
          v-text-field(v-model="email" name="email" label="E-mail" :rules="[rules.required]")
          v-btn(name="submit_reset_password" color="primary" @click="resetPassword" block) Reset password 
        v-divider.my-4
        div: router-link(to="/login") Already have an account?
        div: router-link(to="/") Back to frontpage
</template>

<script lang="ts">
export default {
  data: () => {
    return {
      email: "",
      redirect_url: `${process.env.VUE_APP_BASE_URL}/password/new/`,
      rules: {
        required: v => !!v || "This field is is required"
      }
    };
  },
  methods: {
    async resetPassword() {
      if (!this.$refs.form.validate()) {
        return;
      }
      try {
        // TODO: Send password reset request
        this.$router.push("/check-reset-password-email");
      } catch (error) {
        // TODO: Handle error
      }
    }
  }
};
</script>
