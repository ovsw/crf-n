<template>
  <div class="contentTwoCollumns">


    <div class="menuBgLeft contentLeft">
      <div class="menuBgRight">
        <div id="menuDropdown"><span>Select a page...</span></div>
        <ul id="leftMenu"><li class="has_children"><a href="/learn-about-camp/about-us/">About Us</a><ul class="secondMenu"><li><a href="/learn-about-camp/about-us/our-director/">Our Director</a><span class="arrow"/></li><li><a href="/learn-about-camp/about-us/what-makes-us-special/">What Makes Us Special</a><span class="arrow"/></li><li><a href="/learn-about-camp/about-us/location/">Location</a><span class="arrow"/></li><li><a href="/learn-about-camp/about-us/since-1918/">Since 1918</a><span class="arrow"/></li></ul><span class="arrow"/></li><li class="has_children"><a href="/learn-about-camp/camp-staff/">Camp Staff</a><ul class="secondMenu"><li><a href="/learn-about-camp/camp-staff/camp-director/">Camp Director</a><span class="arrow"/></li><li><a href="/learn-about-camp/camp-staff/our-leadership-team/">Our Leadership Team</a><span class="arrow"/></li><li><a href="/learn-about-camp/camp-staff/counseling-staff/">2019 Counseling Staff</a><span class="arrow"/></li><li><a href="/learn-about-camp/camp-staff/summer-job/">Summer Job</a><span class="arrow"/></li></ul><span class="arrow"/></li><li class="has_children"><a href="/learn-about-camp/camp-environment/">Camp Environment</a><ul class="secondMenu"><li><a href="/learn-about-camp/camp-environment/our-activities/">Typical Day</a><span class="arrow"/></li><li><a href="/learn-about-camp/camp-environment/our-cabins/">Our Cabins</a><span class="arrow"/></li><li><a href="/learn-about-camp/camp-environment/our-meals/">Our Meals</a><span class="arrow"/></li><li><a href="/learn-about-camp/camp-environment/leadership-and-service/">Leadership and Service</a><span class="arrow"/></li><li><a href="/learn-about-camp/camp-environment/we-are-green/">We Are Green</a><span class="arrow"/></li></ul><span class="arrow"/></li><li class="has_children"><a href="/learn-about-camp/you-can-trust-us/">Compassion And Trust</a><ul class="secondMenu"><li><a href="/learn-about-camp/you-can-trust-us/helping-kids-grow/">Helping Kids Grow</a><span class="arrow"/></li><li><a href="/learn-about-camp/you-can-trust-us/families-love-us/">Families Love Us</a><span class="arrow"/></li><li><a href="/learn-about-camp/you-can-trust-us/safety/">Safety</a><span class="arrow"/></li></ul><span class="arrow"/></li><li><a href="/learn-about-camp/faqs/">FAQs</a><span class="arrow"/></li>
        </ul>
      </div>
    </div>


    <div class="contentRight">
      <div class="headerImageWrapper">
        <img 
          class="photo" 
          src="/site/assets/files/2060/image00.-banner_size.jpg" 
          alt="">
      </div>
      <div class="mainContentInner">
        <h1 v-editable="content">{{ content.main_heading }}</h1>
        <component 
          v-for="blok in content.body" 
          :key="blok._uid" 
          :blok="blok" 
          :is="blok.component"/>
      </div>
    </div>


    <div class="contentLeft">
      <div class="boxWrapperInner">
        <div class="videoBoxInner">
          <a 
            href="https://www.youtube.com/watch?v=_2PDV-OWwP8&amp;autoplay=1&amp;rel=0" 
            class="mainVideo"> <img 
              id="videoBackgroundInner" 
              src="/site/templates/images/video_bg.png" 
              alt=""> <img 
                id="movieFilmInner" 
                src="/site/templates/images/movieFilm.png" 
                alt="">
            <span>Watch Our Video</span>
          </a>
        </div>

        <ul class="imageBoxWrapperInner">
          <li class="imageBoxleftInner">
            <a href="https://www.camprooseveltfirebird.com/learn-about-camp/you-can-trust-us/helping-kids-grow/">
              <img 
                id="campDayInner" 
                src="/site/templates/images/helping-kids-grow.png" 
                alt="Growing at Camp Roosevelt-Firebird"> <span>Helping Kids Grow</span>
            </a>
          </li>
          <li class="imageBoxcenterInner">
            <a href="/learn-about-camp/camp-environment/">
              <img 
                id="interactiveMapInner" 
                src="/site/templates/images/camp-environment.png" 
                alt="Fun Environment at Camp Roosevelt-Firebird"> <span>Camp Environment</span>
            </a>
          </li>
          <li class="imageBoxrightInner">
            <a 
              href="/fullscreen-gallery/" 
              target="_blank"> <img 
                id="photoGalleryInner" 
                src="/site/templates/images/photoGaleryInner.png" 
                alt="Gallery Button">
              <span>View our Photo Gallery</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: function() {
        return {}
      }
    }
  }
}
</script>
