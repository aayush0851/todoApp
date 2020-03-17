import React from 'react';
import propTypes from 'prop-types';

class Form extends React.Component{
  constructor(){
    super();
    this.state={
      task: ''
    }
    this.submitForm = this.submitForm.bind(this)
    this.taskWritten = this.taskWritten.bind(this)
  }
  taskWritten(e){
    this.setState({
      task: e.target.value
    })
  }
  submitForm(e) {
    e.preventDefault();
    console.log(this.state.task)
    alert('Task added');
    this.setState({
      task: ''
    })
  }
  render(){
    return(
      <form onSubmit={this.submitForm}>
        <input 
          type="text"
          placeholder="Enter the task here"
          onChange={this.taskWritten}
          value={this.state.task}
          />
        <input 
          type="submit" value="Enter"/>
      </form>
    )
  }
}

const tasks = [];

export default Form;
