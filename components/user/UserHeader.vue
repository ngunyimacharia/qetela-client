<template>
  <section class="header">
    <div class="">
      <div class="columns">
        <div class="column is-one-fifths ppic">
          <figure class="image is-128x128">
            <img :src="user.ppic">
          </figure>
        </div>
        <div class="column is-two-fifths details">
          <p class="title is-4">
            {{user.firstName}} {{user.lastName}}
          </p>
          <p>
            <span class = "highlight"><i class="fas fa-envelope"></i>Email:  </span>
            <a :href="'mailto:'+user.email">
              {{user.email}}
            </a>
          </p>
          <p>
            <span class = "highlight"><i class="fas fa-phone"></i>Phone:  </span>
            <a href="tel:+27823009834">
              
              +27823009834
            </a>
          </p>
          <p>
            <span class = "highlight"><i class="fas fa-crosshairs"></i>Position:  </span>
            {{position.title}}
          </p>
          <div>
            <a class="button is-info is-outlined" :disabled="isOwner()" v-on:click="toggleModal('kudos')">
              <span class="icon">
                <i class="fas fa-thumbs-up"></i>
              </span>
              <span>Kudos</span>
            </a>
            <a class="button is-info is-outlined" :disabled="isOwner()" v-on:click="toggleModal('recommendation')">>
              <span class="icon">
                <i class="fas fa-comment-alt"></i>
              </span>
              <span>Recommend</span>
            </a>
          </div>
        </div>
        <div class="column is-two-fifths">
          <user-badges />
        </div>
      </div>
    </div>

    <kudos-modal :active="this.modals.kudos" :receiver="user" />
    <recommend-modal :active="this.modals.recommendation" :receiver="user" />

  </section>
</template>

<style lang="scss" scoped>
.header{
  padding: 2rem 1rem;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,.1),0 6px 24px 0 rgba(0,0,0,.04);
  margin-bottom: 2rem;

  .ppic{
    padding: 1rem 2rem;
    figure{
      margin: 0.75rem auto;
    }

  }

  .details{
    .title{
      font-size: 1.4em;
    }
    .highlight{
      color: #30343f;
      font-weight: 700;
    }

    p{
      font-size: 0.9em;
      i{
        padding-right: 0.5rem;
      }
    }
    .button{
      margin: 0 0.4rem 0 0;
      font-size: 0.9em;
      i{
        padding: 0 1rem;
      }
    }
  }
}
</style>

<script>

import KudosModal from "~/components/user/KudosModal";
import RecommendModal from "~/components/user/RecommendModal";
import UserBadges from "~/components/user/UserBadges";

export default {
  components: {
    KudosModal,
    RecommendModal,
    UserBadges,
  },
  props: ["user","position"],
  mounted:function(){
    this.$on('close-modal', function (modal) {
        this.modals[modal] = !this.modals[modal]
    });
  },
  computed:{
      //
  },
  data() {
    return {
      modals:{
        kudos:false,
        recommendation:false,
      }
    }
  },
  methods:{
    isOwner:function(){
      return (this.user.username == this.$store.getters['user/USER'].username)
    },
    toggleModal(modal){
      if(this.user.username == this.$store.getters['user/USER'].username){
        return;
      }
      this.modals[modal] = !this.modals[modal]
      this.$forceUpdate()
    }
  }
}
</script>
