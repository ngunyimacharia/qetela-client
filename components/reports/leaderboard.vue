<template>
  <div class="leaderboard">
    <div class="title"><h3><strong>Organisation Leaderboard:</strong> Top Performers</h3></div>
    <div class = "columns has-text-centered" v-for="(user,index) in users" :key="user.id" >
      <div class="column"><img :src = "user.ppic" class="image is-32x32 is-rounded" /> </div>
      <div class="column is-half has-text-left"><span class="no">{{index+1}}.</span> {{user.firstName}} {{user.lastName}}<div class="border" v-bind:style="getBorder(index)"></div></div>
      <div class="column"> <span class="score">{{Math.floor(Math.random()*100)+10}}</span> </div>
    </div>
  </div>



</template>

<style lang="scss" scoped>
  .leaderboard{
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.1),0 6px 24px 0 rgba(0,0,0,.04);
    background: #30343f;
    color: #fff;
    font-weight: 500;
    padding: 0 0;

    .title{
      text-align: center;
      border-bottom: 1px solid white;
      margin-bottom: 1rem;

      h3{
        color:#fff;
        font-size: 0.5em;
        padding: 0.7rem 0 0;
        font-weight: normal;
        strong{
            font-weight: 600;
        }
      }
    }
    
    .columns{
      padding: 0;
      margin: 0;

      .column{
        margin:0;
        padding: 0;
        .no{
          color:#ff1200;
          text-shadow: 1px 1px 1px rgba(255,18,0,0.2);
        }
        .border{
          margin: 0.25rem 0 1rem;
          border-bottom:2px solid #ff1200;
        }

        .image{
          margin: auto;
        }
        .score{
          background:  	#DAA51C;
          padding: 0.5rem;
          border-radius: 20px;
          font-size: 0.8em;
          color: 	#FFF;
          font-weight: 900;
        }
      }
    }

  }
</style>

<script>
export default {

  mounted(){
    const users = this.$store.getters['organisation/USERS']
    for(let i=0 ; i <=4 ; i++){
      let rand = Math.floor(Math.random()*users.length)
      this.users.push(users[rand])
    }
  },
  data() {
    return {
      users:[]
    };
  },
  methods:{
    getBorder(i){
      let len = (20*(5-i)) + '%'
      return {'width':len};
    }
  }
};
</script>
