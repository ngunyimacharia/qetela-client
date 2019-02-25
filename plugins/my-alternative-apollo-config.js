// plugins/my-alternative-apollo-config.js
export default function(context){
  return {
    httpEndpoint: '/graphql',
    getAuth:() => 'Bearer qetela-token' // use this method to overwrite functions
  }
}
