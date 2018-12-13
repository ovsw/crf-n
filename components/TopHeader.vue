<template>
  <header>
    <div class="header">

      <div class="searchWrapper">
        <a 
          :href="'tel:'+phone_no" 
          target="_blank">Call Now {{ phone_no }}</a>
      </div>
      <!-- searchWrapper -->

      <div class="lefttopHeader">
        <a href="https://mailchi.mp/ad5ff728b209/october-newsletter-3277465">Our Latest <br>Newsletter</a>
      </div>

      <div id="boots" />
      <a 
        class="centertopHeader" 
        href="/">
        <img 
          src="https://dev3.ovswebsites.com/site/templates/images/Camp-Roosevelt-Firebird-Logo.png" 
          alt="Camp Roosevelt-Firebird Logo">
      </a>
      <!--end centertopHeader-->

      <div class="rightHeader">
        <a 
          class="rightHeaderContent" 
          href="https://www.ultracamp.com/clientlogin.aspx?idCamp=426&amp;campCode=CFR" 
          target="_blank">
          <span>Sign Up Now</span>
        </a>
      </div>
      <!--end rightHeader-->

      <div class="righttopHeader">
        <a 
          href="https://www.ultracamp.com/clientlogin.aspx?idCamp=426&amp;campCode=CFR" 
          target="_blank">UltraCamp login </a> |
        <a href="#">Search Website</a>
        <!--  | <a href="<?= $pages->get(1053)->url ?>">Blog</a> -->
      </div>
      <!--end righttopHeader-->

      <div class="navBanner">

        <nav id="nav">
          <ul 
            id="mainMenu" 
            class="mainMenu sm sm-clean">
            <nuxt-link 
              tag="li" 
              to="/" 
              exact>
              <a>Home</a>
            </nuxt-link>
            <!-- <main-nav-item 
              v-for="item in mainNav" 
              :model="item" 
              :key="item.title" /> -->
          </ul>
        </nav>
        <div id="leftBanner" />
        <div id="rightBanner" />

      </div>
      <!--end navBanner-->
      <div class="topBoard" />

    </div>
    <!--end header-->
  </header>
</template>

<script>
import MainNavItem from '~/components/elements/MainNavItem.vue'

export default {
  name: 'Header',
  components: {
    MainNavItem
  },
  data() {
    return {
      org_name: 'Camp Roosevelt-Firebird',
      phone_no: '(740)-269-0137',
      contact_email: 'joe@camprooseveltfirebird.com',
      street_addres: '',
      rootUrl: 'https://dev3.ovswebsites.com',
      baseUrl: process.env.rootUrl
    }
  },
  // computed: {
  //   mainNav() {
  //     return this.$store.getters.mainNav
  //   }
  // },
  mounted() {
    // $(document).ready(function() {
    //   var $icon = $('#menuBtnHam')
    //   var API = $('#navNew').data('mmenu')
    //   API.bind('open:finish', function() {
    //     setTimeout(function() {
    //       $icon.addClass('is-active')
    //     }, 100)
    //   })
    //   API.bind('close:finish', function() {
    //     setTimeout(function() {
    //       $icon.removeClass('is-active')
    //     }, 100)
    //   })
    // })
  }
}
</script>



<style lang="scss" src="~/assets/scss/components/header.scss">
</style>
