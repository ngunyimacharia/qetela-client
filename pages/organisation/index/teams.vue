<template>
  <section id="teams" class="container">
    <div class="leveld" v-for="level in levels" :key="level.id">
      <h4 class="title is-4 has-text-centered">{{level.name}}</h4>
      <v-client-table :data="level.teams" :columns="columns" :options="options">
        <span slot="id" slot-scope="props">
          <a target="_blank" :href="'/organisation/team/view/'+props.row.id">View</a>&nbsp;|&nbsp;
          <a target="_blank" :href="'/organisation/team/edit/'+props.row.id">Edit</a>
        </span>

      </v-client-table>
    </div>
  </section>
</template>

<style lang="scss">
#teams {
  .leveld {
    margin: 2rem 0;
  }
}
</style>

<script>
export default {
  props: ["organisation"],
  data() {
    return {
      levels: [],
      columns:['name','parent','active','id'],
      options:{
        headings:{
          name:"Name",
          parent:"Parent",
          active:"Active",
          id:""
        },
        sortable: ['name', 'parent','active'],
        filterable: ['name', 'parent',]
      }
    };
  },
  mounted() {
    const levels = []
    const teams = []
    //arrange all teams in levels
    for(let levelOr of this.organisation.levelSet){
      const level = {name:levelOr.label,teams:[]}
      for(let teamOr of levelOr.teamSet){
        const team = JSON.parse(JSON.stringify(teamOr));
        if(team.active){
          team.active = "Active"
        }else{
          team.active = ""
        }
        teams[team.id] = team
        level.teams.push(team);
      }
      levels.push(level)
    }
    //set all parents
    for(const level of levels){
      for(const [ind,team] of level.teams.entries()){
        if(team.parent){
          level.teams[ind].parent = teams[team.parent.id].name
        }
      }
    }
    this.levels = levels
  },
  methods: {
    getParent: function(pTeam) {
      for (let team of this.teams) {
        if (team.id === pTeam.id) {
          return team.name;
        }
      }
    }
  }
};
</script>
