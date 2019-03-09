<template>
  <div>
    <canvas id="fooCanvas" count="1" />

    <chartjs-bar
      v-bind:backgroundcolor="bgColor"
      v-bind:beginzero="beginZero"
      v-bind:bind="true"
      v-bind:bordercolor="borderColor"
      v-bind:data="data"
      v-bind:datalabel="dataLabel"
      v-bind:labels="labels"
      target="fooCanvas"
    />

  </div>



</template>

<script>
export default {

  mounted(){
      const username = this.$store.getters['user/USER'].username
      const results = this.$store.getters['goals/KPI_WEEKLY_DATA'](username)
      this.labels = results.keys
      this.data = results.values
      this.$forceUpdate()
  },
  data() {
    return {
      beginZero: true,
      bgColor: "#ff1200",
      borderColor: "#ff1200",
      dataLabel: "KPI Update Frequency",
      labels:[],
      data:[]
      };
  },
};
</script>
