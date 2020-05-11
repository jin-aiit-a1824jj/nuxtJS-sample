export const state = () => ({
  message: 'Hello Vuex!'
})

export const mutations = {
  updateMessage: function(state, payload) {
    state.message = payload
  }
}

export const actions = {
  updateMessageAction(context, payload){
    console.log(context)
    console.log(payload)
    context.commit('updateMessage', payload)
  }
}