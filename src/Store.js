import { createStore } from '@reduxjs/toolkit'
import Reducers from './reducers'

export const store = createStore(Reducers)
