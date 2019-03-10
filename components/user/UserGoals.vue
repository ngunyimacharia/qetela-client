<template>

  <div class="card" id="user-goals">
    <header class="card-header">
      <p class="card-header-title">
        Active Goals
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="none" v-if="!goals.length">
          No goals assigned
        </div>
        <div class="columns" v-for="goal in goals">
          <div class = "column is-two-thirds">
            <nuxt-link :to="'/goals/'+goal.id+'/view/'">{{goal.title}}</nuxt-link>
          </div>
          <div class = "column">
            <progress :class="progressColor(goal.progress)" :value="goal.progress" max="1" :title="getPercentage(goal.progress)">
                {{ getPercentage(goal.progress) }}
            </progress>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss">

</style>

<script>

export default {
  props: ["user"],
  computed:{
    goals:function(){
      const username = this.user.username
      return this.$store.getters['goals/PERSONAL_GOALS'](username)
    },
  },
  data(){
    return {};
  },
  methods:{

    getPercentage(val){
      return val*100 + "%"
    },
    progressColor(progress){
      if(progress < 0.25){
        return 'progress is-danger is-small'
      }else if(progress < 0.5){
        return 'progress is-warning is-small'
      }else if(progress < 0.75){
        return 'progress is-success is-small'
      }else if(progress < 1){
        return 'progress is-primary is-small'
      }else{
        return 'progress is-link is-small'
      }
    },
  }
}
</script>
