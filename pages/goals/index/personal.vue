<template>
  <section class="container">
    <goal-table :goals ="goals"></goal-table>
  </section>
</template>

<script>
import GoalTable from "~/components/goals/GoalTable";

export default {
  components: {
    GoalTable
  },
  computed:{
    goals:function(){
      const username = this.$store.getters['user/USER'].username
      return this.$store.getters['goals/PERSONAL_GOALS'](username)
    },
  },
  data(){
    return {};
  },
  methods:{
  }
}
</script>
