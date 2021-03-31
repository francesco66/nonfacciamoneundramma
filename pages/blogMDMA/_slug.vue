<template>
  <article class="pa3 pa5-ns">
    <nav class="flex justify-between bb b--white-10">
      <NuxtLink class="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib black" to="/HomeMDMA">Mai Dire Mi Arrendo</NuxtLink>
      <div class="flex-grow pa3 flex items-center">
        <AppSearchInput class="f6 link dib white dim mr3 mr4-ns"/>
      </div>
    </nav>

    <h3 class="measure lh-copy">{{ article.data }} - {{article.autore }}</h3>
    <p v-if="article.tema" class="measure lh-copy">Tema: {{ article.tema }}</p>
    <a class="f6 link dim br3 ba ph3 pv2 mb2 dib near-black" v-on:click="show_parole= !show_parole">Vedi parole</a>
    <p v-if="show_parole" class="measure lh-copy di">  {{article.parole }}</p>
    <h1 class="f3 f1-m f-headline-l">{{ article.titolo }}</h1>
    <p class="measure lh-copy">
      <nuxt-content :document="article" />
    </p>
    <!-- <NuxtLink class="link black hover-black-50 no-underline flex items-center pa3" :to="{ name: 'MailCorrezioni', params: { slug: article.slug, testo: testo } }">Segnala errori</NuxtLink> -->

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
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articlesMDMA', params.slug).fetch()
    let show_parole = false
    const testo = article.body.children[0].children[0].value

    const [prev, next] = await $content('articlesMDMA')
        /*.only(['title', 'slug', 'autore', 'data'])*/
        /* .sortBy('createdAt', 'asc') */
        .sortBy('article.data', 'asc')
        .surround(params.slug)
        .fetch()

    return {
      article,
      prev,
      next,
      testo,
      show_parole
    }
  }
}
</script>

<style>
</style>
