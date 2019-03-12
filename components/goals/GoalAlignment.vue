<template>

  <div class="card" id="user-goals">
    <header class="card-header">
      <p class="card-header-title">
        Goal Alignment
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <p v-for="(goal,index) in hierarchy" :key="index" class="goal">
          <i class="fas fa-bullseye is-hidden-mobile"></i>
          <b>#{{index+1}}</b>
          <nuxt-link :to="'/goals/' + goal.id + '/view/'">{{goal.title}}</nuxt-link>
        </p>
      </div>
    </div>
  </div>

</template>

<style lang="scss">

  @media only screen and (min-width: 768px) {

      .goal {
        position: relative;
        margin-top: 25px;

        i{
          color:#b7b7b7;
          padding-right: 0.5rem;
        }
      }
      .goal:first-child {
        margin-top: 0;
      }
      .goal:before{
        position: absolute;
        border: 1px solid #b7b7b7;
        width: 0;
        height: 35px;
        display: block;
        content: '';
        z-index: 1;
        top: -30px;
        left: 5px;
      }
      .goal:first-child:before {
        display: none;
      }
  }
  
  .card{
    .content{
      font-size: 0.9em;
    }
  }
  
</style>

<script>
import moment from 'moment';

export default {
  props: ["goal"],
  mounted(){
    this.hierarchy =  this.$store.getters['goals/HIERARCHY']({context:this,goalId:this.goal.id})
  },
  computed:{

  },
  data(){
    return {
      hierarchy:[]
    };
  },
  methods:{

  }
}
</script>
