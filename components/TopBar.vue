<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="~/static/images/logo-sm-bw.png" width="30px">
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <a v-for="(menu,index) in menus" :key="index" class="navbar-item">
          {{ menu.name }}
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  background-color: #011638;
}
.navbar-menu a.navbar-item {
  color: #fff;
  font-size: 0.9em;
  padding: 5px;
}
a.navbar-item:hover, a.navbar-item.is-active, .navbar-link:hover, .navbar-link.is-active {
	background-color: #011638;
	color: #3273dc;
}

</style>


<script>
export default {
  data() {
    return {
      menus: [
        { name: 'Home' },
        { name: 'Organisation' },
        { name: 'Goals' },
        { name: 'Reviews' },
        { name: 'Onboarding' },
        { name: 'Kudos' },
        { name: 'Recommend' }
      ]
    }
  }
}
</script>
