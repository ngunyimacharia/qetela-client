import * as goalsQuery from '~/apollo/queries/organisation_goals'
import moment from 'moment';

export const state = () => ({
  goals: []
})

export const getters = {
  GOALS: state => {
    return state.goals
  },

  ORGANISATION_GOALS: state => {
    return state.goals.filter(goal => {
      return (goal.team == null && goal.user == null)
    })
  },

  PERSONAL_GOALS: state => username => {
    const goals = state.goals.filter(goal => {
      if(goal.user){
        return (goal.user.username == username)
      }
      return false
    })
    for(let goal of goals){
      goal.owner = true
    }
    return goals
  },

  KPI_WEEKLY_DATA: state => username => {
    const updates = []
    for(let goal of state.goals){
      if(goal.user){
        if(goal.user.username == username){
          for(let kpi of goal.kpiSet){
            for(let update of kpi.kpiupdateSet){
              updates.push(update)
            }
          }
        }
      }
    }

    const date = moment()
    const keys = []
    const values = []
    for(let i=0;i<=7;i++){
      // create start and end moment to check for updates
      let start = moment(date).subtract(7,'days')
      let end = moment(date)
      let count = 0
      // check for updates in between
      for(let update of updates){
        if(moment(update.created).isBetween(start,end)){
          count++;
        }
      }

      // Update keys and values
      keys.push(date.format('Do MMM'))
      values.push(count)
      date.subtract(7, 'days');
    }
    return {keys,values}
  },

}

const calculateProgress = (goals) => {
  for(let goal of goals){
    let total = 0
    for(let kpi of goal.kpiSet){
      kpi.progress = (kpi.current / kpi.target).toFixed(2)
      if(kpi.progress > 1){
        kpi.progress = 1
      }
      total += kpi.current / kpi.target
    }goalsQuery
    goal.progress = (total / goal.kpiSet.length).toFixed(2)
    if(goal.progress > 1){
      goal.progress = 1
    }
  }
}

export const mutations = {
  SET_GOALS(state, goals) {
    calculateProgress(goals)
    state.goals = goals
  },
  REMOVE_GOALS(state){
    state.goals = {}
  }
}

export const actions = {

  GET_GOALS(store, context){
    context.$toast.show('Loading goals info...')
    return context.apolloProvider.defaultClient.query({ query: goalsQuery, variables: {} })
    .then(({ data }) => {
      const goals = data.goals
      // save goals
      store.commit('SET_GOALS', goals)
      context.$toast.success('Goals info loaded')
    })
    .catch((data,err) => {
      console.log(data,err)
      context.$toast.error('An error occured, please try again.')
    });
  }
}
