<template>
  <a 
    id="mainMenuBurger"
    href="#main-menu"
    role="button"
    class="navbar-burger burger" 
    aria-label="menu" 
    aria-expanded="false" 
    data-target="navbarBasicExample">
    <span aria-hidden="true"/>
    <span aria-hidden="true"/>
    <span aria-hidden="true"/>
    <strong class="text">Menu</strong>
  </a>
</template>


<script>
export default {
  mounted() {
    $(document).ready(function() {
      //   With the API bind method
      var $icon = $('#mainMenuBurger')
      var API = $('#main-menu').data('mmenu')

      API.bind('open:start', function() {
        setTimeout(function() {
          $icon.addClass('is-active')
        }, 300)
      })
      API.bind('close:start', function() {
        setTimeout(function() {
          $icon.removeClass('is-active')
        }, 300)
      })
    })
  }
}
</script>

<style lang="scss">
.navbar-burger {
  padding: 0.7rem 0;
  position: relative;
  padding-left: 2rem;

  & span:nth-child(1) {
    top: calc(50% - 10px);
  }
  & span:nth-child(2) {
    top: calc(50%);
  }
  & span:nth-child(3) {
    top: calc(50% + 10px);
  }

  & span {
    background-color: currentColor;
    display: block;
    height: 2px;
    // left: calc(50% - 30px);
    left: 5px;
    position: absolute;
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transition-duration: 86ms;
    transition-duration: 86ms;
    -webkit-transition-property: background-color, opacity, -webkit-transform;
    transition-property: background-color, opacity, -webkit-transform;
    transition-property: background-color, opacity, transform;
    transition-property: background-color, opacity, transform, -webkit-transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    width: 32px;
  }
}
.navbar-burger strong.text {
  display: inline !important;
  margin: 0 0 0 5px;
  padding: 10px;
}
</style>
