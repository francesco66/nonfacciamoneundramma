<template>
  <div>
    <form class="pa4 black-80">
    <div>
      <label for="comment" class="f8 b db mb2">Testo da correggere</label>
      <textarea id="comment" name="comment" class="db border-box hover-black w-100 measure min-vh-100 ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc" 
        :value="testo" >

      </textarea>
      <a class="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib black" href="#0" v-on:click="sendMail">Invia</a>
    </div>
    </form>
  </div>

  <!-- <a href="/samanthaming.png" download>Download with original filename -> samanthaming.png</a> -->

</template>

<script>
export default {

  async asyncData({ $content, params }) {
    const article = await $content('articlesMDMA', params.slug).fetch()
    const testo = params.testo

    return {
      testo,
      article,
    }
  },

/*
  methods: {
    sendMail: 
      this.$mail.send({
        from: 'John Doe',
        subject: 'Correzioni',
        text: this.testo,
        to: 'francescoarmandoporta@gmail.com',
      })
    }
*/
/*
  methods: {
    sendMail: function (event) {
      console.log(testo)

        this.$mail.send({
        from: 'John Doe',
        subject: 'Correzioni',
        text: testo,
        to: 'francescoarmandoporta@gmail.com',
      })
    }
  }
      */

}
</script>

<style>
/*
.measure {
    max-width: 50em;
}
*/
</style>