<template>
  <section class="ob-header">
    <div class="">
      <h1 class="main-title">Welcome, let's get you settled in!</h1>
      <div class="columns">

        <div class="column"></div>

        <div class="column is-one-fifth">
          <!-- Assigned -->
          <div class="card">
            <header class="card-header">
              <p class="card-header-title has-text-centered">
                Assigned
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <p class="has-text-centered ppic">
                  <img class="image is-64x64" :src="user.ppic">
                </p>
                <p class="has-text-centered">
                  <nuxt-link :to="'/up/'+user.username">{{user.firstName}} {{user.lastName}}</nuxt-link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-one-fifth">
          <!-- Buddy -->
          <div class="card">
            <header class="card-header">
              <p class="card-header-title has-text-centered">
                Buddy
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <p class="has-text-centered ppic">
                  <img class="image is-64x64" :src="buddy.ppic">
                </p>
                <p class="has-text-centered">
                  <nuxt-link :to="'/up/'+buddy.username">{{buddy.firstName}} {{buddy.lastName}}</nuxt-link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="column"></div>

      </div>
    </div>

  </section>
</template>

<style lang="scss">
.ob-header{
  padding:0 0 2rem;
  background: white;
  margin-bottom: 3rem;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,.1),0 6px 24px 0 rgba(0,0,0,.04);

  .main-title{
    width: 100%;
    text-align: center;
    background: #fff;
    color: #30343f;
    font-size: 1.5em;
    padding: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.1),0 6px 24px 0 rgba(0,0,0,.04);
  }

  .card-header-title{
    text-align: center !important;
    display: block;
  }

  .ppic{
    img{
      margin: auto;
    }

  }

  .details{
    .title{
      font-size: 1.5em;
    }
    p{
      font-size: 1em;
      i{
        padding-right: 0.5rem;
      }
    }
    .button{
      margin: 0 0.4rem 0 0;
      font-size: 0.9em;
      i{
        padding: 0 1rem;
      }
    }
  }
}
</style>

<script>

export default {
  components: {
    //
  },
  props: ["user","buddy"],
  mounted:function(){

  },
  computed:{
      //
  },
  data() {
    return {
      //
    }
  },
  methods:{

  }
}
</script>
