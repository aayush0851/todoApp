import React from 'react';
import FlipMove from 'react-flip-move';
import './style.css';

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
      <div className="box">
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
            className="fill"
            />
          <input 
            type="submit" value="Enter" className="submit"/>
        </form>
      </div>
    )
  }
}

class List extends React.Component {
  // constructor(){
  //   super(item);
  //   this.state= {
  //     updatedTask : item
  //   }
  //   console.log()
  //   this.updateItem = this.updateItem.bind(this)
  // }
  // updateItem(e){
  //   this.setState({
  //     updatedTask : e.target.value
  //   })
  //   console.log(this.state.updatedTask)
  // }
  render(){
    const listItems = arr.map((item) =>
    <FlipMove duration={500} easing="linear">
      <li key={item}>
        {/* <input type="text" value={item} onChange={this.updateItem}/> */}
        <p className="ptag">{item}</p>
        <button className="delButton" onClick={()=>this.props.del(item)}>X</button>
      </li>
    </FlipMove>
    );
    return(
      <ul>{listItems}</ul>
    )
  }
}



var arr = [];


export default App;

