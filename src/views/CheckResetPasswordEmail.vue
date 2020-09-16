<template lang="pug">
v-container(fluid fill-height)
  v-row(:justify="'center'" :align="'center'")
    v-col(xs12 sm8 md4 lg3).text-center
      v-icon.mb-4(size="15rem") mark_email_read
      h1.display-1 Success
      p We have sent you an email with instructions on how to reset your password.
      v-divider.my-4
      div: router-link(to="/login") Login
      div: router-link(to="/") Back to frontpage
</template>
