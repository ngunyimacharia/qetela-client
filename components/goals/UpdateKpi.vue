<template>
  <div v-bind:class="isActive()" v-if="kpi">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title title is-5">Awesome, KPI Update!</p>
        <button class="delete" aria-label="close" v-on:click="toggleMe()"></button>
      </header>
      <section class="modal-card-body">
        <div class = "columns">
          <div class="column has-text-centered">
            <img src="~/static/images/icons/rising.png">
          </div>
          <div class="column is-two-thirds">
            <h5 class="title is-5">{{getKpiText()}}</h5>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Target:</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input is-static" type="text" :value="kpi.target" readonly>
                  </p>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Current:</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input is-static" type="text" :value="kpi.current" readonly>
                  </p>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Update:</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="number" name="update" min="0" :max="kpi.target - kpi.current" v-model="update" placeholder="Enter value of update"/>
                  </p>
                    <p class="help">
                      <span>Min: 0</span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>Max: {{kpi.target - kpi.current}}</span>
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button" v-on:click='submit()'>Send Update</button>
      </footer>
    </div>
  </div>

</template>

<style lang="scss">
.modal{
  .modal-card-head{
    background-color: #011638;
    padding: 1rem;

    .modal-card-title{
      color:white;
      margin: 0;
    }
  }

  .modal-card-body{

    input::-webkit-input-placeholder,
    input:-moz-placeholder,
    input::-moz-placeholder,
    input:-ms-input-placeholder,
    input::-ms-input-placeholder,
    input::placeholder { /* Most modern browsers support this now. */
      color: #333;
    }

  }

  .modal-card-foot{
    background-color: white;
    padding: 1rem;

    button{
      background-color: #011638;
      color:white;
      margin: 0 auto;
    }
  }
}
</style>

<script>
import moment from 'moment';

export default {
  props: ["kpi","goal","active"],
  computed:{
  },
  data() {
    return {
      update:"",
    }
  },
  methods:{
    isActive:function(){
      if(this.active){
        return 'modal is-active'
      }else{
        return 'modal'
      }
    },
    toggleMe:function(){
      this.$parent.$emit("close-modal",'update')
      this.$forceUpdate()
    },
    getKpiText(){

      /*
        Graphql is modifying the comparison operators
        "<" becomes "__2"
        ">" becomes "_"
        "=" becomes "__1"
      */
      let output = '';
      switch(this.kpi.change){
        case '__2':
          // less than
          output += 'Reduce ' + this.kpi.metric + ' by ' + this.kpi.target
          break
        case '_':
          output += 'Reduce ' + this.kpi.metric + ' by ' + this.kpi.target
          break
        default:
          output += 'Have ' + this.kpi.metric + ' of ' + this.kpi.target
          break

      }
      return output
    },
    submit:function(){
      if(!this.update.length || this.update < 1 || this.update >  (this.kpi.target-this.kpi.current) ){
        return
      }

      this.$store.dispatch(
        'goals/SEND_UPDATE',
        {
          context:this,
          goalId:this.goal.id,
          kpiId:this.kpi.id,
          update:{
            progress:parseFloat(this.update),
            created:moment().format(),
            updated:moment().format()
          }
        }
      )
      this.update = ''
      this.$parent.$emit("close-modal",'update')
      this.$forceUpdate()
    }
  }
}
</script>
