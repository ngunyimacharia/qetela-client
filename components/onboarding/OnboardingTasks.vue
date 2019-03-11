<template>
  <section class="tasks-cont container box">
    <h1 class="title is-5 has-text-centered">
      <i class="fas fa-tasks"></i>&nbsp;&nbsp;
      Tasks
    </h1>
    <div class="tasks">
      <div v-for="task in kit.taskSet">
        <div class="columns task" :class="taskStatus(task.id)">
          <div class="column">
            <p class="name">{{task.name}}</p>
            <p class="description" v-if="!isCompleted(task.id)">{{task.description}}</p>
          </div>
          <div class="column is-one-fifth has-text-centered actions">
            <div v-if="!isCompleted(task.id)">
              <img class="image is-32x32 has-text-centered" src="~/static/images/icons/angry.png">
              <a class="button is-danger" v-on:click="markComplete(task.id)">Incomplete!</a>
            </div>
            <div v-if="isCompleted(task.id)">
              <img class="image is-32x32 has-text-centered" src="~/static/images/icons/happy.png">
              <a class="button is-success" v-on:click="markIncomplete(task.id)">Completed!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.tasks-cont{
  // background: #EDECEE !important;

  .pending{
    background: #FFF3FF;
  }

  .complete{
    background: #CEFFE9;
  }

  .task{
    margin: 1rem;

    p{
      margin: 0;
    }
    p.name{
      // background: #;
      color:#38aecc;
      padding: 0.5rem;
      font-weight: bolder;
    }
    p.description{
      padding: 0.5rem;
    }

    .actions > div{
      display: -webkit-flexbox;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      text-align: center;
      justify-content: space-between;
      height: 100%;

      .button{
        display: inline;
        font-size: 0.9em;
      }
    }
  }
}
</style>

<script>

export default {

  props:["session","kit"],
  computed:{

  },
  data() {
    return {
      // 
    }
  },
  methods:{
    isCompleted(taskId){
      for(let progress of this.session.progressSet){
        if(progress.task.id == taskId){
          return true
        }
      }
      return false
    },
    markComplete(taskId){
    console.log("Start")
      this.$store.dispatch(
        'onboarding/TASK_COMPLETE',
        {
          context:this,
          sessionId:this.session.id,
          taskId:taskId
        }
      )
    },
    markIncomplete(taskId){
    console.log("Start")
      this.$store.dispatch(
        'onboarding/TASK_INCOMPLETE',
        {
          context:this,
          sessionId:this.session.id,
          taskId:taskId
        }
      )
    },
    taskStatus(taskId){
      for(let progress of this.session.progressSet){
        if(progress.task.id == taskId){
          return 'complete'
        }
      }
      return 'pending'
    }
  }
}
</script>
