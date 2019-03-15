<template>
    <section class="user-badges">
        <div class="top">
            <h5 class="title"><span class="emphasis">Badges</span>(14)</h5>
            <a href="#">See all</a>
        </div>
        <div class="badge-row"> 
          <badge v-for="badge in badges" :key="badge.title" :badge="badge"/>
        </div>
    </section>
</template>

<style lang="scss" scoped>

    .user-badges{
        height: 100%;
        .top{
            margin: 0.2rem 0;
            display: flex;
            align-content: space-between;
            justify-content: space-between;
                margin: 0;
            .title{
                font-weight: 400;
                display: inline;
                opacity: 0.7;
                font-size: 0.9em;
                margin: 0;
                .emphasis{
                    font-weight: 600;
                }
            }
            a{
                color:#363636;
                opacity: 0.7;
                font-size: 0.9em;
                margin: 0;
            }
        }

        .badge-row{
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            height: 90%;
            align-content: center;
        }
    }

</style>

<script>

import Badge from "~/components/general/Badge";

export default {
  components: {
    Badge
  },
  props: [],
  computed:{
      //
  },
  data() {
    return {
        badges:[
            // {title:'Sales Hero'},
            // {title:"Early Rise"},
            {title:"Green Initiative"},
            // {title:"Buddy Hero"},
            {title:"Culture Champion"},
            {title:"Happy Helper"},
            // {title:"Proactive Hero"},
            // {title:"Onboarding Newbie"}
        ]
    }
  },
  methods:{
  }
}

</script>
