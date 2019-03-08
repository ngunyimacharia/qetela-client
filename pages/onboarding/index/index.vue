<template>
  <section class="container">
    <div class="div-table">
      <div v-for="kit in kits">
        <div class="columns">
          <div class="column is-four-fifths">{{kit.title}}</div>
          <div class="column action">
            <a>View <i class="fas fa-chevron-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .div-table > div{
  	border-bottom: 1px solid transparent;
  	border-top: 1px solid transparent;
    padding: 0.5rem;
    font-size: 0.9em;

    .action{
      font-size: 0.9em;
      display: none;
      a{
        color: #4a4a4a;
      }
    }
  }
  .div-table > div:hover {
    border-color: #dbdfe1;

    .action{
      display: initial;
    }
  }

</style>

<script>

export default {

  mounted(){

  },
  computed:{
    kits:function(){
      return this.$store.getters['onboarding/KITS']
    },
  },
  data(){
    return {
    };
  }
}
</script>
