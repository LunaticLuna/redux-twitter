import { saveTweet } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const ADD_TWEET = 'ADD_TWEET'

export function receiveTweets(tweets){
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}


function addTweet(tweet){
  return {
    type: ADD_TWEET,
    tweet
  }
}

export function handleAddTweet(info){
  return (dispatch) => {
    dispatch(showLoading())
    return saveTweet(info)
          .then((tweet)=>{
              dispatch(addTweet(tweet))
              dispatch(hideLoading())
            }
          )
  }
}