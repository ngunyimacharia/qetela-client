<template>

  <div class="card" id="user-goals">
    <header class="card-header">
      <p class="card-header-title">
        Onboarding Buddy sessions
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="none" v-if="!sessions.length">
          No onboarding buddy sessions assigned
        </div>
        <div class="columns" v-for="session in sessions" :key="session.id">
          <div class = "column is-two-thirds">
            <p>{{session.kitTitle}}</p>
            <p><b>Assigned:</b>&nbsp;{{ getUser(session.user.username) }}</p>
            <p><b>Completed:</b>&nbsp; {{ parseDateTime(session.completed) }}</p>
          </div>
          <div class = "column">
            <!-- <progress :class="progressColor(goal.progress)" :value="goal.progress" max="1" :title="getPercentage(goal.progress)">
                {{ getPercentage(goal.progress) }}
            </progress> -->
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss">

</style>

<script>
import moment from 'moment';

export default {
  props: ["user"],
  computed:{
    sessions:function(){
      const username = this.user.username
      return this.$store.getters['onboarding/BUDDY'](username)
    },
  },
  data(){
    return {};
  },
  methods:{
    parseDateTime(date){
      if(date){
        return moment(date).format('lll')
      }else{
        return 'In progress'
      }
    },
    getUser(username){
      const user = this.$store.getters['organisation/USER'](username)
      if(user){
        return user.firstName + ' ' + user.lastName
      }else{
        console.log(username,user)
      }
    }
  }
}
</script>
