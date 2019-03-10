<template>
  <div v-bind:class="isActive()">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title title is-5">Send a kudos to {{receiver.firstName}} {{receiver.lastName}}!</p>
        <button class="delete" aria-label="close" v-on:click="toggleMe()"></button>
      </header>
      <section class="modal-card-body">
        <div class = "columns">
          <div class="column has-text-centered">
            <img src="~/static/images/icons/guarantee.png">
          </div>
          <div class="column is-two-thirds">
            <div class="field">
              <div class="control">
                <input class="input" v-model="title" type="text" placeholder="Kudos Title">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <textarea class="textarea" v-model="description" type="text" placeholder="A message about this kudos" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button" v-on:click='submit()'>Send Kudos</button>
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


export default {
  props: ["receiver","active"],
  computed:{
  },
  data() {
    return {
      title:"",
      description:""
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
      this.$parent.$emit("close-modal",'kudos')
      this.$forceUpdate()
    },
    submit:function(){
      this.$store.dispatch(
        'organisation/SEND_KUDOS',
        {
          context:this,
          username:this.receiver.username,
          kudos:{
            title:this.title,
            description:this.description,
            sender:{
              username: this.$store.getters['user/USER'].username
            }
          }
        }
      )
      this.title = ''
      this.description = ''
      this.$parent.$emit("close-modal",'kudos')
      this.$forceUpdate()
    }
  }
}
</script>
