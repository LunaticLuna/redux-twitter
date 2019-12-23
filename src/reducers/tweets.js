import { LIKE_TWEET } from '../actions/likeTweet'
import { RECEIVE_TWEETS } from '../actions/tweets'

export function tweets(state = {}, action){
  switch(action.type){
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets,
      }
    case LIKE_TWEET:
      console.log(state,action)
      const tweet = state[action.id]
      const authedUser = action.authedUser
      const likes = action.hasLiked === true
                    ? tweet.likes.filter(authedUser)
                    : tweet.likes.concat([authedUser])
      return {
        ...state,
        [action.id]:{
          ...tweet,
          likes
        }


      }
    default:
      return state
  }
}