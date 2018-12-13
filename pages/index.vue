<template>
  <div>
    <div 
      class="hpVideoBg" 
      style="padding:0 10px;position:relative;">
      <video 
        playsinline 
        autoplay 
        muted 
        loop 
        poster="https://crfvideo-ac97.kxcdn.com/camp-roosevelt-firebird-intro-video-poster.jpg" 
        style="background-image: url('https://crfvideo-ac97.kxcdn.com/camp-roosevelt-firebird-intro-video-cover.jpg'); width:100%">
        <source 
          src="https://crfvideo-ac97.kxcdn.com/camp-roosevelt-firebird-intro-video.webm" 
          type="video/webm;">
        <source 
          src="https://crfvideo-ac97.kxcdn.com/camp-roosevelt-firebird-intro-video.mp4" 
          type="video/mp4;">
        <source 
          src="https://crfvideo-ac97.kxcdn.com/camp-roosevelt-firebird-intro-video.ogv" 
          type="video/ogv;">
      </video>
      <a 
        href="https://www.youtube.com/embed/_2PDV-OWwP8?rel=0&amp;showinfo=0" 
        data-fancybox 
        class="fullVideoButton mainVideo">See Full Video</a>
      
    </div>
    <!-- /.hpVideoBg -->

    <div class="homepage-content-wrapper">

      <h1 class="home-main-heading">Headline</h1>

      <div class="homepage-intro-para">Rich text</div>
      <!-- /.homepage-intro-para -->

      <component 
        v-if="story.content.component"
        :key="story.content._uid" 
        :blok="story.content" 
        :is="story.content.component"/>

    </div>
    <!--end topContentWrapper-->

    <div class="hpBottomSection">

      <h2 class="facebook-feed-heading">Fresh from Facebook</h2>

      <div class="facebook-posts-wrapper">
        NEWS</div>
    </div>
    <!--end hpBottomSection-->
  </div>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview.js'

export default {
  mixins: [storyblokLivePreview],
  data() {
    return { story: { content: {} } }
  },
  asyncData(context) {
    // Check if we are in the editor mode
    let version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    return context.app.$storyapi
      .get('cdn/stories/home', {
        version: version
      })
      .then(res => {
        return res.data
      })
      .catch(res => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        })
      })
  }
}
</script>
