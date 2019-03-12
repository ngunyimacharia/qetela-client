<template>
  <section id="goals">
    <hero-nav 
      title="Goal setting and alignment" 
      description="Set, align and audit goals within your organisation" 
      :heroNavItems="heroNavItems"
      image="/images/icons/mountain.png"  
    />
    <section>
      <NuxtChild />
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
  data() {
    return {
      heroNavItems:[
        {name:"Personal",target:"/goals/personal",active:true},
        {name:"Teams",target:"/goals/teams"},
        {name:"Organisation",target:"/goals"},
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
