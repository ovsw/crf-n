<template>
  
  <div 
    v-editable="section" 
    class="home-content-block clearfix">
    <img 
      :alt="section.image_description" 
      :src="section.image | resize('320x270/smart/filters:quality(80)')" 
      class="left">
    <h2>Fun Summer Camp Activities</h2>
    <div 
      class="right"
      v-html="textm"/>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  props: {
    section: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  computed: {
    textm() {
      return marked(this.section.text)
    }
  }
}
</script>
