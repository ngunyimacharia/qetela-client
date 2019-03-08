<template>
  <section class="container">
    <session-table :sessions ="sessions"></session-table>
  </section>
</template>

<style lang="scss">

</style>

<script>

import SessionTable from "~/components/onboarding/SessionTable";

export default {
  components: {
    SessionTable
  },

  mounted(){

  },
  computed:{
    sessions:function(){
      const username = this.$store.getters['user/USER'].username
      return this.$store.getters['onboarding/ASSIGNED'](username)
    },
  },
  data(){
    return {
    };
  }
}
</script>
