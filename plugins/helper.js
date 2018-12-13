import Vue from 'vue'

Vue.filter('capitalize', val => val.toUpperCase())

Vue.filter('resize', (imagePath, options) => {
  if (typeof imagePath === 'undefined') return null
  let imageService = '//img2.storyblok.com/'
  let path = imagePath.replace('//a.storyblok.com', '')
  return imageService + options + path
})

export function resize(imagePath, options) {
  if (typeof imagePath !== 'undefined') {
    var imageService = '//img2.storyblok.com/'
    var path = imagePath.replace('//a.storyblok.com', '')
    return imageService + options + path
  }
  return null
}
