import { createSlice } from '@reduxjs/toolkit'
import {
  getTolocalStorage,
  removeTolocalStorage,
  saveToLocalStorage,
} from '../Component/Hook/LocalStrong'

const initialState = {
  user: getTolocalStorage('user') ? getTolocalStorage('user') : {},
  users: [],
  isValidUser: getTolocalStorage('isValidUser')
    ? getTolocalStorage('isValidUser')
    : false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUsersArr(state, action) {
      state.users = [...state.users, action.payload]
      saveToLocalStorage('userArr', state.users)
    },

    onLogin(state, action) {
      state.isValidUser = true
      state.user = action.payload
      saveToLocalStorage('isValidUser', state.isValidUser)
      saveToLocalStorage('user', state.user)
    },
    onLogout(state) {
      state.isValidUser = false
      removeTolocalStorage('user')
      saveToLocalStorage('isValidUser', state.isValidUser)
    },
  },
})

export const userAction = userSlice.actions
export default userSlice
