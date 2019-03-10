<template>

  <div>
    <v-client-table :data="goals" :columns="columns" :options="options">
      <span slot="start" slot-scope="props">
        {{ parseDate(props.row.start) }}
      </span>
      <span slot="end" slot-scope="props">
        {{ parseDate(props.row.end) }}
      </span>
      <span slot="published" slot-scope="props">
        {{ parseDateTime(props.row.published) }}
      </span>
      <span slot="progress" slot-scope="props">
        <progress :class="progressColor(props.row.progress)" :value="props.row.progress" max="1" :title="getPercentage(props.row.progress)">
          {{ getPercentage(props.row.progress) }}
        </progress>
      </span>
      <span slot="id" slot-scope="props">
        <nuxt-link :to=" '/goals/'+props.row.id + '/view/' ">View</nuxt-link>
        <!-- &nbsp;|&nbsp;
        <a href="#">Edit</a> -->
      </span>

    <div slot="child_row" slot-scope="props">
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
    </div>
    </v-client-table>
  </div>

</template>


<script>
import moment from 'moment';

export default {
  props: ["goals"],
  data(){
    return {
      columns: ["title", "start", "end", "progress", "id"],
      options: {
        headings: {
          title: "Title",
          start: "Start",
          end: "End",
          progress: "Progress",
          id: ""
        },
        sortable: ["title","start","end","progress"],
        filterable: ["title", "start", "end", "completed"]
      }
    };
  },
  methods:{
    parseDate(date){
      return moment(date).format('ll')
    },
    parseDateTime(date){
      return moment(date).format('lll')
    },
    getPercentage(val){
      return val*100 + "%"
    },
    progressColor(progress){
      if(progress < 0.25){
        return 'progress is-danger'
      }else if(progress < 0.5){
        return 'progress is-warning'
      }else if(progress < 0.75){
        return 'progress is-success'
      }else if(progress < 1){
        return 'progress is-primary'
      }else{
        return 'progress is-link'
      }
    },
    getKpiText(kpi){

      /*
        Graphql is modifying the comparison operators
        "<" becomes "__2"
        ">" becomes "_"
        "=" becomes "__1"
      */
      let output = '';
      switch(kpi.change){
        case '__2':
          // less than
          output += 'Reduce ' + kpi.metric + ' by ' + kpi.target
          break
        case '_':
          output += 'Reduce ' + kpi.metric + ' by ' + kpi.target
          break
        default:
          output += 'Have ' + kpi.metric + ' ' + kpi.target
          break

      }
      return output
    }
  }
}
</script>
