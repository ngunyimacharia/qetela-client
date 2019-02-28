<template>
  <section id="teams" class="container">
    <div class="leveld" v-for="level in levels" :key="level.id">
      <h4 class="title is-4 has-text-centered">{{level.name}}</h4>
      <v-client-table :data="level.members" :columns="columns" :options="options">
        <span slot="id" slot-scope="props">
          <a target="_blank" :href="'/organisation/team'+props.row.id">View</a>&nbsp;|&nbsp;
          <a target="_blank" :href="'/organisation/team'+props.row.id">Edit</a>
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
      columns: ["firstName", "lastName", "email", "position", "team", "id"],
      options: {
        headings: {
          firstName: "First Name",
          lastName: "Last Name",
          email: "Email",
          position: "Position",
          team: "Team",
          id: ""
        },
        sortable: ["firstName", "lastName", "email", "position", "team"],
        filterable: ["firstName", "lastName", "email", "position", "team"]
      }
    };
  },
  mounted() {
    const levels = [];
    //arrange all teams in levels
    for (const levelOr of this.organisation.levelSet) {
      let level = { name: levelOr.label, members: [] };
      for (const teamOr of levelOr.teamSet) {
        for (const positionOr of teamOr.positionSet) {
            for(const up of positionOr.userpositionSet){
                let user = JSON.parse(JSON.stringify(up.user));
                user.position = positionOr.title
                user.team = teamOr.name
                level.members.push(user)
            }
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