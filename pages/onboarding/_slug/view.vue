<template>
  <div class="ob-page" v-if="session && user && kit">
    <onboarding-header :user="user" :buddy="buddy" />
      <div class="columns">
        <div class="column is-three-quarters">
          <onboarding-tasks :session="session" :kit="kit" />
        </div>
        <div class="column">
          <onboarding-sidebar :session="session" />
        </div>
      </div>
  </div>
</template>

<style lang="scss">

  .ob-page{
    background: #F8FAFB;
  }

</style>

<script>
import OnboardingHeader from "~/components/onboarding/OnboardingHeader";
import OnboardingTasks from "~/components/onboarding/OnboardingTasks";
import OnboardingSidebar from "~/components/onboarding/OnboardingSidebar";

export default {
  components: {
    OnboardingHeader,
    OnboardingTasks,
    OnboardingSidebar,
  },
  mounted(){
    this.session = this.$store.getters['onboarding/SESSION'](this.$route.params.slug)
    if(typeof this.session != 'undefined'){
      this.kit = this.$store.getters['onboarding/KIT'](this.session.kit.id)
      this.user = this.$store.getters['organisation/USER'](this.session.user.username)
      this.buddy = this.$store.getters['organisation/USER'](this.session.buddy.username)
    }
  },
  data() {
    return {
      user:{},
      buddy:{},
      kit:{},
      session:{},
      modals:{
        kudos:false,
        recommendation:false,
      }
    }
  },
  methods:{

  }
}
</script>
