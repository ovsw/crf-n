<template>

  <div>
    <div class="bodyWrapper">
      <div class="topHeaderWrapper" />
      <div class="containerLeftWrapper">
        <div class="containerRightWrapper">
          <div class="mainContainer">
            <TopHeader />
            

            <nuxt/>

          </div>
          <!-- /.mainContainer -->
        </div>
        <!-- /.containerRightWrapper -->
      </div>
      <!-- /.containerLeftWrapper-->
    </div>
    <!-- /.bodyWrapper -->

    <footer>
      <div class="footerWrapper">
        <div class="footer">
          <div class="footerLeft">

            <div class="vcard">
              <div class="tel">Call Now {{ phone_no }}
                <!-- <br />Vendors: {{ flickr_url }} --></div>
              <div class="org">{{ org_name }}</div>
              Joe Mendes, Owner/Director:
              <a 
                :href="'mailto:'+contact_email" 
                class="email">{{ contact_email }}</a> <br> Debbie Collins, Director of Operations:
              <a href="mailto:debbie@camprooseveltfirebird.com">debbie@camprooseveltfirebird.com</a>
              <br><br>
              <div class="adr">Camp Office:
                <span class="street-address">4141 Dublin Road</span>
                <span class="locality">SW Bowerston</span>,
                <span class="region">Ohio</span>&nbsp;
                <span class="postal-code">44695</span>&nbsp;&nbsp;
                <span class="country-name" />
              </div>
            </div>
            <br>
            <div class="winterAddress">Winter Office: 3095 Lincoln Blvd. Cleveland Heights, Ohio 44118</div>

          </div>
          <!--end footerLeft-->

          <div class="footerRight">
            <a 
              href="#" 
              class="footerNewsLetterLink"><img 
                :src="rootUrl+'/site/templates/images/newsletterBg.png'" 
                alt="Subscribe to our Newsletter"></a>
            <div class="socialMedia">
              <!-- <a class="twitter" href="https://twitter.com/camp_firebird">
                <img src="<?php echo $config->urls->templates?>images/twitter_57.png" alt="twitter"/>
              </a>
              <a href="http://www.youtube.com/user/FirebirdRoosevelt">
                <img src="<?php echo $config->urls->templates?>images/youtube_57.png" alt="youtube"/>
              </a> -->
              <a href="https://www.facebook.com/pages/Camps-Firebird-Roosevelt/270670676412">
                <img 
                  :src="rootUrl+'/site/templates/images/facebook_57.png'" 
                  alt="facebook">
              </a>

            </div>
            <p style="clear: both;">Copyright ©2013-2018 {{ org_name }}<br>
              <a href="http://www.ovswebsites.com">Website by OVS Websites</a>
            </p>
          </div>

          <!--end footerRight-->

        </div>
        <!--end footer-->
        <div class="footerBanner" />
        <div class="grass" />
      </div>
      <!--end footerWrapper-->
    </footer>
  </div>
</template>

<script>
import TopHeader from '~/components/TopHeader.vue'
import BottomFooter from '~/components/BottomFooter.vue'

export default {
  components: {
    TopHeader,
    BottomFooter
  }
}
</script>
