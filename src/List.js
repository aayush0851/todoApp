import React from 'react';
import arr from './App';


class List extends React.Component {
    render(){
      const listItems = arr.map((item)=>
        <li key={item}>
          <input type="checkbox"/>
            {item}
          <span>i</span>
        </li>
      );
      return(
        <ul>{listItems}</ul>
      )
    }
  }

  export default List;