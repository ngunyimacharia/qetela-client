import * as onboardingQuery from '~/apollo/queries/onboarding'

export const state = () => ({
  kits: []
})

export const getters = {
  KITS: state => {
    return state.kits
  },
}


export const mutations = {
  SET_KITS(state, kits) {
    state.kits = kits
  },
  REMOVE_KITS(state){
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
      context.$toast.success('Kits info loaded')
    })
    .catch((data,err) => {
      console.log(data,err)
      context.$toast.error('An error occured, please try again.')
    });
  }

}
