<template>
  <h1 v-bind:title="message">{{ message }}</h1>
</template>

<script>

export default {
  data() {
    return {
      message:"Hello world"
    }
  }
}
</script>
