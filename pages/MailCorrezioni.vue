<template>
  <div>
    <form class="pa4 black-80">
      <div>
        <label for="comment" class="f8 b db mb2">Testo da correggere</label>
        <textarea id="comment" class="db border-box hover-black w-100 min-vh-100 ba b--black-20 pa2 br2 mb2"
          spellcheck="false"
          :value="testo" >
        </textarea>
        <a class="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib black" :href="mail">Invia</a>
      </div>
    </form>
  </div>
</template>

<script>
//const MailtoUI = require('./node_modules/mailtoui/dist/mailtoui-min.js');

export default {

  async asyncData({ $content, params }) {

    const article = await $content(params.dir, params.slug, { 'text': true }).fetch()
    const testo = article.text

    const mail = "mailto:francescoarmandoporta@gmail.com?body=" + encodeURI(testo);

    return {
      testo,
      article,
      mail
    }
  },

  mounted() {
    mailtouiApp.run();
  },

}
</script>

<style>
</style>