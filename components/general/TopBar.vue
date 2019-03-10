<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
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
          class="navbar-item is-hidden-touch"
          v-for="(menu,index) in menus"
          :key="menu.name"
          v-bind:to="menu.target"
        >
          <div>
            <div><i :class="menu.icon"></i></div>
            <div>{{ menu.name }}</div>
          </div>
        </nuxt-link>


        <nuxt-link
          class="navbar-item is-hidden-desktop"
          v-for="(menu,index) in menus"
          :key="index"
          v-bind:to="menu.target"
        >
          {{ menu.name }}
        </nuxt-link>
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
          <a class="navbar-link user-icon is-arrowless">{{ initials }}</a>
          <div class="navbar-dropdown">
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

    .navbar-start {
      a.navbar-item{
        div{
          text-align: center;
          padding-top: 2px;
          padding-left:10px;
          font-size: 12px;
        }
      }
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

import { mapState } from 'vuex'

export default {
  data() {
    return {
      mobileMenuActive:false
    }
  },
  computed:{
      ...mapState({
          initials: state => state.user.user.initials
      }),
      menus: function(){
        const menu = [
          { name: 'Organisation', target:"/organisation", icon:"far fa-building fa-lg"},
          { name: 'Goals', target:"/goals/personal", icon:"fas fa-bullseye fa-lg" },
          { name: 'Reviews',target:"/reviews", icon:"far fa-clipboard fa-lg" },
          { name: 'Onboarding',target:"/onboarding/sessions",icon:"far fa-handshake fa-lg" },
        ]
        if(this.$store.getters['user/USER']){
          menu.push(
            {
              name: 'My Profile',
              target:"/up/"+this.$store.getters['user/USER'].username,
              icon:"far fa-user-circle fa-lg"
            }
          )
        }
        return menu

      }
  },
  methods: {
    toggleMenu(){
      this.mobileMenuActive = !this.mobileMenuActive
    },
    logout(){
      this.$apolloHelpers.onLogout()
      this.$store.dispatch('CLEAR_STORAGE',this)
      this.$router.replace('/account/login')
    }
  }
}


</script>
