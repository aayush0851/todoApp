import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      task: '',
    }
    this.submitForm = this.submitForm.bind(this)
    this.taskWritten = this.taskWritten.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }
  taskWritten(e){
    this.setState({
      task: e.target.value
    })
  }
  submitForm(e) {
    e.preventDefault();
    console.log(this.state.task);
    this.state.task === '' ? alert('Empty Field') : arr.unshift(this.state.task);
    this.setState({
      task: ''
    })
    console.log(arr);
  }   
  removeItem(){
    console.log('item removed')
  }
  render(){
    return(
      <div>
        <Form 
            onPost={this.submitForm}
            onEdit={this.taskWritten}
            data={this.state.task}
          />
        <List del={this.removeItem}/>
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
            required/>
          <input 
            type="submit" value="Enter"/>
        </form>
      </div>
    )
  }
}

class List extends React.Component {
  render(){
    const listItems = arr.map((item)=>
      <li key={item}>
          {item}
          <button onClick={this.props.del}>Del</button>
      </li>
    );
    return(
      <ul>{listItems}</ul>
    )
  }
}



const arr = [];


export default App;

