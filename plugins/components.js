import Vue from 'vue'

import Homepage from '~/components/pages/Homepage.vue'
import Page from '~/components/pages/Page.vue'

import Grid from '~/components/sections/Grid.vue'
import Teaser from '~/components/sections/Teaser.vue'

import Feature from '~/components/elements/Feature.vue'
import Imagewithtext from '~/components/elements/ImageWtext.vue'
import LinkToFacebookPost from '~/components/elements/LinkToFacebookPost.vue'

Vue.component('homepage', Homepage)
Vue.component('page', Page)

Vue.component('teaser', Teaser)
Vue.component('grid', Grid)

Vue.component('feature', Feature)
Vue.component('image_w_text_block', Imagewithtext)
Vue.component('link_to_facebook_post', LinkToFacebookPost)
