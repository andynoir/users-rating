<template>
  <main
    class="base-page"
    :class="`page_${name}`"
  >
    <slot />
  </main>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.base-page {
  height: 100%;
}
</style>
