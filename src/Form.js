import React from 'react';

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

  export default Form;