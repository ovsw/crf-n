<template>
  <component 
    v-if="story.content.component"
    :key="story.content._uid" 
    :content="story.content" 
    :is="story.content.component"/>
</template>


<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview.js'

export default {
  mixins: [storyblokLivePreview],
  // data() {
  //   return { story: { content: { heading: '' } } }
  // },
  asyncData(context) {
    let endpoint = `cdn/stories/${context.params.section}/${
      context.params.page
    }`

    // Check if we are in the editor mode
    let version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    return context.app.$storyapi
      .get(endpoint, {
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
