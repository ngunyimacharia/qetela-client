<template>
  <section id="error" class="container has-text-centered">
    <h1 class="subtitle is-4" v-if="error.statusCode === 404">😱Page not found😱</h1>
    <h1 class="subtitle is-4" v-else>😱An error occurred😱</h1>
    <img class = "err-icon" src="~/static/images/icons/error.svg">
    <p>It seems an error occurred, please try again later.<br/> If this persists feel free to reach out to us.</p>
    <br/>
    <nuxt-link to="/">Back to Home page</nuxt-link>
  </section>
</template>


<style lang="scss">
    #error{
        padding: 4rem;
        .err-icon{
            width: 20rem;
            margin: 0.5rem;
        }
    }
</style>


<script>
export default {
  props: ['error'],
  layout: 'plain' // you can set a custom layout for the error page
}
</script>