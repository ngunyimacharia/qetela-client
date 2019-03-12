<template>
  <div id="up" v-if="user">
    <div class='columns is-gapless' v-if="user.kudoSet.length && position">
      <!-- Main section -->
      <div class="column is-three-quarters">
          <user-header :user="user" :position="position"></user-header>
          
          <div class="columns user-content-section">
            <div class = "column">
              <user-goals :user="user" />
              <br/>
              <user-onboarding :user="user"/>
              <br/>
              <user-buddying :user="user" />
            </div>
            <div class = "column">
              <!-- Charts -->
              <UpdatesBar />

            </div>
        </div>
      </div>
      <!-- Sidebar section -->
      <div class="column">
        <user-sidebar :user="user" ></user-sidebar>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#up{
  width: 100vw;
  padding: 0;
  margin: 0;
  max-width: 100vw;

  .user-content-section{
    padding: 0 1rem;
  }
}


.none{
  text-align: center;
  color:#adb5bd;
}

</style>

<script>

import UserHeader from "~/components/user/UserHeader";
import UserGoals from "~/components/user/UserGoals";
import UserOnboarding from "~/components/user/UserOnboarding";
import UserBuddying from "~/components/user/UserBuddying";
import UserSidebar from "~/components/user/UserSidebar";
import UpdatesBar from "~/components/user/UpdatesBar";

export default {
  components: {
    UserHeader,
    UserGoals,
    UserOnboarding,
    UserBuddying,
    UserSidebar,

    UpdatesBar,
  },
  mounted(){
    this.user = this.$store.getters['organisation/USER'](this.$route.params.slug)
  },
  computed:{
    kpiData:function(){
      return this.$store.getters['goals/KPI_WEEKLY_DATA'](this.username)
    },
    position:function(){
      return this.$store.getters['organisation/USER_POSITION'](this.user.username)
    },
  },
  data() {
    return {
      user:{
        kudoSet:[]
      }
    }
  },
}
</script>
