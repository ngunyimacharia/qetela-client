<template>
  <div class="columns is-centered">
    <div class="column is-one-third">
      <section class="card">

        <header class="card-header">
          <p class="card-header-title">
            Login
          </p>
        </header>
        <div class="card-content">
          <form method="post">
            <div class="field">
              <p class="control has-icons-left">
                Please enter your credentials to proceed
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input v-on:blur="getUsername" v-model="credentials.email" class="input" type="email" placeholder="Email">
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span v-if="credentials.username" class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <input v-model="credentials.username" type="hidden">
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input v-model="credentials.password" class="input" type="password" placeholder="Password">
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                Don't have an account? <a href="/account/signup">Sign-up</a>
              </p>
            </div>
          </form>
        </div>
        <footer class="card-footer">
          <a v-on:click="login" class="card-footer-item">Login</a>
          <a href="account/forgot-password" class="card-footer-item">Forgot password</a>
        </footer>
      </section>
    </div>
  </div>
</template>

<style>
.columns{
  margin: 3rem 0.25rem;
}
</style>

<script>
import gql from 'graphql-tag';

export default {
  data() {
    return {
      isAuthenticated:false,
      submitting: false,
      error: null,
      credentials: {
        username:'',
        email: '',
        password: ''
      },
      successfulData: null
    }
  },
  mounted(){
    this.isAuthenticated = !!this.$apolloHelpers.getToken()
  },
  methods: {
    async getUsername () {
      try {
        const res = await this.$apollo.query({
          query:  gql`query ($email: String!) {
            user(email:$email){
              username
            }
          }`,
          variables: {email:this.credentials.email}
        }).then(({data}) => {
          this.credentials.username = data.user.username
        })
      } catch (e) {
        this.credentials.username = ""
      }
    },
    async login () {
      this.submitting = true
      const credentials = this.credentials
      try {
        const res = await this.$apollo.mutate({
          mutation: gql`mutation ($username: String!,$password:String!) {
            tokenAuth(username:$username,password:$password){
              token
            }
          }`,
          variables: credentials
        }).then(({data}) => {
          this.$apolloHelpers.onLogin(data.tokenAuth.token, undefined, 7)
          this.successfulData = data
          this.isAuthenticated = true
          // redirect user
          this.$router.replace('/organisation/')
        })
      } catch (e) {
        console.error(e)
        this.error = e
      }
    },
  }
}
</script>
