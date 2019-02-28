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

  .VueTables {
      border: 2px solid #f5f5f5;
      padding: 1.5rem;

      .VueTables__search-field label{
        display: none;
      }
      .row {
        display: block;
        clear: both;
        overflow: hidden;
      }

      .pull-left{
        float: left;
        margin-bottom: 1rem;
      }

      .pull-right{
        float: right;
      }

      input{
        border: 2px solid #f1f1f1;
        background-color: #fafafa;
        height: 30px;
        font-size: 1em;
        margin-left: 0.4rem;
        padding: 0 0.4rem;
      }

      select{
        height: 30px;
        padding:3px 10px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

    .VuePagination,.VuePagination__count{
      margin: 1rem;
    }
    .VuePagination__count{
      text-align: center
    }

    .table-responsive {
      overflow-x:auto;
      table{
        width: 100%;
        th{
          font-weight: 700;
          cursor: pointer;
        }
          td,th{
            border: 1px solid #ddd;
          }
          td:nth-last-child(1){
            text-align: center;
          }
      }
    }
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