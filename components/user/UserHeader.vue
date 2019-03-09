<template>
  <section class="header">
    <div class="">
      <div class="columns">
        <div class="column ppic">
          <figure class="image is-128x128">
            <img class="is-rounded" :src="profile()">
          </figure>
        </div>
        <div class="column is-four-fifths details">
          <p class="title is-4">
            {{user.firstName}} {{user.lastName}}
          </p>
          <p>
            <a :href="'mailto:'+user.email">
              <i class="fas fa-envelope"></i>
              {{user.email}}
            </a>
          </p>
          <!-- <p>
            <a href="tel:+233501693321">
              <i class="fas fa-phone"></i>
              +233501693321
            </a>
          </p> -->
          <p>
            {{position.title}}
          </p>
          <div>
            <a class="button is-info is-outlined" :disabled="isOwner()">
              <span class="icon">
                <i class="fas fa-thumbs-up"></i>
              </span>
              <span>Kudos</span>
            </a>
            <a class="button is-info is-outlined" :disabled="isOwner()">
              <span class="icon">
                <i class="fas fa-comment-alt"></i>
              </span>
              <span>Recommend</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <kudos-modal :receiver="user" />

  </section>
</template>

<style lang="scss">
.header{
  padding: 1rem 0;

  .ppic{
    padding: 1rem 2rem;
    figure{
      margin: 0.75rem auto;
    }

  }

  .details{
    .title{
      font-size: 1.5em;
    }
    p{
      font-size: 1em;
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

export default {
  components: {
    KudosModal
  },
  props: ["user","position"],
  computed:{
      //
  },
  data() {
    return {
      //
    }
  },
  methods:{
    profile:function(){
      return '/images/profile/' +  parseFloat(Math.floor(Math.random() * 7) + 1).toFixed(0) + '.png'
    },
    isOwner:function(){
      return (this.user.username == this.$store.getters['user/USER'].username)
    }
  }
}
</script>
