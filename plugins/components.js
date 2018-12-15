import Vue from 'vue'

import Homepage from '~/components/pages/Homepage.vue'
import Page from '~/components/pages/Page.vue'

import Imagewithtext from '~/components/elements/ImageWtext.vue'
import LinkToFacebookPost from '~/components/elements/LinkToFacebookPost.vue'
import RichText from '~/components/elements/RichText.vue'
import ContentImage from '~/components/elements/ContentImage.vue'

Vue.component('homepage', Homepage)
Vue.component('page', Page)

Vue.component('image_w_text_block', Imagewithtext)
Vue.component('link_to_facebook_post', LinkToFacebookPost)
Vue.component('rich_text', RichText)
Vue.component('content_image', ContentImage)
