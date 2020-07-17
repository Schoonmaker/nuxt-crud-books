import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b7388c24 = () => interopDefault(import('../pages/book/create.vue' /* webpackChunkName: "pages/book/create" */))
const _4f43b370 = () => interopDefault(import('../pages/book/delete/_id.vue' /* webpackChunkName: "pages/book/delete/_id" */))
const _041b63b2 = () => interopDefault(import('../pages/book/edit/_id.vue' /* webpackChunkName: "pages/book/edit/_id" */))
const _fc8f3d90 = () => interopDefault(import('../pages/book/_id.vue' /* webpackChunkName: "pages/book/_id" */))
const _97ee9a44 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/book/create",
    component: _b7388c24,
    name: "book-create"
  }, {
    path: "/book/delete/:id?",
    component: _4f43b370,
    name: "book-delete-id"
  }, {
    path: "/book/edit/:id?",
    component: _041b63b2,
    name: "book-edit-id"
  }, {
    path: "/book/:id?",
    component: _fc8f3d90,
    name: "book-id"
  }, {
    path: "/",
    component: _97ee9a44,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
