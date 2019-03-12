<template>
  <section class="container">
    
    <nuxt-link  v-for="goal in goals" :key="goal.id" :to="'/goals/'+goal.id+'/view/'">
      <div class="box goal-box">
        <p><strong>{{goal.title}}</strong></p>
        <p> <span class = "highlight"><i class="fas fa-hourglass-start"></i>Start :  </span>  {{ parseDate(goal.start) }}</p>
        <p><span class = "highlight"><i class="fas fa-hourglass-end"></i>End :  </span> {{ parseDate(goal.end) }}</p>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag">Status</span>
            <span class="tag" :class="goal.statusColor">{{goal.status}}</span>
          </div>
        </div>
        <p>
          <progress :class="progressColor(goal.progress)" :value="goal.progress" max="1" :title="getPercentage(goal.progress)">
            {{ getPercentage(goal.progress) }}
          </progress>
        </p>
      </div>
    </nuxt-link>

  </section>
</template>

<style lang="scss" scoped>
  .container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    .goal-box{
      max-width:95%;
      width:300px;
      float: left;
      margin: 1rem;
      box-shadow:0 2px 8px 0 rgba(0,0,0,.1),0 6px 24px 0 rgba(0,0,0,.04);
      font-size: 1em;
      
      strong{
        color: #30343f;
        font-size: 1rem;
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

      .control{
        margin: 1rem 0;
      }
      
    }

    .goal-box:hover{
      background: rgba(56,174,204,0.03);
      transition: all .2s cubic-bezier(0,0,.2,1)
    }
  }
</style>

<script>
import moment from 'moment';

export default {
  props:["goals"],
  components: {
  },
  computed:{
  },
  data(){
    return {};
  },
  methods:{
    parseDate(date){
      return moment(date).format('ll')
    },
    parseDateTime(date){
      return moment(date).format('lll')
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
    getKpiText(kpi){

      /*
        Graphql is modifying the comparison operators
        "<" becomes "__2"
        ">" becomes "_"
        "=" becomes "__1"
      */
      let output = '';
      switch(kpi.change){
        case '__2':
          // less than
          output += 'Reduce ' + kpi.metric + ' by ' + kpi.target
          break
        case '_':
          output += 'Reduce ' + kpi.metric + ' by ' + kpi.target
          break
        default:
          output += 'Have ' + kpi.metric + ' ' + kpi.target
          break

      }
      return output
    }
  }
}
</script>
