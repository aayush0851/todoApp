import React from 'react';
import ReactDOM from 'react-dom';

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
    this.state.task === '' ? alert('Empty Field') : arr.unshift(this.state.task);
    this.setState({
      task: ''
    })
  }   
  removeItem(key){
    arr = arr.filter((item)=> item !== key);
    this.forceUpdate();
  }
  render(){
    return(
      <div>
        <Form 
            onPost={this.submitForm}
            onEdit={this.taskWritten}
            data={this.state.task}
          />
        <List del={this.removeItem} edit={this.updateItem}/>
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
  constructor(){
    super();
    this.state = {
      updatedTask: ''
    }
    this.editItem = this.editItem.bind(this)
    this.updateTask = this.updateTask.bind(this)
  }
  editItem(a){
    this.setState({
      updatedTask: a.target.value
    })
  }
  updateTask(b){
    b.preventDefault();
    var store = arr.findIndex((item)=> item = this.props.data)
    console.log(this.state.updatedTask)
    console.log(store)
  }
  render(){
    const listItems = arr.map((item) =>
      <li key={item}>
        {item}
        <button onClick={()=>this.props.del(item)}>Del</button>
        <Form 
            onPost={this.updateTask}
            onEdit={this.editItem}
          />
        {/* <input type="text" onChange={this.updateItem}/> */}
      </li>
    );
    return(
      <ul>{listItems}</ul>
    )
  }
}



var arr = [];


export default App;

