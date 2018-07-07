import firebase from '../firebase.js'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const SET_USER = 'SET_USER'

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
export const setUser = user => {{type: SET_USER, user}}

/**
 * THUNK CREATORS
 */
export const checkUser = () =>
  dispatch => {
    const user = firebase.auth().currentUser
    console.log(user)
    if (user) {
      dispatch(getUser(user))
    }
    else {
      dispatch(getUser({}))
    }
  }

export const authSet = (user) => 
  dispatch => {
    dispatch(setUser(user))
  }
    
/**
 * REDUCER
 */
export default function (state = {}, action) {
    switch (action.type) {
      case GET_USER:
        return action.user
      case SET_USER:
        return action.user
      default:
        return state
    }
  }