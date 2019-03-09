<template>
  <section class="header">
    <div class="">
      <div class="columns">
        <div class="column ppic">
          <figure class="image is-128x128">
            <img class="is-rounded" src="~/static/images/ppic.jpeg">
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
          <p>
            <a href="tel:+233501693321">
              <i class="fas fa-phone"></i>
              +233501693321
            </a>
          </p>
          <p>
            {{position.title}}
          </p>
          <div>
            <a class="button is-info is-outlined">
              <span class="icon">
                <i class="fas fa-thumbs-up"></i>
              </span>
              <span>Kudos</span>
            </a>
            <a class="button is-info is-outlined">
              <span class="icon">
                <i class="fas fa-comment-alt"></i>
              </span>
              <span>Recommend</span>
            </a>
          </div>
        </div>
      </div>
    </div>
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

export default {
  props: ["user","position"],
  computed:{
      //
  },
  data() {
    return {
      //
    }
  },
}
</script>
