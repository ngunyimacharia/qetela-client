<template>
  <div>
    <!-- No information -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      // No data
    }
  },
  mounted(){
    if(this.$apolloHelpers.getToken()){
      //Redirect to organisation dashboard
      this.$router.replace('/organisation')
    }else{
      //Redirect to login
      this.$router.replace('/account/login')
    }
  },
}
</script>
