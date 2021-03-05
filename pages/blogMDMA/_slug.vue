<template>
  <article class="pa3 pa5-ns">
    <nav class="flex justify-between bb b--white-10">
      <NuxtLink class="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib black" href="#0" to="/HomeMDMA">Mai Dire Mi Arrendo</NuxtLink>
      <div class="flex-grow pa3 flex items-center">
        <AppSearchInput class="f6 link dib white dim mr3 mr4-ns" href="#0"/>
      </div>
    </nav>
    <br>
    <h3 class="measure lh-copy">{{ article.data }} - {{article.autore }}</h3>
    <br>
    <p v-if="article.tema" class="measure lh-copy">Tema: {{ article.tema }}</p>
    <p class="measure lh-copy">Parole: {{article.parole }}</p>
    <h1 class="f3 f1-m f-headline-l">{{ article.title }}</h1>
    <p class="measure lh-copy">
      <nuxt-content :document="article" />
    </p>
    <br>
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
      const [prev, next] = await $content('articlesMDMA')
        /*.only(['title', 'slug', 'autore', 'data'])*/
        /* .sortBy('createdAt', 'asc') */
        .sortBy('article.data', 'asc')
        .surround(params.slug)
        .fetch()

    return {
      article,
      prev,
      next
    }
  }
}
</script>

<style>
</style>
