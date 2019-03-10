export const state = () => ({
  user: {}
})

export const getters = {
  USER: state => {
    return state.user
  }
}

export const mutations = {
  SET_USER (state, user) {
    state.user = user
    state.user.initials = user.firstName[0] + user.lastName[0]
    if(!state.user.initials.length){
        state.user.initials = "U"
    }
  },
  DEL_USER (state) {
    state.user = {}
  }
}

export const actions = {
  REMOVE_USER(store){
    store.commit('DEL_USER')
  }
}
