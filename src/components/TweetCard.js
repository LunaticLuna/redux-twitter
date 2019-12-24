import React from  'react'
import { connect } from 'react-redux'
import { formatTweet, formatDate } from '../utils/helpers'
import { TiArrowBackOutline, TiHeartFullOutline, TiHeartOutline } from "react-icons/ti";
import { handleToggleLike } from '../actions/likeTweet'

class TweetCard extends React.Component{
  toParent(e,parent){
    e.preventDefault()
    console.log('click replying-to button')
    console.log(parent)

  }
  toggleLike = (e,hasLiked) => {
    e.preventDefault()
    console.log('click like button')
    this.props.dispatch(handleToggleLike({
      authedUser:this.props.authedUser,
      hasLiked,
      id:this.props.tweet.id
    }))

  }
  render(){
    const { tweet } = this.props

    return (
      <div className = 'tweet-card'>
        <img className = 'avatar' src = {tweet.avatar} alt = 'author avatar'/>
        <div>
          <h4 className = 'user-name'>{tweet.name}</h4>
          <div style = {{color: '#969696',fontSize:'14px'}}>
            {formatDate(tweet.timestamp)}
          </div>
          {tweet.parent === null ? null
            :<button 
              className = 'replying-to' 
              onClick = {(e)=>this.toParent(e, tweet.parent)}
              >
              Replying to @{tweet.parent.author}
             </button>
          }
          <p>
            {tweet.text}
          </p>
          <div className ='tweet-icons'>
            <TiArrowBackOutline className = 'tweet-icon' />
            <span>
              {tweet.replies > 0 ? tweet.replies : null}
            </span>
            <button className = 'icon-like' onClick = {(e)=>this.toggleLike(e,tweet.hasLiked)}>
              {tweet.hasLiked ? <TiHeartFullOutline  color='#e0245e' className = 'tweet-icon' /> 
                              : <TiHeartOutline className = 'tweet-icon'/>}
            </button>
            <span>
              {tweet.likes > 0 ? tweet.likes : null}
            </span>
          </div>

        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, tweets, users }, { id }){
  const tweet = tweets[id]
  return {
    tweet: formatTweet(tweets[id],users[tweet.author],
                      authedUser,tweets[tweet.replyingTo]),

  }
}

export default connect(mapStateToProps)(TweetCard)