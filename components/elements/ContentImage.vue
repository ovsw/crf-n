<template>
  <figure 
    v-editable="blok" 
    :class="blok.alignment">
    <img 
      :src="blok.image | resize(image_size+'x0/smart/filters:quality(80)')" 
      :alt="blok.alt_text">
    <figcaption>{{ blok.caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  computed: {
    image_size() {
      switch (this.blok.alignment) {
        case 'img_left':
          return '291'
          break
        case 'img_right':
          return '291'
          break
        case 'img_centered':
          return '367'
          break
        case 'img_stretched':
          return '582'
          break
      }
      return '582'
    }
  }
}
</script>

<style lang="scss">
</style>
