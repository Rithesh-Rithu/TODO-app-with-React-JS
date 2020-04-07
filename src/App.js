import React, { Component } from 'react';

import logo from "./webby-dev.png";
import "./App.css";


export default class App extends Component {
    constructor(props){
      super(props);
      this.state = {
          newItem: "",
          list: [] 
      }
    } 
  
  addItem(todoValue){
    if(todoValue !== ""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false, 
      };
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list:list,
        newItem: ""
      });
    }
  }

deleteItem(id){
  const list = [...this.state.list];
  const updatedlist = list.filter(item => item.id !== id);
  this.setState({
    list: updatedlist,
  })
}

updateInput(input){
  this.setState({
    newItem: input,
  })
}


render(){
  return (
    <div className="container ">
      	<div className="row">
        	<div className="App col">
          		<img src={logo} alt="logo" className="logo"/>
        	</div>
        	<div className="Todo col">   
				  <h1 className="app-title">WEBBY-DEV</h1> <br />
				  <h2>ToDo App</h2> 
          		<div className="container">
          			Add an item!!! <br />
          			<input 
              			type="text" 
              			className="input-text" 
              			placeholder="Write a Todo..." 
              			required 
              			value={this.state.newItem} 
              			onChange={e => this.updateInput(e.target.value)} 
            			/>
					<button 
						className="add-btn"
						onClick={() => this.addItem(this.state.newItem)}
						disabled= {!this.state.newItem.length}

					>
						Add Todo
					</button>
          			<div className="list">
						<ul>
						  {this.state.list.map(item => {
							  return(
								  <li key={item.id}>
								  <input
								  type="checkbox"
								  name="isDone"
								  checked={DataTransferItemList.isDone}
								  onChange= {() => {}} 
								   />
								   {item.value}
								   <button
								   className="button"
								   onClick={()=> this.deleteItem(item.id)}
								   >Delete</button>
								  </li>
							  );
						  })}
              			
            			</ul>
          			</div>
        		</div>
        	</div>
      	</div>
    </div>
  );
}
}