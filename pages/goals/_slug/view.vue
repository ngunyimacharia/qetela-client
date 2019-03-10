<template>

  <div class="columns" v-if="goal">
    <div class="column is-three-quarters">
      <div class="container">
        <goal-header :goal="goal" />

        <div class="columns">
          <div class="column">
            <goal-kpis :goal="goal" />
            <br/>
            <goal-alignment :goal="goal" />
          </div>
          <div class="column"></div>
        </div>
      </div>
    </div>
    <div class="column is-one-quarter">
      <goal-sidebar :goal="goal" />
    </div>
  </div>

</template>

<style lang="scss">

</style>

<script>

import GoalHeader from "~/components/goals/GoalHeader";
import GoalSidebar from "~/components/goals/GoalSidebar";
import GoalKpis from "~/components/goals/GoalKpis";
import GoalAlignment from "~/components/goals/GoalAlignment";

export default {
  layout: "default",
  components: {
    GoalHeader,
    GoalSidebar,
    GoalKpis,
    GoalAlignment,
  },
  mounted(){
    this.goal = this.$store.getters['goals/GOAL'](this.$route.params.slug)
  },
  data() {
    return {
      goal:null
    };
  },
  methods:{

  }
};

</script>
