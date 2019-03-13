<template>

  <div class="card" id="culture">
    <header class="card-header">
      <p class="card-header-title">
          Cultural overview
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class = "columns over-icons">
            <div class="column"> 
                <div class="circle c100 p74 green">
                    <span>74</span>
                    <div class="slice">
                        <div class="bar"></div>
                        <div class="fill"></div>
                    </div>
                </div>
            </div>
            <div class="column"> 
                <div class="circle c100 p61 green">
                    <span>61%</span>
                    <div class="slice">
                        <div class="bar"></div>
                        <div class="fill"></div>
                    </div>
                </div>
            </div>
            <div class="column mood">
                <img class="image" src="/images/icons/satisfied.png" />
            </div>
        </div> 
        <div class = "columns over-text">
            <div class="column"> 
                <p class="title">Cultural EQ Score</p>
            </div>
            <div class="column"> 
                <p class="title">Engagement Level</p>
            </div>
            <div class="column">
                <p class="title">Satisfied</p>
            </div>
        </div>      
      </div>
    </div>
  </div>

</template>

<style lang="scss">
    #culture{
        .title{
            margin-top: 1rem;
            opacity: 0.7;
            font-size: 1em;
            text-align: center;
        }
        .over-icons{
            margin-bottom:0 !important;
        }
        .over-text{
            div{
                padding-top: 0 !important;
            }
        }
        .circle{
            float: initial;
            margin: auto;
        }
        .mood{
            display: flex;
            align-content: center;
            .image{
                margin: auto;
                width: 60px;
                height: 60px;
            }
        }
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
