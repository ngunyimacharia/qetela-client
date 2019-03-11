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
        <nuxt-link :to=" '/onboarding/'+props.row.id + '/view/' ">View</nuxt-link>
        <!-- &nbsp;|&nbsp; -->
        <!-- <a target="_blank" :href="'/goals/edit/'+props.row.id">Edit</a> -->
      </span>
    </v-client-table>
  </div>

</template>


<script>
import moment from 'moment';

export default {
  props: ["sessions"],
  method(){
    console.log(this.sessions)
  },
  data(){
    return {
      columns: ["kitTitle", "user", "buddy", "completed", "id"],
      options: {
        headings: {
          kitTitle: "Kit",
          user: "Assigned",
          buddy: "Buddy",
          completedgetUser: "Completed",
          id: ""
        },
        sortable: ["kitTitle","user","buddy","completed"],
        filterable: ["kitTitle", "user", "buddy",]
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
        return ''
      }
    }
  }
}
</script>
