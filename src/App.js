import './App.css';
import Profile from './Counter';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';

class App extends React.Component{
  state={
    show:false,
    
  }
  toggle=()=>{
    this.setState({show: !this.state.show})
  }
  render(){
    return (
    <div className="App">
      <Button variant="contained" onClick={this.toggle}>{this.state.show ? "Hide":"Show"}</Button>
      
     {this.state.show && <Profile />}
     
    </div>
  );
}
}
export default App;