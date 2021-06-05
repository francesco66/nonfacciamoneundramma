<template>
  <article class="pa3 pa3-ns pl5-ns">
    <nav class="flex justify-between bb bg-purple w-90 h1 ph3 pv3 pv4-ns ph4-m ph5-l">
      <div class="flex-grow br3 bw1 pa2 pl1 flex items-center">
      	<PrevNextNDI :prev="prev" />
      	<PrevNextNDI :next="next" />
      </div>
      <div class="flex-grow pa2 flex items-center">
        <NuxtLink class="link grow br3 ba bw1 pa2 mb3 bg-animate hover-bg-near-black bg-light-purple white" to="/HomeNDI">Nel Dominio dell'Incerto Home</NuxtLink>
      </div>
      <div class="flex-grow pa2 flex items-center">
        <a class="link grow br3 ba bw1 pa2 mb3 ml3 bg-animate hover-bg-light-purple bg-black-50 white" v-on:click="onClick(article)">Scarica</a>
        <a class="link grow br3 ba bw1 pa2 mb3 ml3 bg-animate hover-bg-light-purple bg-black-50 white" v-on:click="onClick(article)">Commenta</a>
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
    <!-- <NuxtLink class="link black hover-black-50 no-underline flex items-center pa3" :to="{ name: 'MailCorrezioni', params: { testo: testo } }">Segnala errori</NuxtLink> -->

    <nav class="flex justify-between bb b--white-10">
      <div class="flex-grow pa3 pl1 flex items-center">
      	<PrevNextNDI :prev="prev" />
      </div>
      <div class="flex-grow pa3 pr1 flex items-center">
      	<PrevNextNDI :next="next" />
      </div>
    </nav>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articlesNDI', params.slug, { 'text': true }).fetch()
    let show_parole = false

    const [prev, next] = await $content('articlesNDI')
      /*.only(['title', 'slug', 'autore', 'data'])*/
      /* .sortBy('createdAt', 'asc') */
      .sortBy('article.data', 'asc')
      .surround(params.slug)
      .fetch()

    // console.log(article.video)

    return {
      article,
      prev,
      next,
      show_parole
    }
  }
}
</script>

<style>
</style>
