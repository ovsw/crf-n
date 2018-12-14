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

      <h1 
        v-editable="blok" 
        class="home-main-heading">{{ blok.heading }}</h1>

      <div 
        v-editable="blok"
        class="homepage-intro-para" 
        v-html="intro"/>
      <!-- /.homepage-intro-para -->
      <div 
        v-editable="blok">
        <component 
          v-for="(section,index) in blok.body" 
          :key="section._uid"
          :index="index" 
          :section="section" 
          :is="section.component"/>
      </div>
    </div>
    <!--end topContentWrapper-->

    <div class="hpBottomSection">

      <h2 
        v-editable="blok" 
        class="facebook-feed-heading">{{ blok.news_heading }}</h2>

      
      <div 
        v-editable="blok"
        class="facebook-posts-wrapper">
        <component 
          v-for="newsItem in blok.news" 
          :key="newsItem._uid" 
          :newsitem="newsItem" 
          :is="newsItem.component"/>
        
      </div>
    </div>
    <!--end hpBottomSection-->
  </div>
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
    intro() {
      return marked(this.blok.intro)
    }
  }
}
</script>
