<template>
  <header class="sans-serif">
    <div class="vh-100 w-100 cover bg-left bg-center" style="background-image no-repeat center;">
      <nav class="dt w-100 mw8 center"> 
        <div class="dtc w2 v-mid pa3">
          <a href="/" class="dib w2 h2 pa1 ba b--white-90 grow-large border-box">
            <svg class="link white-90 hover-white" data-icon="skull" viewBox="0 0 32 32" style="fill:currentcolor"><title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
          </a>
        </div>
        <div class="dtc v-mid tr pa3">
          <a class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >Chi siamo</a> 
          <a class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >Dove siamo</a> 
          <a class="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >Perche'</a> 
        </div>
      </nav> 
      <div class="tc-l mt4 mt5-m mt6-l ph3">
        <h1 class="f2 f1-l fw2 white-90 mb0 lh-title">Non Facciamone Un Dramma</h1>
        <h2 class="fw1 f3 white-80 mt3 mb4">Il Blog dei blogs</h2>
        <NuxtLink class="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" to="/HomeMDMA">MDMA Mai Dire Mi Arrendo</NuxtLink>
        <span class="dib v-mid ph3 white-70 mb3">o</span>
        <NuxtLink class="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" to="/HomeNDI">Nel Dominio dell'Incerto</NuxtLink>
      </div>
    </div>
  </header>
</template>


<script>
export default {}
</script>

<style>
.cover {
  background-image: url("~/assets/teatro.png");
}
</style>
