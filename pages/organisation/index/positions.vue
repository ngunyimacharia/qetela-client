<template>
  <section id="teams" class="container">
    <div class="leveld" v-for="level in levels" :key="level.id">
      <h4 class="title is-4 has-text-centered">{{level.name}}</h4>
      <v-client-table :data="level.positions" :columns="columns" :options="options">
        <span slot="id" slot-scope="props">
          <a target="_blank" :href="'/organisation/position/view/'+props.row.id">View</a>&nbsp;|&nbsp;
          <a target="_blank" :href="'/organisation/position/edit/'+props.row.id">Edit</a>
        </span>
      </v-client-table>
    </div>
  </section>
</template>

<script>
export default {
  props: ["organisation"],
  data() {
    return {
      levels: [],
      columns: ["title", "team", "id"],
      options: {
        headings: {
          name: "Name",
          parent: "Team",
          id: ""
        },
        sortable: ["title", "team"],
        filterable: ["title", "team"]
      }
    };
  },
  mounted() {
    const levels = [];
    //arrange all teams in levels
    for (const levelOr of this.organisation.levelSet) {
      let level = { name: levelOr.label, positions: [] };
      for (const teamOr of levelOr.teamSet) {
        for (const positionOr of teamOr.positionSet) {
          let position = JSON.parse(JSON.stringify(positionOr));
          position.team = teamOr.name
          level.positions.push(position);
        }
      }
      levels.push(level);
    }
    this.levels = levels;
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