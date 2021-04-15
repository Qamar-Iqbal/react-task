import React , {Component} from 'react';
import './App.css';
import fire from './config/fire';
import Login from './Login';
import Datafile from './component/Datafile'
import Mainpage from './component/Mainpage';


class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      user:{}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user:null})
      }
    })

  }


  render(){
    return(
      <div className= "App">
        {this.state.user ? (<div><Mainpage/> <Datafile/> </div>) : (<Login/>)}       
      </div>
    )
  }
}

export default App;
