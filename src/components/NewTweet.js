import React from 'react'
import { connect } from 'react-redux'

class NewTweet extends React.Component{
  state = {
    text : ''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  handleChange = (e) => {
    const text = e.target.value
    this.setState({
      text
    })
  }
  render(){
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

function mapStateToProps(state){
  return {

  }
}

export default connect(mapStateToProps)(NewTweet)