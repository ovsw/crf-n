<template>
  <div 
    v-editable="newsitem" 
    class="facebook-post-wrapper">
    <h4 class="fb-post-title">{{ newsitem.title }}</h4>
    <img 
      :src="newsitem.news_cover_image | resize('495x391/smart/filters:quality(80)')" 
      class="facebook-post-image">
    <div class="fb-post-text">
      <div v-html="textm"/>
      <p/>
      <p>
        <a 
          :href="newsitem.facebook_url" 
          class="fb-post-link" 
          target="_blank">See on Facebook</a>
      </p>
    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  props: {
    newsitem: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  computed: {
    textm() {
      return marked(this.newsitem.text)
    }
  }
}
</script>

<style lang="scss">
.feature {
  text-align: center;
  padding: 30px 10px 100px;
}

.feature__icon {
  max-width: 80px;
}
</style>
