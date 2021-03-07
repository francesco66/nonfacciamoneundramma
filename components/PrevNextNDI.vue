<template>
  <div class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blogNDI-slug', params: { slug: prev.slug } }"
      class="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3"
    >
      pre {{ prev.title }} di {{ prev.autore }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'blogNDI-slug', params: { slug: next.slug } }"
      class="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3"
    >
      next {{ next.title }} di {{ next.autore }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>
