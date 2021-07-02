<template>
  <div>
    <form class="pa4 black-80">
    <div>
      <label for="comment" class="f8 b db mb2">Testo da correggere</label>
      <textarea id="comment" class="db border-box hover-black w-100 min-vh-100 ba b--black-20 pa2 br2 mb2"
        spellcheck="false"
        :value="testo" >

      </textarea>
      <a class="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib black" v-on:click="sendMail">Invia</a>
    </div>
    </form>
  </div>
</template>

<script>
export default {

  async asyncData({ $content, params }) {
    const article = await $content('articlesMDMA', params.slug, { 'text': true }).fetch()
    const testo = article.text

    return {
      testo,
      article,
    }
  },

  methods: {
    sendMail: function (event) {
      //console.log(this.testo)
      console.log("sending email to fra ...")
        this.$mail.send({
        from: 'John Doe',
        subject: 'Correzioni',
        text: this.testo,
        //to: 'francescoarmandoporta@gmail.com',
      })
    }
  }
}
</script>

<style>
</style>