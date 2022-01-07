export const userListReducer = (state = {}, action) => {
  switch (action.type) {
    case '@users/update':
      return action.payload
    case '@users/delete':
      return { ...state, data: state.data.filter(item => item.id !== action.id) }

    default:
      return state
  }
}

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case '@user/get':
      return action.payload
    case '@user/update':
      return { ...state, ...action.payload }
    default:
      return state
  }
}
