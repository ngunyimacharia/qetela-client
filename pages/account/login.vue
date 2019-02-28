<template>
  <section id="login">
    <div class="columns is-centered">
      <div class="column is-one-third has-text-centered">
        <img src="/images/logo.png" alt="Logo" title="Logo" class="logo">
        <section class="card has-text-left">
          <header class="card-header">
            <h1 class="card-header-title">
              Login
            </h1>
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
                  <input 
                    v-on:blur="getUsername" 
                    v-model="credentials.email" 
                    class="input" 
                    type="email" 
                    placeholder="Email"
                    v-bind:class="{
                      'is-success':successfulUsername,
                      'is-danger':(successfulUsername === false)
                    }"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span v-if="successfulUsername" class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                  <span v-if="successfulUsername === false" class="icon is-small is-right">
                    <i class="fas fa-times"></i>
                  </span>
                </p>
                <p v-if="successfulUsername === false" class="help is-danger">This email is invalid</p>
                <p v-if="successfulUsername" class="help is-success">This email is valid</p>
              </div>
              <div class="field">
                <input v-model="credentials.username" type="hidden">
              </div>
              <div class="field" v-if="successfulUsername">
                <p class="control has-icons-left">
                  <input v-model="credentials.password" class="input" type="password" placeholder="Password">
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div class="field" v-if="randomUser">
                <p class="is-size-7 has-text-left"> 
                  Try the following credentials:
                  <br/>
                  <b>Username:</b> {{randomUser.email}}
                  <br/>
                  <span v-if="successfulUsername"><b>Password:</b> password</span>
                </p>
              </div>
            </form>
          </div>
          <footer class="card-footer">
            <a v-if="credentials.username" v-on:click="login" class="card-footer-item">Login</a>
            <a v-if="!credentials.username" class="card-footer-item has-text-black">Waiting for valid email</a>
            <!-- <a href="account/forgot-password" class="card-footer-item">Forgot password</a> -->
          </footer>
        </section>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  #login{
    .columns{
      margin: 3rem 0.25rem;
    }
    .logo{
      margin: 1rem auto;
      width: 15rem;
    }
  }
</style>

<script>
import gql from 'graphql-tag';
import { error } from 'util';

const randUserQuery = gql`query{
            randomUser{
              email
            }
          }`

export default {
  asyncData({app,route,store}){
      // but you could also call queries like this:
      return app.apolloProvider.defaultClient.query({query:randUserQuery, variables:{}})
        .then(({ data }) => {
          // do what you want with data
          return data
        }).catch((err)=>console.log(err))
  },
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
      successfulData: null,
      successfulUsername: null,
    }
  },
  layout:'plain',
  mounted(){
    this.isAuthenticated = !!this.$apolloHelpers.getToken()
  },
  methods: {
    async getUsername () {
      this.credentials.email = this.credentials.email.trim()
      if(!this.credentials.email.length){
        this.successfulUsername= null
        this.credentials.username= ""
        return
      }
      this.$toast.show('Checking email...')
      try {
        const res = await this.$apollo.query({
          query:  gql`query ($email: String!) {
            user(email:$email){
              id,
              username,
              firstName,
              lastName
            }
          }`,
          variables: {email:this.credentials.email}
        }).then(({data}) => {
          this.successfulUsername = true
          this.credentials.username = data.user.username
          this.credentials.id = data.user.id
          this.credentials.firstName = data.user.firstName
          this.credentials.lastName = data.user.lastName
          this.$toast.success('Email confirmed')
        })
      } catch (e) {
        this.successfulUsername = false
        this.credentials.username = ""
        this.credentials.id = null
        this.credentials.firstName = null
        this.credentials.firstName = null
        this.$toast.error('Email not registered')
      }
    },
    async login () {
      this.submitting = true
      const credentials = this.credentials
      this.$toast.show('Logging you in...')
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
          // save user details
          this.$store.commit('user/set', {
            username:this.credentials.username,
            email:this.credentials.email,
            firstName:this.credentials.firstName,
            lastName:this.credentials.lastName,

          })
          this.$toast.success('Login successful')
          // redirect user
          this.$router.replace('/organisation')
        })
      } catch (e) {
        if(e.message === "GraphQL error: Please, enter valid credentials"){
          this.$toast.error('Please, enter valid credentials.')
        }else{
          console.log(error)
          this.$toast.error('An error occured, please try again.')
        }
        this.error = e
      }
    },
  }
}
</script>
