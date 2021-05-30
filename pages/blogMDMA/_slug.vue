<template>
  <article class="pa3 pa5-ns">
    <nav class="flex justify-between bb b--white-10">
      <NuxtLink class="f6 link dim br3 ba bw1 ph3 pv2 mb3 ml3 black" to="/HomeMDMA">Mai Dire Mi Arrendo</NuxtLink>
      <!-- <div class="flex-grow pa3 flex items-center">
        <AppSearchInputMDMA class="f6 link dib white dim mr3 mr4-ns"/>
      </div> -->
    </nav>

    <h2 class="f3 f1-l f-headline-l ma2 mb3">{{ article.titolo }}</h2>
    <h2 class="measure lh-copy dib ma2 mb5">di {{ article.autore }}</h2>
    <span class="measure lh-copy ma6">{{ article.data }}</span>
    <!-- <p v-if="article.tema" class="measure lh-copy ma3">Tema: {{ article.tema }}</p> -->
    <!-- <a class="f6 link dim br3 ba ph3 pv2 mb2 dib near-black" v-on:click="show_parole= !show_parole">Vedi parole</a>
    <p v-if="show_parole" class="measure lh-copy di">  {{article.parole }}</p> -->
    <!-- <div> -->
      <embed v-if="article.video"
        type="video/webm"
        :src="article.video"
        width="250"
        height="200">
    <!-- </div> -->
    <p class="measure lh-copy mb4">
      <nuxt-content :document="article" />
    </p>
    <!-- <NuxtLink class="link black hover-black-50 no-underline flex items-center pa3" :to="{ name: 'MailCorrezioni', params: { slug: article.slug } }">Segnala errori</NuxtLink> -->

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
    const article = await $content('articlesMDMA', params.slug, { 'text': true }).fetch()
    let show_parole = false

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
      show_parole
    }
  }
}
</script>

<style>
</style>
