<template>
  <div>
    <top-bar />
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>

import TopBar from '~/components/general/TopBar'

export default {
  components: {
    TopBar
  }
}

</script>
