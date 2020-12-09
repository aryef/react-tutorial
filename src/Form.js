import React, {Component} from 'react'
import {MContext} from './MyProvider'

class Form extends Component {
  initialState = {
    name: '',
    job: '',
  }

  state = this.initialState

  handleChange = (event) => {
    const {name, value} = event.target
  
    this.setState({
      [name]: value,
    })
  }

  sendData = () => {
    this.props.parentCallback("Hey Popsie, How’s it going?");
}

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
    this.sendData()
  }

  render() {
    const { name, job } = this.state;  
    return (
        <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}         
          onChange={this.handleChange} />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}         
          onChange={this.handleChange} />
         <input type="button" value="Submit" onClick={this.submitForm} />
      </form>  
      <div>
            <MContext.Consumer>
             {(context) => (
              <p>{context.state.message}</p>)}
            </MContext.Consumer>
         </div>   
      </div>
    );
  }
 
}

export default Form;