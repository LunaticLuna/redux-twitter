import { getInitialData } from '../utils/api'
import { setAuthedUser } from './authedUser'
import { receiveTweets } from './tweets'
import { receiveUsers } from './receiveUsers'

const authedUser = 'tylermcginnis'

export function handleInitialData(){
  return (dispatch) =>{
    return getInitialData()
        .then(({users,tweets})=>{
          dispatch(setAuthedUser(authedUser))
          dispatch(receiveUsers(users))
          dispatch(receiveTweets(tweets))
        })
  } 
}