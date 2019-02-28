<template>
  <div id="body">
    <top-bar />
    <nuxt />
  </div>
</template>

<style lang="scss">
  html,body,#body{
    // background: #f5f5f5 !important;
  }
  .container{
    max-width: 95%;
  }
</style>

<script>

import TopBar from '~/components/general/TopBar'

export default {
  components: {
    TopBar
  },
}

</script>
