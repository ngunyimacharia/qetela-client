<template>
  <section>
    <goal-cards :goals ="orgGoals" />
  </section>
</template>

<script>
import GoalCards from "~/components/goals/GoalCards";

export default {
  components: {
    GoalCards
  },
  computed:{
    orgGoals:function(){
      return this.$store.getters['goals/ORGANISATION_GOALS']
    },
  },
  data(){
    return {};
  },
  methods:{
  }
}
</script>
