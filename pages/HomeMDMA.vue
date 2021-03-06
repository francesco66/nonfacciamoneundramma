<template>
  <div>
    <nav class="flex justify-between bb b--white-10">
      <NuxtLink class="link black hover-black-50 no-underline flex items-center pa3" href="" title="Home" to="/">HOME</NuxtLink>
      <div class="flex-grow pa3 flex items-center">
        <AppSearchInput class="f6 link dib black dim mr3 mr4-ns" href="#0" />
      </div>
    </nav>

    <!-- pagina principale del blog del gruppo Mai Dire Mi Arrendo -->
    <section class="mw7 center avenir">
      <h2 class="baskerville fw1 ph3 ph0-l">Mai Dire Mi Arrendo</h2>
      <article class="bt bb b--black-10">
        <a class="db pv4 ph3 ph0-l no-underline black dim" href="#0" v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blogMDMA-slug', params: { slug: article.slug } }">
          <div class="flex flex-column flex-row-ns">
            <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
              <img class="db" :src="article.img"/>
            </div>
            <div class="w-100 w-60-ns pl3-ns">
              <h1 class="f3 fw1 baskerville mt0 lh-title">{{ article.title }}</h1>
              <p class="f6 f5-l lh-copy">{{ article.autore }}</p>
              <p class="f6 lh-copy mv0">{{ article.parole }}</p>
            </div>
          </div>
        </NuxtLink>
        </a>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articlesMDMA')
      .only(['title', 'autore', 'slug', 'parole'])
      .sortBy('data', 'asc')
      .fetch()

    return {
      articles
    }
  }
}
</script>

<style>
</style>
