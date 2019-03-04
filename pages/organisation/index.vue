<template>
  <section id="organisation">

    <section v-if="organisation.name">
      <hero-nav
        :title="organisation.name"
        description="Manage your organisation details, levels, teams, positions and users"
        :heroNavItems="heroNavItems"
      >
      </hero-nav>
    </section>

    <section>
      <NuxtChild :organisation="organisation" />
    </section>

  </section>
</template>

<style lang="scss">

</style>

<script>
import HeroNav from "~/components/general/HeroNav";
import gql from "graphql-tag";
import { error } from "util";

const orgQuery = gql`
query($email: String!){
  user(email:$email){
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
    HeroNav
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
      heroNavItems:[
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
