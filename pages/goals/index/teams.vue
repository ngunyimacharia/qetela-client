<template>
  <div class="columns" id="team-goals">
    <div class="column is-one-fifth">
      <!-- Table data filters -->
      <nav class="panel" >
      <p class="panel-heading">
        Filters
      </p>
      <div class="panel-block">
        <label>
          Year
        </label>
        <div class="select">
          <select v-model="selectedYear" v-on:change="timeSelected()">
            <option value=""> All Years </option>
            <option v-for="year in years">{{year}}</option>
          </select>
        </div>
      </div>
      <div class="panel-block" v-for="level in levels" v-if="level.number <= maxLevel">
        <label>
          {{level.label}}
        </label>
        <div class="select">
          <select v-model="level.value" v-on:change="teamSelected(level.number,level.value);">
            <option value="">All {{level.label}}</option>
            <option v-for="team in getTeams(level.id,level.number)" :value="team.id"> {{team.name}} </option>
          </select>
        </div>
      </div>
    </nav>
    </div>
    <div class="column">
      <!-- Show table -->
      <goal-table :goals ="goals()"></goal-table>
    </div>
  </div>
</template>

<style lang="scss">

  @media (min-width: 768px) {
    #team-goals{
      margin: 1rem;
    }
  }

  #team-goals{

    .panel-block{
      justify-content: space-between;

      .select{
          max-width: 70%;
      }

    }

  }

</style>

<script>
import moment from 'moment';
import GoalTable from "~/components/goals/GoalTable";

export default {
  components: {
    GoalTable
  },
  computed:{
    allGoals:function(){
        return this.$store.getters['goals/GOALS']
    },
    levels:function() {
      const retLevels = []
      if(this.$store.getters['organisation/ORGANISATION'].levelSet){
        const levels = this.$store.getters['organisation/ORGANISATION'].levelSet
        for(let i=0; i<levels.length ; i++){
          let level = levels[i]
          retLevels.push({
            id: level.id,
            number: level.number,
            label: level.label,
            value:""
          })
        }
        return retLevels
      }else{
        return []
      }
    },
  },
  data(){
    return {
      years:[2019,2018,2017,2016,2015],
      selectedYear:"",
      maxLevel:1,
    }
  },
  methods:{
    getTeams(levelId,levelNo){
      //Let's get parent level selection
      let parentId
      for(let level of this.levels){
        if(level.number == (levelNo-1)){
          parentId = level.value
        }
      }
      const teams = this.$store.getters['organisation/TEAMS'](levelId,parentId)
      return teams
    },
    timeSelected(){
      this.$forceUpdate()
    },
    teamSelected(levelNo,val){

      if(!val.length){
        if(this.maxLevel != 1){
          this.maxLevel = levelNo
        }
      }else{goals
        this.maxLevel++
      }
      this.$forceUpdate()
    },
    goals(){
      //Load goals
      let goals = this.allGoals

      //get active filter team
      let currentTeam = null
      for(let level of this.levels){
        if(level.value){
          currentTeam = level.value
        }else{
          break
        }
      }

      //Filter by team
      if(currentTeam){
        goals = goals.filter( goal => {
          if(goal.team == null){
            return false
          }
          return (goal.team.id == currentTeam)
        })
      }

      //Filter by date
      if(this.selectedYear){
        const selYear = moment().year(this.selectedYear).month(0).date(1)
        goals = goals.filter( goal => {
          if(moment(goal.start).year() == this.selectedYear || moment(goal.start).isAfter() == this.selectedYear ){
            return true
          }
        })

      }
      console.log(this.selectedYear)

      return goals
    } //End of function
  }

}

</script>
