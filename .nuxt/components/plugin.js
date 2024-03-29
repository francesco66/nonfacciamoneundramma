import Vue from 'vue'

const components = {
  AppSearchInputMDMA: () => import('../../components/AppSearchInputMDMA.vue' /* webpackChunkName: "components/app-search-input-mdma" */).then(c => c.default || c),
  AppSearchInputNDI: () => import('../../components/AppSearchInputNDI.vue' /* webpackChunkName: "components/app-search-input-ndi" */).then(c => c.default || c),
  Gemini: () => import('../../components/Gemini.vue' /* webpackChunkName: "components/gemini" */).then(c => c.default || c),
  PrevNextMDMA: () => import('../../components/PrevNextMDMA.vue' /* webpackChunkName: "components/prev-next-mdma" */).then(c => c.default || c),
  PrevNextNDI: () => import('../../components/PrevNextNDI.vue' /* webpackChunkName: "components/prev-next-ndi" */).then(c => c.default || c),
  ButtonDownload: () => import('../../components/buttonDownload.vue' /* webpackChunkName: "components/button-download" */).then(c => c.default || c),
  ButtonEmailCorrezioni: () => import('../../components/buttonEmailCorrezioni.vue' /* webpackChunkName: "components/button-email-correzioni" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
