<template>
  <div class="mailtoui link grow br3 ba bw1 pa2 mb3 ml3 bg-animate hover-bg-light-purple bg-black-50 white">
    <a :href="mailtoHref" class="dropbtn">
      <svg class="bg-white-80" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
    </a>
  </div> 
</template>

<script>
export default {

  props: {
    email: String
  },

  // data() {
  //   const subject = "&subject=" + this.article.path
  //   const email = "mailto:francescoarmandoporta@gmail.com?body=" + encodeURI(this.article.text) + encodeURI(subject);
  //   return {
  //     email
  //   }
  // },

  computed: {
    mailtoHref: function() {
      return this.email;
    }
  },
}

</script>

<style scoped>
</style>