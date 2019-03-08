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
      return this.$store.getters['onboarding/SESSIONS']
    },
  },
  data(){
    return {
    };
  }
}
</script>
