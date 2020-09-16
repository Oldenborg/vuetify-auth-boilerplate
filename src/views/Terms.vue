<template lang="pug">
v-container(fluid)
  v-row(:justify="'center'" :align="'center'")
    v-col(xs12 sm8 md4 lg3)
      h1 Terms
      v-divider.my-4
      div: router-link(to="/register") Back to registration
      v-divider.my-4
      p These are our no bullshit terms. No lawyers here, just people who want to deliver the best app posible to you.
      h3.mb-4 What we need you to agree to
      ul.mb-4
        li We can store your email
        li We are allowed to send emails regarding your account
        li Other DungeonPay users with whom you are freinds can see your game stats and personal info
        li Even tho you delete your account we can keep the in app data that you have generated in an anonymized form.
        li You promise not to fuck with the site, and if you find any exploits you let us know ;)

      h3.mb-4 What we promise you
      ul
        li We wont share your data with anyone
        li We wont send you anoying spam email
        li We promise to do everything we can to keep your personal data safe

    
</template>
