<template>
  <div 
    v-editable="blok" 
    v-html="textm"/>
</template>

<script>
import marked from 'marked'

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
    textm() {
      return marked(this.blok.rich_text)
    }
  }
}
</script>

<style lang="scss">
</style>
