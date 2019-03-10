import * as chatsQuery from '~/apollo/queries/chats'
import moment from 'moment';

export const state = () => ({
  chats: []
})

export const getters = {
  CHATS: state => {
    return state.chats
  },
  GOAL_CHAT:state => goalId => {
    for(let chat of state.chats){
      if(chat.goal){
        if(chat.goal.id == goalId){
          return chat
        }
      }
    }
    return {messageSet:[]}
  }
}


export const mutations = {
  SET_CHATS(state, chats) {
    state.chats = chats
  },
  ADD_MESSAGE(state,params){
    for(let chat of state.chats){
      if(chat.id == params.chatId){
        chat.messageSet.push(params.message)
      }
    }
  },
  DEL_CHATS(state){
    state.chats = {}
  }
}

export const actions = {

  GET_CHATS(store, context){
    context.$toast.show('Loading chats info...')
    return context.apolloProvider.defaultClient.query({ query: chatsQuery, variables: {} })
    .then(({ data }) => {
      const chats = data.chats
      // save chats
      store.commit('SET_CHATS', chats)
      context.$toast.success('Chats info loaded')
    })
    .catch((data,err) => {
      console.log(data,err)
      context.$toast.error('An error occured, please try again.')
    });
  },
  SEND_MESSAGE(store,params){
    store.commit('ADD_MESSAGE', params)
  },
  REMOVE_CHATS(store){
    store.commit('DEL_CHATS')
  }
}
