<template>
  <div id="body">
    <top-bar />
    <div class="content">
      <nuxt />
    </div>
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
