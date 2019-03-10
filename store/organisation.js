import * as orgQuery from '~/apollo/queries/organisations'
import moment from 'moment';

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
  TEAM:state => teamId => {
    if(typeof state.organisation.levelSet == 'undefined'){
      return;
    }
    for(let level of state.organisation.levelSet){
      for(let team of level.teamSet){
        if(teamId == team.id){
          return team
        }
      }
    }
  },
  USER:state => (username)=> {
    if(typeof state.organisation.levelSet == 'undefined'){
      return;
    }
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
  },
  USER_POSITION:state => (username)=> {
    if(typeof state.organisation.levelSet == 'undefined'){
      return;
    }
    for(let level of state.organisation.levelSet){
      for(let team of level.teamSet){
        for(let position of team.positionSet){
          for(let up of position.userpositionSet){
            if(up.user.username == username){
              return position
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
  DEL_ORGANISATION(state){
    state.organisation = {}
  },

  // Kudos section
  APPEND_KUDOS(state,param){
    if(typeof state.organisation.levelSet == 'undefined'){
      return;
    }
    for(let level of state.organisation.levelSet){
      for(let team of level.teamSet){
        for(let position of team.positionSet){
          for(let up of position.userpositionSet){
            if(up.user.username == param.username){
              up.user.kudoSet.push(param.kudos)
            }
          }
        }
      }
    }
  },

  // Kudos section
  APPEND_RECOMMENDATION(state,param){
    if(typeof state.organisation.levelSet == 'undefined'){
      return;
    }
    for(let level of state.organisation.levelSet){
      for(let team of level.teamSet){
        for(let position of team.positionSet){
          for(let up of position.userpositionSet){
            if(up.user.username == param.username){
              up.user.recommendationSet.push(param.recommendation)
            }
          }
        }
      }
    }
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

      //Load ppics
      for(let level of organisation.levelSet){
        for(let team of level.teamSet){
          for(let position of team.positionSet){
            for(let up of position.userpositionSet){
              up.user.ppic = '/images/profile/' +  parseFloat(Math.floor(Math.random() * 7) + 1).toFixed(0) + '.png'
            }
          }
        }
      }

      //set
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
  },

  // Kudos section
  SEND_KUDOS(store,param){
    //set
    param.context.$toast.show('Sending kudos....')
    store.commit('APPEND_KUDOS', param)
    param.context.$toast.success('Kudos sent!')
  },


  // Kudos section
  SEND_RECOMMENDATION(store,param){
    //set
    param.context.$toast.show('Sending recommendation....')
    store.commit('APPEND_RECOMMENDATION', param)
    param.context.$toast.success('Recommendation sent!')
  },

  REMOVE_ORGANISATION(store){
    store.commit('DEL_ORGANISATION')
  }

}
