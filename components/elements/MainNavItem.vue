<template>
  <nuxt-link 
    :to="model.path" 
    :class="['mm-listitem']" 
    tag="li" 
    active-class="Selected">
    <a><span>{{ model.title }}</span></a>
    <ul 
      v-if="model.children" 
      class="secondMenu">
      <main-nav-item 
        v-for="(model, index) in model.children" 
        :key="index" 
        :model="model" />
    </ul>

  </nuxt-link>
</template>

<script>
export default {
  name: 'MainNavItem',
  props: {
    model: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data: function() {
    return {
      level: false
    }
  },
  computed: {
    isFolder: function() {
      return this.model.children && this.model.children.length
    }
  }
}
</script>
