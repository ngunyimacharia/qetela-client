<template>
  <section class="header">

    <!-- Goal details -->
    <div>
      <div class="columns">
        <div class="column gpic">
          <figure class="image is-128x128">
            <img class="is-thumbnail" src="/images/icons/goal.png">
          </figure>
        </div>
        <div class="column is-four-fifths details">
          <p class="title is-4">
            <b>Goal :  </b> {{goal.title}}
          </p>
          <div class="columns">
            <div class="column">
              <p>
                <span class = "highlight"><i class="fas fa-hourglass-start"></i>Start :  </span> {{ parseDate(goal.start) }}
              </p>
              <p>
                <span class = "highlight"><i class="fas fa-hourglass-end"></i>End :  </span>  {{ parseDate(goal.end) }}
              </p>
              <p v-if="goal.responsible">
                <span v-if="goal.responsible.type == 'User'">
                  <span class = "highlight"><i class="fas fa-user-clock"></i>Assigned to:</span>
                  <nuxt-link :to="goal.responsible.link">{{goal.responsible.name}}</nuxt-link>
                </span>
                <span v-if="goal.responsible.type == 'Team'">
                  <span class = "highlight"><i class="fas fa-users"></i>Assigned to:</span>
                  <nuxt-link :to="goal.responsible.link">{{goal.responsible.name}}</nuxt-link>
                </span>
                <span v-if="goal.responsible.type == 'Organisational'">
                  <span class = "highlight"><i class="fas fa-rocket"></i></span>
                  Organisation Goal
                </span>
              </p>
              <p>
                <span class="tag is-info" v-if="goal.responsible">
                  {{goal.responsible.type}} Goal
                </span>
                <span class="tag" :class="goal.statusColor">
                  {{goal.status}}
                </span>
              </p>
            </div>
            <div class="column">
              <p><span class = "highlight"><i class="fas fa-info-circle"></i>Description :</span></p>
              <p>{{goal.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <!-- Goal progress -->

    <div class="progress">
      <progress class = "is-small" :class="progressColor(goal.progress)" :value="goal.progress" max="1" :title="getPercentage(goal.progress)">
        {{ getPercentage(goal.progress) }}
      </progress>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.header{
  padding: 2rem 1rem;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,.1),0 6px 24px 0 rgba(0,0,0,.04);
  margin-bottom: 2rem;

  .gpic{
    padding: 1rem 2rem;
    figure{
      margin: 0.75rem auto;
    }
  }

  .details{

    .title{
      font-size: 1.4em;
      font-weight: normal;
      color: #30343f;
    }

    .highlight{
      color: #30343f;
      font-weight: 700;
    }

    p{
      font-size: 0.9em;
      i{
        padding-right: 0.5rem;
      }
    }
    .button{
      margin: 0 0.4rem 0 0;
      font-size: 0.9em;
      i{
        padding: 0 1rem;
      }
    }
  }

}
</style>

<script>
import moment from 'moment';

export default {
  components: {
  },
  props: ["goal"],
  mounted:function(){
    // Check responsible
    if(this.goal.team){
      const team =  this.$store.getters['organisation/TEAM'](this.goal.team.id)
      this.goal.responsible = {
        link: "#",
        name: team.name,
        type: 'Team'
      }
    }else if(this.goal.user){
      const user =  this.$store.getters['organisation/USER'](this.goal.user.username)
      this.goal.responsible = {
        link: "/up/" + user.username,
        name: user.firstName + ' ' + user.lastName,
        type: 'User'
      }
    }else{
      this.goal.responsible = {
        type: 'Organisational'
      }
    }


    this.$forceUpdate()

  },
  computed:{
    //
  },
  data() {
    return {
      user:null,
    }
  },
  methods:{
    parseDate(date){
      return moment(date).format('ll')
    },
    getPercentage(val){
      return val*100 + "%"
    },
    progressColor(progress){
      if(progress < 0.25){
        return 'progress is-danger'
      }else if(progress < 0.5){
        return 'progress is-warning'
      }else if(progress < 0.75){
        return 'progress is-success'
      }else if(progress < 1){
        return 'progress is-primary'
      }else{
        return 'progress is-link'
      }
    },
  }
}
</script>
