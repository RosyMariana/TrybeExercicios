import logo from './logo.svg';
import './App.css';
import React from 'react'

// function handleClick() {
//   console.log('Olha o botao 1')
// }
// function handleClick2() {
//   console.log('Olha o botao 2')
// }
// function handleClick3() {
//   console.log('Olha o botao 3')
// }

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 =  this.handleClick3.bind(this);

    this.state = {
      click1: 0,
      click2: 0,
      click3: 0,
    };
  } 

  handleClick() {
  this.setState((prevState, _props) => ({
    click1: prevState.click1 + 1
  }), () => {
    console.log(`Botao 1 ${this.corVerde(this.state.click1)}`);
  });
}0

handleClick2() {
  this.setState((prevState, _props) => ({
    click2: prevState.click2 + 1
  }), () => {
    console.log(`Botao 2 ${this.corVerde(this.state.click2)}`);
  });
}

handleClick3() {
  this.setState(({click3}) => ({
    click3: click3 + 1
  }), () => {
    console.log(`Botao 3 ${this.corVerde(this.state.click3)}`)
  });
}

corVerde (num) {
  return num % 2 === 0 ? 'green' : 'red'; 
}

// handleClick() {
//   console.log(`"this" do botao 1: `, this);
// }
// handleClick2() {
//   console.log(`"this" do botao 2: `, this);
// }
// handleClick3() {
//   console.log(`"this" do botao 3: `, this);
// }
  render() {
    const {click1, click2, click3} = this.state;
  return (
    <div>
    <button 
    onClick = {this.handleClick} 
    style ={{backgroundColor: this.corVerde(click1)}}
    >
      Botao | Count = {this.state.click1}
    </button>
    <button 
    onClick = {this.handleClick2} 
    style ={{backgroundColor: this.corVerde(click2)}}
    >
      Outro Botao| Count = {this.state.click2}
    </button>
    <button 
    onClick = {this.handleClick3} 
    style ={{backgroundColor: this.corVerde(click3)}}
    >
      Terceiro Botao | Count = {this.state.click3}
    </button>
    </div>
  );
  }
}

export default App;
