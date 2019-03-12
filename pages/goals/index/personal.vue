<template>
  <section>
    <goal-cards :goals ="goals" />
  </section>
</template>

<script>
import GoalCards from "~/components/goals/GoalCards";

export default {
  components: {
    GoalCards
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
