export const state = () => ({
    organisation: {}
  })
  
  export const mutations = {
    setOrg (state, organisation) {
      state.organisation = organisation
    },
    remove(state){
      state.organisation = {}
    }
  }
  
  export const actions = {
      
  }