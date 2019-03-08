import * as orgQuery from '~/apollo/queries/organisations'

export const state = () => ({
  organisation: {}
})

export const getters = {
  ORGANISATION: state => {
    return state.organisation
  },
  TEAMS:state => (levelId,parentId )=> {
    const teams = []
    for(let level of state.organisation.levelSet){
      if(level.id !== levelId){
        continue;
      }

      for(let team of level.teamSet){

        if(parentId){
          if(team.parent == null){
            continue
          }
          if(team.parent.id != parentId){
            continue;
          }
        }
        teams.push(team)

      }

    }

    return teams
  },
  USER:state => (username)=> {
    for(let level of state.organisation.levelSet){
      for(let team of level.teamSet){
        for(let position of team.positionSet){
          for(let up of position.userpositionSet){
            if(up.user.username == username){
              return up.user
            }
          }
        }
      }
    }
  }
}

export const mutations = {
  SET_ORGANISATION (state, organisation) {
    state.organisation = organisation
  },
  REMOVE_ORGANISATION(state){
    state.organisation = {}
  }
}


export const actions = {

  GET_ORGANISATION(store, context){
    context.$toast.show('Loading organisation info')
    // but you could also call queries like this:
    return context.apolloProvider.defaultClient.query({ query: orgQuery, variables: {} })
    .then(({ data }) => {
      //save organisation details
      const organisation = data.organisations[0]
      store.commit('SET_ORGANISATION', {
        name: organisation.name,
        website:organisation.website,
        branches:organisation.branches,
        cfFrequency:organisation.cfFrequency,
        created:organisation.created,
        levelSet:organisation.levelSet,
      })
      context.$toast.success('Organisation info loaded')
      return organisation;
    })
    .catch(err => {
      console.log(err)
      context.$toast.error('An error occured, please try again.')
    });
  }

}
