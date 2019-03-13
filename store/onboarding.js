import * as onboardingQuery from '~/apollo/queries/onboarding'
import moment from 'moment';

export const state = () => ({
  kits: [],
  sessions: []
})

export const getters = {
  KITS: state => {
    return state.kits
  },
  KIT: state => kitId => {
    for(let kit of state.kits){
      if(kit.id == kitId){
        return kit
      }
    }
    return {}
  },
  SESSIONS: state => {
    return state.sessions
  },
  SESSION: state => sessionId => {
    for(let session of state.sessions){
      if(session.id == sessionId){
        return session
      }
    }
    return {}
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

function computeSessionStatus(state,session){
  //Get kit
  let kit;
  for(let val of state.kits){
    if(val.id == session.kit.id){
      kit = val
      break
    }
  }

  //Check if all tasks are complete
  const totalTasks = kit.taskSet.length
  let complete = 0
  for(let task of kit.taskSet){
    for(let progress of session.progressSet){
      if(task.id == progress.task.id){
        complete += 1
        break
      }
    }
  }

  session.progress = parseFloat(complete / totalTasks).toFixed(2)

  if(session.progress >=1){
    session.completed = moment().format()
  }else {
    session.completed = null
  }


}

export const mutations = {
  SET_KITS(state, kits) {
    state.kits = kits
    state.sessions = []
    for(let kit of state.kits){
      for(let session of kit.sessionSet){
        session.kitTitle = kit.title
        computeSessionStatus(state,session)
        state.sessions.push(session)
      }
    }
  },
  COMPLETE_TASK(state,params){
    for(let session of state.sessions){
      if(session.id == params.sessionId){
        const add = {
          task:{id:params.taskId},
          completed:moment().format()
        }
        session.progressSet.push(add)
        console.log("Start")
        computeSessionStatus(state,session)
      }
    }
  },
  UNCOMPLETE_TASK(state,params){
    for(let session of state.sessions){
      if(session.id == params.sessionId){
        let pIndex;
        session.progressSet.forEach(function (progress, i) {
          if(progress.task.id == params.taskId){
            session.progressSet.splice(i, 1);
            console.log("Start")
            computeSessionStatus(state,session)
          }
        });
      }
    }
  },
  DEL_KITS(state){
    state.kits = []
    state.sessions = []
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

  TASK_COMPLETE(store,params){
  console.log("Start")
    store.commit('COMPLETE_TASK',params)
  },


  TASK_INCOMPLETE(store,params){
  console.log("Start")
    store.commit('UNCOMPLETE_TASK',params)
  },

  REMOVE_KITS(store){
    store.commit('DEL_KITS')
  }

}
