<template>

    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <h3 class="title is-4">
            {{title}}
          </h3>
          <p class="subtitle is-6">
            {{description}}
          </p>
          <div class="tabs is-centered is-boxed">
            <ul>
              <li v-for="menu in heroNavItems" :key="menu.target" v-bind:class="menuActive(menu.target)">
                <nuxt-link v-bind:to="menu.target">
                  {{menu.name}}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

</template>

<style lang="scss">

.hero{
  background: #eff0f1;
  color:#011638;
  padding: 0.5rem 0 !important;
  margin-bottom: 2rem;
  border-bottom: 1px solid #dbdfe1;

  .hero-body{
    padding: 0;
    h3{
      margin: 0.5rem 0 3rem !important;
    }
    h6{
      margin: 1rem 0 !important;
    }
  }
}

</style>

<script>
export default {
  props: ['title','description','heroNavItems'],
  data() {
    return {
      //
    };
  },
  methods:{
    menuActive(target){
      const path = $nuxt.$route.path
      if(path === target){
        return 'is-active'
      }
    },
  }
};
</script>
