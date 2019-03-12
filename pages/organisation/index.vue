<template>
  <section id="organisation">
    <section v-if="organisation">
      <hero-nav
      :title="organisation.name"
      description="Manage your organisation details, levels, teams, positions and users"
      :heroNavItems="heroNavItems"
      image="/images/icons/enterprise.png" 
      >
    </hero-nav>
  </section>

  <section v-if="organisation">
    <NuxtChild :organisation="organisation" />
  </section>

</section>
</template>

<style lang="scss">

</style>

<script>
import HeroNav from "~/components/general/HeroNav";

export default {
  layout: "default",
  components: {
    HeroNav
  },
  asyncData(context){
    //initialize
    if(context.route.query.login){
      context.store.dispatch('nuxtClientInit',context)
      context.app.router.replace('/organisation')
    }
  },
  computed:{
    organisation(){
      return this.$store.getters['organisation/ORGANISATION']
    }
  },
  data() {
    return {
      heroNavItems:[
        {name:"General",target:"/organisation",active:true},
        {name:"Teams",target:"/organisation/teams"},
        {name:"Positions",target:"/organisation/positions"},
        {name:"Members",target:"/organisation/members"},
      ]
    };
  },
  methods:{
    menuActive(target){
      const path = $nuxt.$route.path
      if(path === target){
        return 'is-active'
      }
    }
  }
};
</script>
