export const state = () => ({
  user: {}
})

export const mutations = {
  set (state, user) {
    state.user = user
    state.user.initials = user.firstName[0] + user.lastName[0]
    if(!state.user.initials.length){
        state.user.initials = "U"
    }
  },
  remove (state) {
    state.user = {}
  }
}

export const actions = {
    
}