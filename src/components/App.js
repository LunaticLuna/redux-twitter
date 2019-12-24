import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'

class App extends Component {
  componentDidMount(){
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <div>
          <LoadingBar />
          {this.props.loading === true
            ? null
            : <React.Fragment>
                <Nav />
                <div>
                  <Route path = '/' exact component = {Dashboard} />
                  <Route path = '/NewTweet' component = {NewTweet} />
                  <Route path = '/tweet/:id' component = {TweetPage} />
                </div>
              </React.Fragment>
          }
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)