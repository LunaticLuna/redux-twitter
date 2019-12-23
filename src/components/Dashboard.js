import React from 'react'
import { connect } from 'react-redux'
import TweetCard from './TweetCard'

class Dashboard extends React.Component{
  render(){
    const { idList } = this.props 

    return (
      <div>
        <h3 className = 'center'>Your Timeline</h3>
        <ul>
          {idList.map((id)=>
            <li key = {id}
                >
              <TweetCard id = {id}/>
            </li>)
          }
        </ul>
        
      </div>
    )
  }
}

function mapStateToProps({ tweets }){
  return { 
    idList: Object.keys(tweets).map((id)=> tweets[id])
                .sort((a,b)=>b.timestamp-a.timestamp)
                .map((tweet)=>tweet.id)
  }
}

export default connect(mapStateToProps)(Dashboard)