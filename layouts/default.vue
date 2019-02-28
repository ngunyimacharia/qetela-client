<template>
  <div id="body">
    <top-bar />
    <nuxt />
  </div>
</template>

<style lang="scss">
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
