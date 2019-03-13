<template>

  <div class="card" id="user-goals">
    <header class="card-header">
      <p class="card-header-title">
          All {{goals.length}} Company-wide goals
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class = "columns">
            <div class="column is-one-half"> 
                <chartjs-doughnut
                    v-bind:bind="true"
                    v-bind:datasets="datasets"
                    v-bind:labels="dohnutLabels"
                    v-bind:option="option"
                />
                <p class="title">The company goals are <span class="has-text-danger">behind</span></p>
            </div>
            <div class="column"> 
                <chartjs-line
                v-bind:backgroundcolor="bgColor"
                v-bind:beginzero="beginZero"
                v-bind:bind="true"
                v-bind:bordercolor="borderColor"
                v-bind:data="data[radio]"
                v-bind:datalabel="dataLabel"
                v-bind:labels="labels[radio]"
                />
                <p class="title">Goals progress</p>
            </div>
        </div>     
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
    .columns{
        overflow: hidden;
    }
    .circle{
        float: initial;
        margin: 0 auto 1rem;
    }
    .title{
        margin-top: 1rem;
        opacity: 0.7;
        font-size: 1em;
        text-align: center;
    }
    .subtitle{
        margin-top: 0.2rem !important;
        font-size: 0.9em;
        opacity: 0.5;
        text-align: center;
    }
</style>

<script>

export default {
  mounted(){
      
  },
  data() {
    return {
        // Doughnut chart
      dohnutLabels: ["In Progress", "Complete", "Expired"],
      option: {cutoutPercentage:80,},
    //   End of doughnut chart
    // Start of line graph
          beginZero: false,
      bgColor: "#dd9d22",
      borderColor: "#dd9d22",
      data: {
        percentage: [0, 10, 40, 50, 80],
        week: [12, 14, 16, 18, 11, 13, 15]
      },
      dataLabel: "Progress",
      labels: {
        percentage: [8, 10, 12, 14, 16],
        week: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      },
      radio: "percentage"
    };
    // End of line graph
  },
  computed:{
    //   Doughnut chart
     datasets:function(){
        return[
            {
            data: [
                (this.goals.length*0.4).toFixed(0),
                (this.goals.length*0.2).toFixed(0),
                (this.goals.length*0.4).toFixed(0), 
            ],
            backgroundColor: ["#4db53c", "#307bbb", "#ff1200"],
            hoverBackgroundColor: ["#308223", "#20537e", "#b30d00"]
            }
        ]
    },
    // End of doughnut chart
    goals:function(){
      return this.$store.getters['goals/ORGANISATION_GOALS']
    },
  },
  methods:{
  }
}
</script>

