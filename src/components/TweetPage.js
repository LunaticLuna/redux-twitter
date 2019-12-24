import React from 'react'
import { connect } from 'react-redux'
import TweetCard from './TweetCard'
import NewTweet from './NewTweet'

class TweetPage extends React.Component{
  render(){
    const { tweet } = this.props
    if (tweet === null){
      return 
    }
    const { id, replies } = tweet

    return(
      <div> 
        <TweetCard id = {id}/>
        <NewTweet replyingTo = {id}/>
        <h4 className = 'center'>Replies</h4>
        <ul>  
          {replies.map((repId)=>(
            <li key = {repId}>
              <TweetCard id = {repId} />
            </li>
            )
          )}

        </ul>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, tweets },{ match }){
  const { id } = match.params
  const tweet = tweets[id]

  return {
    tweet
  }
}

export default connect(mapStateToProps)(TweetPage)