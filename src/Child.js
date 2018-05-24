import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Child extends Component {

  constructor(){
    super();
    this.state={
      name:'Bala'
    }
    console.log('Child constructor');
  }
  
  componentWillMount() {
    //we can do the change state here, 
        if(Window.innerWidth < 500){
          this.setState({innerWidth:window.innerWidth});
        }

    console.log('Child componentWillMount');
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('Child shouldComponentUpdate');
     return true;
  }
  componentDidMount(){
    console.log('Child componnetDidMount');
  }
  
  render() {
    console.log('Child render');
    return (
      <div className="App">
       Child name:{this.props.name}
      </div>
    );
  }
}

export default Child;
