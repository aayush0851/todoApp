import React from 'react';
import propTypes from 'prop-types';

class App extends React.Component{
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
    console.log(this.state.task);
    alert('Task added');
    arr.unshift(this.state.task);
    this.setState({
      task: ''
    })
    console.log(arr);
  }
  render(){
    return(
      <div>
        {/* <form onSubmit={this.submitForm}>
          <input 
            type="text"
            placeholder="Enter the task here"
            onChange={this.taskWritten}
            value={this.state.task}
            />
          <input 
            type="submit" value="Enter"/>
        </form> */}
        <Form 
            onPost={this.submitForm}
            onEdit={this.taskWritten}
            data={this.state.value}
          />
        <List />
      </div>
    )
  }
}

class Form extends React.Component {
  render() {
    return(
      <div>
          <form onSubmit={this.props.onPost}>
          <input 
            type="text"
            placeholder="Enter the task here"
            onChange={this.props.onEdit}
            value={this.props.data}
            />
          <input 
            type="submit" value="Enter"/>
        </form>
      </div>
    )
  }
}

class List extends React.Component {
  render(){
    const listItems = arr.map((item)=> <li>{item}</li>);
    return(
      <ul>{listItems}</ul>
    )
  }
}

const arr = [];

export default App;
