<template>
  <div>
    <nav class="flex justify-between bb b--white-10">
      <NuxtLink class="link black hover-black-50 no-underline flex items-center pa3" href="" title="Home" to="/">HOME</NuxtLink>
      <div class="flex-grow pa3 flex items-center">
        <AppSearchInput class="f6 link dib black dim mr3 mr4-ns" href="#0" />
      </div>
    </nav>

    <!-- pagina principale del blog del gruppo Nel Dominio dell'Incerto -->
    <section class="mw7 center avenir">
      <h2 class="baskerville fw1 ph3 ph0-l">Nel Dominio dell'Incerto</h2>
      <article class="bt bb b--black-10">
        <a class="db pv4 ph3 ph0-l no-underline black dim" href="#0" v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blogNDI-slug', params: { slug: article.slug } }">
          <div class="flex flex-column flex-row-ns">
            <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
              <img src="~/assets/teatro.png" class="db" alt="no foto">
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
    const articles = await $content('articlesNDI')
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
/*
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: black;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  padding: 30px 0 10px 0;
}
*/
</style>
