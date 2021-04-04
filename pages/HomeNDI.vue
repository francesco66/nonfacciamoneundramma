<template>
  <!-- pagina principale del blog del gruppo Nel Dominio dell'Incerto -->
  <div id="imgNDI" class="center repeat">
    <nav class="flex justify-between bb bw2 b--white-30">
      <NuxtLink class="link flex items-center dim br3 ba bw1 ph4 pv2 ma3 dib white" title="Home" to="/">HOME</NuxtLink>
      <h1 class="baskerville fw5 ma2 pa3 ph1-l white">Nel Dominio dell'Incerto</h1>
      <div class="flex-grow ph4 pv2 flex items-center">
        <AppSearchInputNDI class="f6 link green dib mr3 mr4-ns" />
      </div>
    </nav>
    <!-- <h1 class="baskerville f1 f-headline-l fw1 i white">Nel Dominio dell'Incerto</h1> -->
    <div class="flex flex-wrap justify-around pa3">
      <a v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blogNDI-slug', params: { slug: article.slug } }" class="link underline-hover purple">
          <div class="w-100 pa3 ma1 br3 bg-black grow">
            <embed v-if="article.video"
                type="video/webm"
                :src="article.video"
                width="250"
                height="200">
            <img v-else style="background-image" :src="article.img" class="db bg-center br3 cover" />
            <h3 class="f5 f5-ns mt2 mb0 white-90 tc">{{ article.titolo }}</h3>
            <h3 class="f6 f5 fw4 mt2 white-60 tc">{{ article.autore }}</h3>
          </div>
        </NuxtLink>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articlesNDI')
      //.only(['titolo', 'autore', 'slug', 'parole', 'img'])
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
