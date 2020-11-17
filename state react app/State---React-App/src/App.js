
import React from 'react';
import './App.css';
import User from './components/User.js';
import Avatar1 from './images/person1.jpg';
import Avatar2 from './images/person2.jpg';
import Avatar3 from './images/person3.jpg';

class App extends React.Component {

  state ={
    myText: "My original Text",
    likes : 0,
    persons:[
      {name:"Paul", city:"London"},
      {name:"Peter", city:"Manchester"},
      {name:"Dave", city:"Blackpool"},

    ]
  }

  changeText = () =>{
     this.setState({
       myText:"My Updated Text"
     })
  }

 increaseLikes =() =>{
   this.setState({
     likes:this.state.likes+1

   })
 }

 changeName =() =>{
   const updatedPersons = [ ...this.state.persons];
   // ... is the spread operator to copy anouther array//

   updatedPersons[0].name="Oliver";
    //updatedPersons[1].name="Michael";
   //updatedPersons[2].name="Steve";

   this.setState({
    persons: updatedPersons 
   })
 }

render() {
  return(
    
      <div> 
        <h1>{this.state.myText}</h1>
          <button onClick={this.changeText}>Click Me</button>
          <h1>Number of likes:{this.state.likes}</h1>
          <button onClick={this.increaseLikes}>Add Like</button>
    
        
         <User
            userImage={Avatar1}
            name={this.state.persons[0].name}
            city={this.state.persons[0].city}       
              />
            <button onClick={this.changeName}>Change Name</button>
         <User
            userImage={Avatar2}
            name={this.state.persons[1].name}
            city={this.state.persons[1].city}
         />
         <button onClick={this.changeName}>Change Name</button>
         <User
            userImage={Avatar3} 
            name={this.state.persons[2].name}
            city={this.state.persons[2].city}
         />
         <button onClick={this.changeName}>Change Name</button>
      
      
         </div>
    )
  }
}

export default App;
