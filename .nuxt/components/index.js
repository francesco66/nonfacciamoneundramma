export { default as AppSearchInputMDMA } from '../../components/AppSearchInputMDMA.vue'
export { default as AppSearchInputNDI } from '../../components/AppSearchInputNDI.vue'
export { default as Gemini } from '../../components/Gemini.vue'
export { default as PrevNextMDMA } from '../../components/PrevNextMDMA.vue'
export { default as PrevNextNDI } from '../../components/PrevNextNDI.vue'
export { default as ButtonDownload } from '../../components/buttonDownload.vue'
export { default as ButtonEmailCorrezioni } from '../../components/buttonEmailCorrezioni.vue'

export const LazyAppSearchInputMDMA = import('../../components/AppSearchInputMDMA.vue' /* webpackChunkName: "components/app-search-input-mdma" */).then(c => c.default || c)
export const LazyAppSearchInputNDI = import('../../components/AppSearchInputNDI.vue' /* webpackChunkName: "components/app-search-input-ndi" */).then(c => c.default || c)
export const LazyGemini = import('../../components/Gemini.vue' /* webpackChunkName: "components/gemini" */).then(c => c.default || c)
export const LazyPrevNextMDMA = import('../../components/PrevNextMDMA.vue' /* webpackChunkName: "components/prev-next-mdma" */).then(c => c.default || c)
export const LazyPrevNextNDI = import('../../components/PrevNextNDI.vue' /* webpackChunkName: "components/prev-next-ndi" */).then(c => c.default || c)
export const LazyButtonDownload = import('../../components/buttonDownload.vue' /* webpackChunkName: "components/button-download" */).then(c => c.default || c)
export const LazyButtonEmailCorrezioni = import('../../components/buttonEmailCorrezioni.vue' /* webpackChunkName: "components/button-email-correzioni" */).then(c => c.default || c)
