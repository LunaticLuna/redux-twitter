import { LIKE_TWEET } from '../actions/likeTweet'
import { RECEIVE_TWEETS } from '../actions/tweets'
import { ADD_TWEET } from '../actions/addTweet'

export function tweets(state = {}, action){
  switch(action.type){
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets,
      }
    case LIKE_TWEET:
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
    case ADD_TWEET:
      return {
        ...state,
        [action.tweet.id]:{
          ...action.tweet,
        }
      }
    default:
      return state
  }
}