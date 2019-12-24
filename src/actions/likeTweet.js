import { saveLikeToggle } from '../utils/api'

export const LIKE_TWEET = 'LIKE_TWEET'

function likeTweet({ id, hasLiked, authedUser }){
  return {
    type:LIKE_TWEET,
    id,
    hasLiked,
    authedUser
  }
}

export function handleToggleLike(info){
  return (dispatch) => {
    dispatch(likeTweet(info))

    return saveLikeToggle(info)
      .catch((e) => {
        console.warn('Error in handleToggleTweet: ', e)
        dispatch(likeTweet(info))
        alert('The was an error liking the tweet. Try again.')
      })
  }
}