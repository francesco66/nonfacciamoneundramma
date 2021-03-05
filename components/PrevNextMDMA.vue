<template>
  <div class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blogMDMA-slug', params: { slug: prev.slug } }"
      class="text-primary font-bold hover:underline"
    >
      pre {{ prev.title }} di {{ prev.autore }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'blogMDMA-slug', params: { slug: next.slug } }"
      class="font-bold hover:underline"
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
