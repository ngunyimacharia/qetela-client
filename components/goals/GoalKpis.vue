<template>

  <div class="card" id="user-goals">
    <header class="card-header">
      <p class="card-header-title">
        Goal KPIs
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <div v-for="kpi in goal.kpiSet" :key="kpi.id">
          <div class="columns">
            <div class="column is-two-fifth">
              {{ getKpiText( kpi )}}
            </div>
            <div class="column is-two-fifth">
              <progress class="is-small" :class="progressColor(kpi.progress)" :value="kpi.progress" max="1" :title="getPercentage(kpi.progress)">
                {{ getPercentage(kpi.progress) }}
              </progress>
            </div>
            <div class="column is-one-fifth" v-if="goal.progress < 1 && kpi.progress < 1 && goal.status != 'Expired' ">
              <a class="button is-info is-small is-outlined" v-on:click = "toggleModal('update',kpi)" >Post update</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- KPI Update modal -->
    <update-kpi :active="this.modals.update" :kpi="selectedKpi" :goal="goal" />
  </div>


</template>

<style lang="scss" scoped>
  .card{
    .content{
      font-size: 0.9em;
    }
  }
</style>

<script>
import moment from 'moment';
import UpdateKpi from "~/components/goals/UpdateKpi";

export default {
  props: ["goal"],
  components: {
    UpdateKpi,
  },
  mounted:function(){
    this.$on('close-modal', function (modal) {
      this.modals[modal] = !this.modals[modal]
    });
  },
  computed:{

  },
  data(){
    return {
      modals:{
        update:false
      },
      selectedKpi:null,
    };
  },
  methods:{
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
    },
    toggleModal(modal,kpi){
      if(kpi){
        this.selectedKpi = kpi
      }
      this.modals[modal] = !this.modals[modal]
      this.$forceUpdate()
    }
  }
}
</script>
