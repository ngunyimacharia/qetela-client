<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img class="is-hidden-touch" src="~/static/images/logo-sm-bw.png">
        <img class="is-hidden-desktop" src="~/static/images/logo-bw.png">
      </a>
      
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        v-bind:class="{'is-active':mobileMenuActive}"
        v-on:click="toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" v-bind:class="{'is-active':mobileMenuActive}">
      <div class="navbar-start">
        <div class="navbar-item is-hidden-desktop">
          <div class="columns is-mobile">
            <div class="column has-text-centered">
              <nuxt-link class="navbar-item navbar-icon" to="/account/messages">
                <i class="fas fa-envelope"></i>
              </nuxt-link>
            </div>
            <div class="column has-text-centered">
              <nuxt-link class="navbar-item navbar-icon" to="/account/notifications">
                <i class="fas fa-bell"></i>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="navbar-item search is-hidden-desktop">
          <div class="control">
            <input class="input" type="text" placeholder="Search for teams, people, goals etc">
          </div>
        </div>

        <nuxt-link
          class="navbar-item"
          v-for="(menu,index) in menus"
          :key="index"
          v-bind:to="'/'+menu.name.toLowerCase()"
        >{{ menu.name }}</nuxt-link>
        
        <div class="navbar-item has-dropdown is-hidden-desktop">
          <hr/>
          <div class="navbar-dropdown">
            <nuxt-link class="navbar-item" to="/account/profile">Profile</nuxt-link>
            <a class="navbar-item" v-on:click="logout">Logout</a>
          </div>
        </div>
      </div>

      <div class="navbar-end is-hidden-touch">
        <div class="navbar-item has-addons search">
          <div class="control">
            <input class="input" type="text" placeholder="Search for teams, people, goals etc">
          </div>
          <div class="control">
            <button type="submit">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>

        <a class="navbar-item">
          <button class="button is-info is-small">+New</button>
        </a>
        <nuxt-link class="navbar-item navbar-icon" to="/account/messages">
          <i class="fas fa-envelope"></i>
        </nuxt-link>
        <nuxt-link class="navbar-item navbar-icon" to="/account/notifications">
          <i class="fas fa-bell"></i>
        </nuxt-link>
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
  nav.navbar{
    background-color: #011638;

    .navbar-burger,.navbar-burger:hover{
      color:#fff;
    }

    .navbar-menu {
      background-color: #011638;
    }
    .navbar-menu a.navbar-item {
      color: #fff;
      font-size: 0.9em;
      padding: 5px;
    }
    a.navbar-item:hover,
    a.navbar-item.is-active,
    .navbar-link:hover,
    .navbar-link.is-active {
      background-color: #011638;
      color: #3273dc;
    }

    .user-icon,
    .user-icon:hover {
      border-radius: 100%;
      background: #ff1200 !important;
      font-size: 0.6rem;
      color: #fdfffc !important;
      width: 1.6rem;
      height: 1.6rem;
      text-align: center;
      margin: 0.9rem;
      font-weight: 700;
      letter-spacing: 0rem;
      padding: 0.4rem;
    }

    .navbar-dropdown {
      background-color: #011638;
    }

    .navbar-dropdown .navbar-item {
      padding: 0.375rem 1rem;
      white-space: nowrap;
    }

    .navbar-end .navbar-icon {
      margin-left: 0.9rem;
    }

    .navbar-end button {
      border-radius: 0.6rem !important;
    }

    .navbar-item.search input,
    .navbar-item.search button {
      background-color: rgba(255, 255, 255, 0.2);
      border: 0;
      height: 30px;
      color: #fff;
      font-size: 1em;
    }

    .navbar-item.search input::placeholder {
      color: #fff;
      font-size: 0.8em;
    }

    .navbar-item.search.has-addons input {
      border-radius: 4px 0 0 4px;
    }
    .navbar-item.search.has-addons button {
      border-radius: 0 4px 4px 0 !important;
      font-size: 0.8em;
      color: rgba(255, 255, 255, 0.7);
    }

    .navbar-item hr{
      margin: 0.5rem;
      height: 1px;
    }
  }
</style>


<script>
export default {
  data() {
    return {
      mobileMenuActive:false,
      menus: [
        { name: 'Organisation' },
        { name: 'Goals' },
        { name: 'Reviews' },
        { name: 'Onboarding' },
        { name: 'Kudos' },
        { name: 'Recommendations' }
      ]
    }
  },
  methods: {
    toggleMenu(){
      this.mobileMenuActive = !this.mobileMenuActive
    },
    logout(){
      this.$apolloHelpers.onLogout()
      this.$router.replace('/account/login')
    }
  }
}


</script>
