<template>
  <section class="sidebar">

    <!-- Head -->
    <div class="head">
      <div class="columns">
        <div class="column is-one-quarter">
          <figure class="image is-32x32">
            <img class="is-thumbnail" src="/images/icons/chat.png">
          </figure>
        </div>
        <div class="column">
          <h5 class="title is-5">
            Comments
          </h5>
        </div>
        <div class="column is-one-quarter">
        </div>
      </div>
    </div>

    <div class="chat">
      <div class="messages">
        <div class="chat-message" v-for="message in chat.messageSet" :key="message.id" :class="msgOwner(message.user.username)">
          <nuxt-link :to=" '/up/'+message.user.username " class='sender'>{{getUser(message.user.username)}}</nuxt-link>
          <p class="body">{{message.content}}</p>
        </div>
      </div>
      <div class="message-input">
        <textarea placeholder="Type a message..." v-model="message"></textarea>
        <div class="columns">
          <div class="column char-count">
            {{message.length}} chars
          </div>
          <div class="column has-text-right send" v-on:click = "submit()">
            <img class="is-thumbnail" src="/images/icons/right-arrow.svg">
          </div>
          <div class="column is-one-fifth is-hidden-mobile is-hidden-desktop "></div>
        </div>
      </div>
    </div>

  </section>
</template>

<style lang="scss">

@media only screen and (min-width: 768px) {

  .sidebar{
    position: fixed;
    // box-shadow: 0 2px 8px 0px rgba(0,0,0,.1),0 6px 24px 0 rgba(0,0,0,.04);
  }
}

.sidebar{
  background-color: #F3F3F3;
  height: 100vh;

  .head{
    background-color: #FAFAF8;
    padding: 0.5rem;
    box-shadow:  0 0 10px -5px rgba(0,0,0,.1),0 6px 24px 0 rgba(0,0,0,.04);
    border-bottom: 1px solid #d5dce0;
    .title{
      font-size: 1rem;
      margin: 0.5rem 0 0;
      text-align: center;
      font-weight: 600;
      opacity: 0.7;
      color: #363636;
    }
  }

  .chat{
    color: #30343f;

    .messages{
      padding: 1rem;
      overflow-y: scroll;
      height: 72vh;
      scroll-behavior: smooth;
      background: rgba(56, 174, 204,0.1);

      .owner{
        float: right !important;
        background: #f7fbfc !important;
      }

      .chat-message{
        float: left;
        margin: 0.5rem 0;
        padding: 0.5rem;
        position: relative;
        background: #fff;
        border-radius: .4em;
        width: 80%;
        font-size: 0.9em;
        box-shadow:  0 2px 8px 0 rgba(0,0,0,.1),0 6px 24px 0 rgba(0,0,0,.04);

        .sender{
          color:#38aecc;
          padding: 0.5rem;
        }

        .body{
          padding: 0.5rem;
        }

      }

    }

    .message-input{

      overflow: hidden;
      background-color: #fff;
      border: 1px solid #d5dce0;
      textarea{
        width: 100%;
        resize: none;
        height: 10vh;
        background-color: #FFF;
        color:#30343f;
        font-size: 0.9em;
        padding: 1rem;
        border:0;
      }

      .columns{
        padding: 0 0.5rem 0 1rem;
        font-size: 0.9em;
        .char-count{
          opacity: 0.4;
          padding-top:0.5rem;
        }
        .send{
          cursor: pointer;
          img{
            fill: #FAFAF8;
            width: 16px;
          }
        }
      }

    }
  }

}
</style>

<script>
export default {
  props: ["goal"],
  mounted(){
    this.chat =  this.$store.getters['chats/GOAL_CHAT'](this.goal.id)
    setTimeout(function(){
      //Scroll to bottom
      const objDiv = document.querySelector(".messages");
      objDiv.scrollTop = objDiv.scrollHeight;
    },10)
  },
  data() {
    return {
      chat:{messageSet:[]},
      message:"",
    }
  },
  methods:{
    getUser(username){
      const user = this.$store.getters['organisation/USER'](username)
      if(user){
        return user.firstName + ' ' + user.lastName
      }
    },
    submit(){
      if(!this.message.length){
        return;
      }
      this.$store.dispatch(
        'chats/SEND_MESSAGE',
        {
          context:this,
          chatId:this.chat.id,
          message:{
            content:this.message,
            user:{
              username:this.$store.getters['user/USER'].username
            }
          }
        }
      )
      //Empty message box
      this.message = ''
      //Scroll to bottom
      setTimeout(function(){
        //Scroll to bottom
        const objDiv = document.querySelector(".messages");
        objDiv.scrollTop = objDiv.scrollHeight;
      },10)
    },
    msgOwner(username){
      if(username == this.$store.getters['user/USER'].username){
        return 'owner'
      }
    }
  }

}
</script>
