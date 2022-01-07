import { combineReducers } from '@reduxjs/toolkit'
import { userListReducer, userReducer } from './usersReducer'

const Reducers = combineReducers({
  users: userListReducer,
  user: userReducer,
})

export default Reducers
