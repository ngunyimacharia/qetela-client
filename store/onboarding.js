import * as onboardingQuery from '~/apollo/queries/onboarding'

export const state = () => ({
  kits: [],
  sessions: []
})

export const getters = {
  KITS: state => {
    return state.kits
  },
  SESSIONS: state => {
    return state.sessions
  },
  ASSIGNED: state => username => {
    const sessions = state.sessions.filter(session => {
      return (session.user.username == username)
    })
    return sessions
  },
  BUDDY: state => username => {
    const sessions = state.sessions.filter(session => {
      return (session.buddy.username == username)
    })
    return sessions
  }

}


export const mutations = {
  SET_KITS(state, kits) {
    state.kits = kits
    for(let kit of state.kits){
      for(let session of kit.sessionSet){
        let ourSession = JSON.parse(JSON.stringify(session));
        ourSession.kit = kit.title
        state.sessions.push(ourSession)
      }
    }
  },
  DEL_KITS(state){
    state.kits = []
  }
}

export const actions = {

  GET_KITS(store, context){
    context.$toast.show('Loading onboarding info...')
    return context.apolloProvider.defaultClient.query({ query: onboardingQuery, variables: {} })
    .then(({ data }) => {
      const kits = data.kits
      // save goals
      store.commit('SET_KITS', kits)
      context.$toast.success('Onboarding info loaded')
    })
    .catch((data,err) => {
      console.log(data,err)
      context.$toast.error('An error occured, please try again.')
    });
  },

  REMOVE_KITS(store){
    store.commit('DEL_KITS')
  }

}
