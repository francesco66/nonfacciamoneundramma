<template>
  <article class="pa3 pa3-ns pl5-ns">
    <nav class="flex justify-between bb bg-purple w-90 h1 ph3 pv3 pv4-ns ph4-m ph5-l">
      <div class="flex-grow br3 bw1 pa2 pl1 flex items-center">
      	<PrevNextMDMA :prev="prev" />
      	<PrevNextMDMA :next="next" />
      </div>
      <div class="flex-grow pa2 flex items-center">
        <NuxtLink class="link grow br3 ba bw1 pa2 mb3 bg-animate hover-bg-near-black bg-light-purple white" to="/HomeMDMA">MDMA Home</NuxtLink>
      </div>
      <div class="flex-grow pa2 flex items-center">
        <a class="link grow br3 ba bw1 pa2 mb3 ml3 bg-animate hover-bg-light-purple bg-black-50 white" v-on:click="onDownload(article)">Scarica</a>
        <NuxtLink class="link grow br3 ba bw1 pa2 mb3 ml3 bg-animate hover-bg-light-purple bg-black-50 white" :to="{ name: 'MailCorrezioni', params: { dir: article.dir, slug: article.slug } }">Commenta</NuxtLink>
      </div>
    </nav>

    <h2 class="f3 f1-l f-headline-l mt4 ma2 mb3">{{ article.titolo }}</h2>
    <h2 class="measure lh-copy dib ma2 mb5">{{ article.autore }}</h2>
    <span class="measure lh-copy ma5" v-if="article.data">{{ article.data }}</span>

    <embed v-if="article.video"
      type="video/webm"
      :src="article.video"
      width="250"
      height="200">

    <p class="measure lh-copy mb4">
      <nuxt-content :document="article" />
    </p>

    <nav class="flex justify-between bb b--white-10">
      <div class="flex-grow pa3 pl1 flex items-center">
      	<PrevNextMDMA :prev="prev" />
      </div>
      <div class="flex-grow pa3 pr1 flex items-center">
      	<PrevNextMDMA :next="next" />
      </div>
    </nav>
  </article>
</template>

<script>
import { saveAs } from 'file-saver';

export default {
  async asyncData({ $content, params }) {
    const article = await $content('articlesMDMA', params.slug, { 'text': true }).fetch()

    const [prev, next] = await $content('articlesMDMA')
        /*.only(['title', 'slug', 'autore', 'data'])*/
        /* .sortBy('createdAt', 'asc') */
        .sortBy('titolo', 'asc')
        .surround(params.slug)
        .fetch()

    return {
      article,
      prev,
      next,
    }
  },

  methods: {
    // per scaricare il file in formato testo
    async onDownload(article) {
      var blob = new Blob(["\n" + article.autore + "\n\n" + article.titolo + "\n\n" + article.text], {type: "text/plain;charset=utf-8"});
      saveAs(blob, article.slug + ".txt");
    },
  }
}
</script>

<style>
</style>
