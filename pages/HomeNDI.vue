<template>
  <!-- pagina principale del blog del gruppo Nel Dominio dell'Incerto -->
  <div>
    <nav class="flex justify-between bg-black bb b--white-10">
      <NuxtLink class="link white hover-green no-underline flex items-center pa3" href="" title="Home" to="/">HOME</NuxtLink>
      <h1 class="baskerville fw5 ma2 pa3 ph1-l white">Nel Dominio dell'Incerto</h1>
      <div class="flex-grow pa3 flex items-center">
        <AppSearchInput class="f6 link green dib mr3 mr4-ns" href="#0" />
      </div>
    </nav>

    <div id="imgNDI" class="center repeat">
      <div class="flex flex-wrap justify-around">
        <a v-for="(article, index) of articles" :key="article.slug">
          <NuxtLink :to="{ name: 'blogNDI-slug', params: { slug: article.slug } }" class="link underline-hover purple">
            <div class="w-100 pa3 ma1 br3 bg-black grow">
              <img style="background-image" :src="article.img" class="db bg-center br3 cover" />
              <h3 class="f5 f5-ns mt2 mb0 white-90 tc">{{ article.titolo }}</h3>
              <h3 class="f6 f5 fw4 mt2 white-60 tc">{{ article.autore }}</h3>
            </div>
          </NuxtLink>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articlesNDI')
      .only(['titolo', 'autore', 'slug', 'parole', 'img'])
      .sortBy('titolo', 'asc')
      .fetch()

    return {
      articles
    }
  }
}
</script>

<style>
#imgNDI {
  background-image: url("~/static/bg-207659.jpg");
}
</style>
