<template>
  <div>
    <div class="pa4 black-80">
      <label for="comment" class="f8 b db mb2">Testo da correggere</label>
      <textarea id="comment" class="db border-box w-100 vh-50 pa2 br2 mb2"
          spellcheck="false"
          type="text/plain;charset=utf-8"
          :value="article.text"
       >
       </textarea>
    </div>
    <div>
      <a class="mailtoui f6 link grow br3 ba bw1 ph3 pv2 mb2 dib black" :href="mailtoHref">Invia</a>
    </div>
  </div>
</template>

<script>
export default {

  async asyncData({ $content, params }) {

    const article = await $content(params.dir, params.slug, { 'text': true }).fetch()
    // const testo = params.testo
    
    // subject: dir + slug
    const subject = "&subject=" + article.path
    const email = "mailto:francescoarmandoporta@gmail.com?body=" + encodeURI(article.text) + encodeURI(subject);

    return {
      // testo,
      article,
      email
    }
  },

  computed: {
    mailtoHref: function() {
      return this.email;
    }
  },
  
  methods: {

    sendMail(article) {
      // const subject = "&subject=" + article.path
      // const mail = "mailto:francescoarmandoporta@gmail.com?body=" + encodeURI(testo) + encodeURI(subject);
      // mailtouiApp.run();
    }
  },

  mounted() {
    mailtouiApp.run();
  },

}
</script>

<style>
</style>