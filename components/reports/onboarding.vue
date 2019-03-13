<template>

  <div class="card" id="user-goals">
    <header class="card-header">
      <p class="card-header-title">
          Employee onboarding
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class = "columns">
            <div class="column"> 
                <div class="circle c100 p100">
                    <span>87</span>
                    <div class="slice">
                        <div class="bar"></div>
                        <div class="fill"></div>
                    </div>
                </div>
                <p class="title">New Employees</p>
            </div>
            <div class="column"> 
                <div class="circle c100 p61 orange">
                    <span>36%</span>
                    <div class="slice">
                        <div class="bar"></div>
                        <div class="fill"></div>
                    </div>
                </div>
                <p class="title">Overdue completions</p>
            </div>
        </div>     
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
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
//   props: ["user"],
//   computed:{
//     goals:function(){
//       const username = this.user.username
//       return this.$store.getters['goals/PERSONAL_GOALS'](username)
//     },
//   },
//   data(){
//     return {};
//   },
//   methods:{

//     getPercentage(val){
//       return val*100 + "%"
//     },
//     progressColor(progress){
//       if(progress < 0.25){
//         return 'progress is-danger is-small'
//       }else if(progress < 0.5){
//         return 'progress is-warning is-small'
//       }else if(progress < 0.75){
//         return 'progress is-success is-small'
//       }else if(progress < 1){
//         return 'progress is-primary is-small'
//       }else{
//         return 'progress is-link is-small'
//       }
//     },
//   }
}
</script>
