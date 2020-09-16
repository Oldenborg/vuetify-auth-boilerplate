<template lang="pug">
v-container(fluid fill-height)
  v-row(:justify="'center'" :align="'center'")
    v-col(xs12 sm8 md4 lg3).text-center
      div(v-if="confirmed")
        v-icon.mb-4(size="15rem") check_circle_outline
        h1.display Email verification
        p Your email has been confirmed, you can now login.
      div(v-if="!confirmed")
        v-icon.mb-4(size="15rem") error_outline
        h1.display Email verification
        p The email confirmation link has expired. Please try again.
      v-divider.my-4
      div: router-link(to="/login") Go to login
</template>

<script lang="ts">
export default {
  data: () => {
    return {
      confirmed: false,
      key: "",
      secret: ""
    };
  },
  async created() {
    try {
      this.key = this.$route.query.key;
      this.secret = this.$route.query.secret;
      const confirm = true; //TODO: Send email confirmation request
      if (!confirm) {
        return;
      }
      this.confirmed = true;
    } catch (error) {
      this.confirmed = false;
    }
  }
};
</script>
