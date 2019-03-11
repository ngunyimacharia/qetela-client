<template>
  <section id="sidebar">

    <div class="card pending" v-if="!session.completed">
      <header class="card-header">
        <p class="card-header-title">
          Reward
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <img class="image is-64x64" src="~/static/images/icons/medal.png" />
          <h3 class="title is-5">Unlock goal setting session</h3>
        </div>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item has-text-danger">
          Pending completion
        </p>
      </footer>
    </div>

    <div class="card completed" v-if="session.completed">
      <header class="card-header">
        <p class="card-header-title">
          Reward
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <img class="image is-64x64" src="~/static/images/icons/medal.png" />
          <h3 class="title is-5">Unlock goal setting session</h3>
        </div>
      </div>
      <footer class="card-footer">
        <nuxt-link to="/goals/personal" class="card-footer-item has-text-success">
          Proceed
        </nuxt-link>
      </footer>
    </div>

  </section>
</template>

<style lang="scss" scoped>
#sidebar{
  margin-right: 1rem;

  .pending{
    .card-header{
      background-color: #F29521;
    }
  }

  .completed{
    .card-header{
      background-color: #23d160;
    }
  }
  .card{
    .card-header{
      .card-header-title{
        text-align: center;
        display: block;
        text-transform: uppercase;
      }
    }
    .card-content{
      .title{
        font-weight: 600;
      }

      .image{
        margin: auto;
      }
    }
  }
}
</style>

<script>

export default {
  props:["session"],
  components: {
    //
  },
  mounted(){
    this.$forceUpdate()
    console.log(this.session)
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
