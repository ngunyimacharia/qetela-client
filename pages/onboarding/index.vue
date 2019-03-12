<template>
  <section id="goals">
    <hero-nav
      title="Organisational onboarding"
      description="Manage onboarding kits and onboarding sessions to ensure your new employees become fully functioning employees" :heroNavItems="heroNavItems"
      image="/images/icons/home.png" 
      >
    </hero-nav>

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
        {name:"Kits",target:"/onboarding",active:true},
        {name:"Sessions",target:"/onboarding/sessions"},
        {name:"Assigned",target:"/onboarding/assigned"},
        {name:"Buddying",target:"/onboarding/buddy"},
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
