export const state = () => ({
  // initialized: 0
})


export const mutations = {
  REMOVE_DATA(state,context) {
    context.$store.dispatch('user/REMOVE_USER')
    context.$store.dispatch('organisation/REMOVE_ORGANISATION')
    context.$store.dispatch('goals/REMOVE_GOALS')
    context.$store.dispatch('chats/DEL_CHATS')
    context.$store.dispatch('onboarding/REMOVE_KITS')
  }
}


export const actions = {

  nuxtClientInit(store, context) {
    if(context.app.$apolloHelpers.getToken()){
      const loadData = async () =>{
        await store.dispatch('organisation/GET_ORGANISATION',context.app)
        await store.dispatch('goals/GET_GOALS',context.app)
        await store.dispatch('chats/GET_CHATS',context.app)
        await store.dispatch('onboarding/GET_KITS',context.app)

      }
      loadData()
    }
  },

  CLEAR_STORAGE (store,context) {
    store.commit('REMOVE_DATA',context)
  }

}
