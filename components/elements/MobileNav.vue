<template>
  <nav id="main-menu">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about/">About us</a></li>
      <li><a href="/contact/">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  mounted() {
    $(document).ready(function() {
      $('#main-menu').mmenu({
        extensions: ['pagedim-black'],
        iconPanels: true,
        navbars: [
          {
            position: 'top',
            content: ['searchfield']
          },
          {
            position: 'top'
          },
          {
            position: 'bottom',
            content: [
              "<a class='fa fa-envelope' href='#/'></a>",
              "<a class='fa fa-twitter' href='#/'></a>",
              "<a class='fa fa-facebook' href='#/'></a>"
            ]
          }
        ]
      })
    })
  }
}
</script>


<style lang="scss">
// #main-menu:not(.mm-menu) {
//   display: none;
// }
// .mm-menu {
//   height: calc(100% - 108px) !important;
//   --mm-color-background: #4bb5ef;
// }
</style>
