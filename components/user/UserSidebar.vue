<template>
  <section id="user-sidebar">

    <!-- Tabs -->
    <div class="tabs is-centered is-fullwidth">
      <ul>
        <li v-on:click="changeTab('kudos')" v-bind:class="isActive('kudos')">
          <a>
            <span class="icon is-small"><i class="fas fa-thumbs-up"></i></span>
            <p>Kudos</p>
          </a>
        </li>
        <li v-on:click="changeTab('recommendations')" v-bind:class="isActive('recommendations')">
          <a>
            <span class="icon is-small"><i class="fas fa-comment-alt"></i></span>
            <p>Recommendations</p>
          </a>
        </li>
      </ul>
    </div>


    <!-- Kudos section -->
    <div class="data-list" id="kudo-list"  v-if="isActive('kudos')">
      <div class="none" v-if="!user.kudoSet.length">
        No kudos have been given
      </div>
      <div class="item" v-for="kudo in user.kudoSet">
        <div class="columns">
          <div class="column">
            <div class="icon"><i class="fas fa-thumbs-up"></i></div>
          </div>
          <div class='column is-four-fifths'>
            <p class="title">{{kudo.title}}</p>
            <p class="description">{{kudo.description}}</p>
            <p class="giver">Given by: <a>{{ getUser(kudo.sender.username) }}</a></p>
          </div>
        </div>
      </div>
    </div>


    <!-- Recommendation section -->
    <div class="data-list" id="recommendation-list" v-if="isActive('recommendations')">
      <div class="none" v-if="!user.recommendationSet.length">
        No recommendations have been given
      </div>
      <div class="item" v-for="recommendation in user.recommendationSet">
        <div class="columns">
          <div class="column">
            <div class="icon"><i class="fas fa-comment-alt"></i></div>
          </div>
          <div class='column is-four-fifths'>
            <p class="title">{{recommendation.title}}</p>
            <p class="description">{{recommendation.description}}</p>
            <p class="giver">Given by: <a>{{ getUser(recommendation.sender.username) }}</a></p>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>

<style lang="scss">
#user-sidebar{
  background-color: #F3F3F3;
  height: 100%;

  .tabs{
    background-color: #FAFAF8;
    margin-bottom: 0;

    ul{
      border-bottom: none;
      margin-top: 0;
      a{
        display: inline-block;
        text-align: center;
        border-bottom-color: transparent;
        p{
          display: block;
          text-align: center;
          width: 100%;
          padding: 0.2em;
          font-size: 0.8rem;
        }
      }
    }
  }

  .data-list{

    .item{
      border-bottom: 1px solid rgba(48, 52, 63, 0.1);
      padding: 1rem;
      color: #595959;
    }

    .title{
      font-size: 1.1em;
    }

    .description{
      font-size: 0.9em;
      line-height: 1.3rem;
    }

    .giver{
      font-size: 0.9em;
      line-height: 1.3rem;
      color: #adb5bd;
    }


    div.icon{
      display: -webkit-flexbox;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      text-align: center;
      height: 100%;

      i{
        background-color: white;
        font-size: 0.9em;
      // console.log(this.activeTab
        padding: 1rem;
        border-radius: 50px;
        margin-left: 1rem;
      }
    }
  }

}
</style>

<script>
export default {
  props: ["user"],
  computed:{
    //
  },
  data() {
    return {
      activeTab:'kudos'
    }
  },
  methods:{
    changeTab: function(tabName){
      this.activeTab = tabName
      this.$forceUpdate()
    },
    isActive:function(tabName){
      if(tabName == this.activeTab){
        return 'is-active'
      }
    },
    getUser(username){
      const user = this.$store.getters['organisation/USER'](username)
      if(user){
        return user.firstName + ' ' + user.lastName
      }
    }
  }
}
</script>
