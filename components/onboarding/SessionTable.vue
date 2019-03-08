<template>

  <div>
    <v-client-table :data="sessions" :columns="columns" :options="options">
      <span slot="user" slot-scope="props">
        {{ getUser(props.row.user.username) }}
      </span>
      <span slot="buddy" slot-scope="props">
        {{ getUser(props.row.buddy.username) }}
      </span>
      <span slot="completed" slot-scope="props">
        {{ parseDateTime(props.row.completed) }}
      </span>
      <span slot="id" slot-scope="props">
        <a target="_blank" :href="'/goals/view/'+props.row.id">View</a>&nbsp;|&nbsp;
        <a target="_blank" :href="'/goals/edit/'+props.row.id">Edit</a>
      </span>

    <!-- <div slot="child_row" slot-scope="props">
      <b>Description</b>
      <p>{{props.row.description}}</p>
      <b>Key Performance Indicators</b>
      <ul>
        <li v-for="kpi in props.row.kpiSet" :key="">
          <div class="columns">
            <div class="column is-two-fifth">
              {{ getKpiText( kpi )}}
            </div>
              <div class="column is-two-fifth">
                <progress :class="progressColor(kpi.progress)" :value="kpi.progress" max="1" :title="getPercentage(kpi.progress)">
                  {{ getPercentage(kpi.progress) }}
                </progress>
              </div>
                <div class="column is-one-fifth">
                <a class="button is-info is-small" v-if="props.row.owner">Post update</a>
                </div>
          </div>
        </li>
      </ul>
    </div> -->
    </v-client-table>
  </div>

</template>


<script>
import moment from 'moment';

export default {
  props: ["sessions"],
  data(){
    return {
      columns: ["kit", "user", "buddy", "completed", "id"],
      options: {
        headings: {
          kit: "Kit",
          user: "Assigned",
          buddy: "Buddy",
          completedgetUser: "Completed",
          id: ""
        },
        sortable: ["kit","user","buddy","completed"],
        filterable: ["kit", "user", "buddy",]
      }
    };
  },
  methods:{
    parseDateTime(date){
      if(date){
        return moment(date).format('lll')
      }else{
        return ''
      }
    },
    getUser(username){
      const user = this.$store.getters['organisation/USER'](username)
      if(user){
        return user.firstName + ' ' + user.lastName
      }else{
        console.log(username,user)
      }
    }
  }
}
</script>
