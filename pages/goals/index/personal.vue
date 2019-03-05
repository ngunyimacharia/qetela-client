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
      const email = this.$store.getters['user/USER'].email
      return this.$store.getters['goals/PERSONAL_GOALS'](email)
    },
  },
  data(){
    return {};
  },
  methods:{
  }
}
</script>
