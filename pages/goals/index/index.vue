<template>
  <section class="container">
    <goal-table :goals ="orgGoals"></goal-table>
  </section>
</template>

<script>
import moment from 'moment';

import GoalTable from "~/components/goals/GoalTable";

export default {
  components: {
    GoalTable
  },
  computed:{
    orgGoals:function(){
      return this.$store.getters['goals/ORGANISATION_GOALS']
    },
  },
  data(){
    return {
    };
  }
}
</script>
