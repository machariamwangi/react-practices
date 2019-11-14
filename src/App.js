import React, {Component} from 'react';
import Counter from './Counter';
import Profile from './Profile';
import './App.css';

class App extends Component {

      constructor(props){
        super(props);
        this.state = {
          employees:[
            {
              name: "Bob",
              position: "software developer"
            },
            {
              name: "elijah",
              position: "frontend developer"
            },
            {
              name: "nicko",
              position: "Database manager"
            }
          ]
        }
      }

  render(){
  return (
    <div className="App">
     <h1>my work 90s</h1>
     <Counter />
    {this.state.employees.map(employee =>{
      return(
        <Profile name={employee.name} position={employee.position} />
      )
    })}
    </div>
  );
  }
}

export default App;
