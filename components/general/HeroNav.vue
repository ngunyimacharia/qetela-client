<template>

    <div class="hero">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-one-fifth" v-if="image">
            <img :src="image" class="image is-128x128"/>
          </div>
          <div class="column is-four-fifths">
            <h3 class="title is-4">
              {{title}}
            </h3>
            <p class="subtitle is-6">
              {{description}}
            </p>
          <div class="tabs">
            <ul>
              <li v-for="menu in heroNavItems" :key="menu.target" v-bind:class="menuActive(menu.target)">
                <nuxt-link v-bind:to="menu.target">
                  {{menu.name}}
                </nuxt-link>
              </li>
            </ul>
          </div>
            </div>
        </div>
      </div>
    </div>

</template>

<style lang="scss" scoped>


.hero{
  background: #fff;
  color:#011638;
  padding: 0.5rem 0 !important;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,.1),0 6px 24px 0 rgba(0,0,0,.04);

  .hero-body{
    padding: 0;

    .image{
      margin: 1rem auto 0;
    }

    h3{
      margin: 0.5rem 0 3rem !important;
    }
    h6{
      margin: 1rem 0 !important;
    }
  }

  .tabs{
    font-weight: 600;

    ul{
      margin: 0;

      li{
        margin-bottom: 1rem;

        a{
          border-bottom-color: white;
        }
        
      }
      
      li.is-active{
        a {
        border-bottom-color: #3273dc;
        color: #3273dc;
      }
      }
    }
  }
}

</style>

<script>
export default {
  props: ['title','description','heroNavItems','image'],
  data() {
    return {
      //
    };
  },
  methods:{
    menuActive(target){
      const path = $nuxt.$route.path
      if(path === target){
        return 'is-active'
      }
    },
  }
};
</script>
