import React from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'
import { Redirect } from 'react-router-dom'

class NewTweet extends React.Component{
  state = {
    text : '',
    toHome: false
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    const text = this.state.text
    const author = this.props.authedUser
    const replyingTo = this.props.replyingTo

    this.props.dispatch(handleAddTweet({text,author,replyingTo}))
    this.setState({
      text:'',
      toHome: replyingTo ? false : true
    })


  }
  handleChange = (e) => {
    const text = e.target.value
    this.setState({
      text
    })
  }
  render(){
    if (this.state.toHome === true){
      return <Redirect to = '/' />
    }
    return (
      <div>
        <h3 className = 'center'> Compose New Tweet</h3>
        <form className = 'input-form' onSubmit = {this.handleSubmit}>
          <textarea 
            className = 'text-area'
            placeholder = "what's happening?"
            value = {this.state.text}
            onChange = {this.handleChange}
            maxLength = {280}
          />
          <button 
          className = 'submit-btn center'
          type = 'submit'  
          disabled = {this.state.text===''}     
          >
          SUBMIT
        </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({authedUser},{replyingTo = null}){
  return {
    authedUser,
    replyingTo,
  }
}

export default connect(mapStateToProps)(NewTweet)