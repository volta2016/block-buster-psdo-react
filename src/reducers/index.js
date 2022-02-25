 import { BURN } from '../actions/index.js'
 
 
 // reducer función que evalúa qué es lo que esta pasando en mi estado.
const reducer = (state, {type, payload}) => {
  switch (type) {
    case BURN:
      return state + payload 
    default:
      return state
  }
}

export default reducer