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
    return saveLikeToggle(info)
      .then(()=>dispatch(likeTweet(info)))
  }
}