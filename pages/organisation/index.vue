<template>
  <section id="organisation">
    
    <section class="hero" v-if="organisation.name">
      <div class="hero-body">
        <div class="container">
          <h3 class="title is-3">
            {{organisation.name}}
          </h3>
          <h6 class="subtitle is-6">
            This section allows you to manage your organisation details, levels, teams, positions and users
          </h6>
          <div class="tabs is-centered is-boxed">
            <ul>
              <li v-for="menu in childNav" :key="menu.target" v-bind:class="menuActive(menu.target)">
                <nuxt-link v-bind:to="menu.target">
                  {{menu.name}}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <section v-if="organisation.name">
      <NuxtChild :organisation="organisation" />
    </section>

  </section>
</template>

<style lang="scss">

  .hero{
    background: #f8f8f8;
    color:#011638;
    padding: 0.5rem 0 !important;
    margin-bottom: 2rem;

    .hero-body{
      padding: 0;
      h3{
        margin: 1rem 0 !important;
      }
      h6{
        margin: 2rem 0 !important;
      }
    }
  }
  
</style>

<script>
import UnderDevelopment from "~/components/general/UnderDevelopment";

import gql from "graphql-tag";
import { error } from "util";

const orgQuery = gql`
  query{
    user(email:"mariaharvey@hotmail.com"){
      firstName,
      organisationSet{
        name,
        website,
        branches,
        cfFrequency,
        levelSet{
          label,
          number,
          teamSet{
            id
            name,
            parent{
              id
            },
            active,
            positionSet{
              id,
              title,
              userpositionSet{
                user{
                  id,
                  firstName,
                  lastName,
                  email
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default {
  layout: "default",
  components: {
    UnderDevelopment
  },
  computed:{
    organisation:function() {
      
      if(typeof this.$store.state.user.user.username == 'undefined'){
        return {};
      }

      if(typeof this.$store.state.organisation.organisation.name == 'undefined'){
      this.$toast.show('Loading organisation info...')
      // but you could also call queries like this:
        return this.$apollo.query({ query: orgQuery, variables: {email:this.$store.state.user.user.email} })
        .then(({ data }) => {
          //save organisation details
          const organisation = data.user.organisationSet[0]
          this.$store.commit('organisation/setOrg', {
            name: organisation.name,
            website:organisation.website,
            branches:organisation.branches,
            cfFrequency:organisation.cfFrequency,
            created:organisation.created,
            levelSet:organisation.levelSet,
          })
          this.$toast.success('Organisation info loaded')
          return organisation;
        })
        .catch(err => {
          console.log(err)
          this.$toast.error('An error occured, please try again.')
        });
      }else{
        return this.$store.state.organisation.organisation;
      }
    }
  },
  data() {
    return {
      childNav:[
        {name:"General",target:"/organisation",active:true},
        {name:"Teams",target:"/organisation/teams"},
        {name:"Positions",target:"/organisation/positions"},
        {name:"Members",target:"/organisation/members"},
      ]
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
