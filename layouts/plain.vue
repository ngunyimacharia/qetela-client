<template>
  <div class="plain">
      <nav class="navbar has-text-centered is-fixed-top" role="navigation" aria-label="main navigation">
          <a class="navbar-item" href="/">
            <img src="~/static/images/logo-bw.png">
          </a>
      </nav>


    <div class="container">
      <nuxt />
    </div>
  </div>
</template>


<style lang="scss">
.plain{
  nav.navbar{
    background-color: #011638;

    .navbar-item{
      width: 100%;
      text-align: center;

      img{
        margin: auto;
      }
    }
  }
}
</style>
