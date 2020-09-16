<template lang="pug">
v-container(fluid fill-height)
  v-row(:justify="'center'" :align="'center'")
    v-col(xs12 sm8 md4 lg3).text-center
      v-icon.mb-4(size="15rem") check_circle_outline
      h1 Success
      p To complete the registration we need you to activate your account by confirming your email address. We have sent you an e-email with an activation link.
      v-divider.my-4
      div: router-link(to="/login") Login
      div: router-link(to="/") Back to frontpage
</template>
