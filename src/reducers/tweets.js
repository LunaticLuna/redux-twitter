import { LIKE_TWEET } from '../actions/likeTweet'
import { RECEIVE_TWEETS } from '../actions/tweets'
import { ADD_TWEET } from '../actions/tweets'

export function tweets(state = {}, action){
  switch(action.type){
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets,
      }

    case LIKE_TWEET :
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes: action.hasLiked === true
            ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
            : state[action.id].likes.concat([action.authedUser])
        }
      }
    case ADD_TWEET:
      console.log(state)
      const { tweet } = action
      const parent = state[tweet.replyingTo]
      let newParent = {}
      if (parent){
        newParent = {
          [parent.id]:{
            ...parent,
            replies: parent.replies.concat([tweet.id])
          },
        }
      }
      return {
        ...state,
        [action.tweet.id]:{
          ...action.tweet,
        },
        ...newParent
      }
    default:
      return state
  }
}