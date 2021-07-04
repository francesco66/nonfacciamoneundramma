import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6c50844b = () => interopDefault(import('../pages/chisiamo.vue' /* webpackChunkName: "pages/chisiamo" */))
const _04abfd21 = () => interopDefault(import('../pages/dovesiamo.vue' /* webpackChunkName: "pages/dovesiamo" */))
const _5f3885a8 = () => interopDefault(import('../pages/HomeMDMA.vue' /* webpackChunkName: "pages/HomeMDMA" */))
const _5ff752bc = () => interopDefault(import('../pages/HomeNDI.vue' /* webpackChunkName: "pages/HomeNDI" */))
const _7b383a8a = () => interopDefault(import('../pages/MailCorrezioni.vue' /* webpackChunkName: "pages/MailCorrezioni" */))
const _eb9fc3f2 = () => interopDefault(import('../pages/MailCorrezioni2.vue' /* webpackChunkName: "pages/MailCorrezioni2" */))
const _01b3fea5 = () => interopDefault(import('../pages/perche.vue' /* webpackChunkName: "pages/perche" */))
const _5937feca = () => interopDefault(import('../pages/blogMDMA/_slug.vue' /* webpackChunkName: "pages/blogMDMA/_slug" */))
const _b69ed6cc = () => interopDefault(import('../pages/blogNDI/_slug.vue' /* webpackChunkName: "pages/blogNDI/_slug" */))
const _4d5abe00 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/nonfacciamoneundramma/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/chisiamo",
    component: _6c50844b,
    name: "chisiamo"
  }, {
    path: "/dovesiamo",
    component: _04abfd21,
    name: "dovesiamo"
  }, {
    path: "/HomeMDMA",
    component: _5f3885a8,
    name: "HomeMDMA"
  }, {
    path: "/HomeNDI",
    component: _5ff752bc,
    name: "HomeNDI"
  }, {
    path: "/MailCorrezioni",
    component: _7b383a8a,
    name: "MailCorrezioni"
  }, {
    path: "/MailCorrezioni2",
    component: _eb9fc3f2,
    name: "MailCorrezioni2"
  }, {
    path: "/perche",
    component: _01b3fea5,
    name: "perche"
  }, {
    path: "/blogMDMA/:slug?",
    component: _5937feca,
    name: "blogMDMA-slug"
  }, {
    path: "/blogNDI/:slug?",
    component: _b69ed6cc,
    name: "blogNDI-slug"
  }, {
    path: "/",
    component: _4d5abe00,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
