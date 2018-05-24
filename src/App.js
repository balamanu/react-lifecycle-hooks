import React, { Component } from 'react';
import Child from './Child';
import './App.css';

class App extends Component {

  state={
    name:'manukonda'
  }
  constructor(){
    super();
    this.state={
      name:'Bala'
    }
    console.log('constructor');
  }
  
  componentWillMount() {
    //we can do the change state here, 
        if(Window.innerWidth < 500){
          this.setState({innerWidth:window.innerWidth});
        }

    console.log('componentWillMount');
  }

  componentDidMount(){
    console.log('componnetDidMount');
  }
  //take decission, if returns true the renders otherwise it won't renders it
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate');
     return true;
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  componentWillMount(){
    //once componnet mounted, then componnet gone.
    console.log('componentWillMount');
  }
  changeState = ()=>{
    this.setState({name:'kkkkk'})
  }
  render() {
    console.log('render');
    return (
      <div className="App">
       {this.state.name}
       | {this.state.innerWidth}
       <Child name={this.state.name}/>
       <button onClick={this.changeState.bind(this)}>Change State</button>
      </div>
    );
  }
}

export default App;
