<template>
  <section class="container">


    <section class="accordions">
      <article class="accordion" v-for="kit in kits" :key="kit.title">
        <div class="accordion-header">
          <p>{{kit.title}}</p>
          <button class="toggle" aria-label="toggle"></button>
        </div>
        <div class="accordion-body">
          <div class="accordion-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </div>
      </article>
    </section>

  </section>
</template>

<script>

export default {

  computed:{
    kits:function(){
      return this.$store.getters['onboarding/KITS']
    },
  },
  data(){
    return {
    };
  }
}
</script>
