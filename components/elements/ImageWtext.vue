<template>
  
  <div 
    v-editable="section" 
    class="home-content-block clearfix">
    <img 
      :alt="section.image_description" 
      :src="section.image | resize('320x270/smart/filters:quality(80)')" 
      :class="{'left': index % 2 === 0, 'right': index % 2 !== 0 }">
      
    <h2 v-if="section.title" >{{ section.title }}</h2>
    
    <div 
      :class="{'right': index % 2 === 0, 'left': index % 2 !== 0 }"
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
    },
    index: {
      type: Number,
      default: function() {
        return 0
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
