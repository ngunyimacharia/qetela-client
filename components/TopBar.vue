<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="~/static/images/logo-sm-bw.png" >
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" v-for="(menu,index) in menus" :key="index"  v-bind:to="'/'+menu.name.toLowerCase()" >
          {{ menu.name }}
        </nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link user-icon is-arrowless">KM</a>

          <div class="navbar-dropdown">
            <nuxt-link class="navbar-item" to="/account/profile">Profile</nuxt-link>
            <a class="navbar-item" v-on:click="logout">Logout</a>
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

.user-icon,
.user-icon:hover {
	border-radius: 100%;
	background: #ff1200 !important;
	font-size: 0.8rem;
	color: #fdfffc !important;
	width: 2.5rem;
	height: 2.5rem;
	text-align: center;
	margin: 0.4rem;
	font-weight: 700;
	letter-spacing: 0.1rem;
	padding: 0.6rem;
}

.navbar-dropdown{
  background-color: #011638;
}

.navbar-dropdown .navbar-item {
	padding: 0.375rem 1rem;
	white-space: nowrap;
}
</style>


<script>
export default {
  data() {
    return {
      menus: [
        { name: 'Organisation' },
        { name: 'Goals' },
        { name: 'Reviews' },
        { name: 'Onboarding' },
        { name: 'Kudos' },
        { name: 'Recommend' }
      ]
    }
  },
  methods: {
    logout(){
    this.$apolloHelpers.onLogout()
    this.$router.replace('/account/login')
    }
  }
}
</script>
