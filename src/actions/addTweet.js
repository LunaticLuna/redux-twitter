import { saveTweet } from '../utils/api'
export const ADD_TWEET = 'ADD_TWEET'

function addTweet(tweet){
  return {
    type: ADD_TWEET,
    tweet
  }
}

export function handleAddTweet(info){
  return (dispatch) => {
    return saveTweet(info)
          .then((tweet)=>dispatch(addTweet(tweet)))
  }
}