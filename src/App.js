// the default template and content for React
/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
//playing with react
/*import React, { Component } from 'react';  
class App extends Component{  
   render(){  

     var myStyle = {  
         fontSize: 80,  
         fontFamily: 'Courier',  
         color: '#003300'  
      }  

      return(  
         <div>  
            <h1>JavaTpoint {25+50}</h1>  
          <h2>Training Institutes</h2>  
            <p data-demoAttribute= "demo">This website contains the best CS tutorials.</p>  
         </div>  
      );  
   }  
}  
export default App;*/


/*/ the react App from which all other classes are run
import React,{Component} from 'react';
class App extends React.Component{
  constructor(){// use constructor to hold states
    super();// make it accessible to other groups
    this.state= {displayBio: true};
    this.state= {// the various state
      data: // the data held
      [
      {
        "name": "Abhishek"
      },
      {
        "name": "Saharsh"
      },
      {
        "name": "Ajay"
      }
      ]
    }
  }

// rendering the student name class
//map the data to the item in rendering then to the list bullets-->
  render(){ 
        const bio= this.state.displayBio?(
         <div>  
                  <p><h3>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h3></p>   
            </div>  
              ) : null; 

    return(
    <div>
      <StudentName/>
        <ul>
         {this.state.data.map((item)=> <List data= {item}/>)}
        </ul> 

        <First/>
        <Second/>
        <Third/>
<h1> Welcome to JavaTpoint!!  </h1>  
       
    </div>
    );
  }
}

         
class StudentName extends React.Component{///displays student name
  render(){
    return(
    <div>
      <h1>Student Name Detail</h1>
    </div>
    );
  }
}

class List extends React.Component{// displays studentlist
  render(){
    return(
    <ul>
    <li>{this.props.data.name}</li>
    </ul>
    );
  }
}

class First extends React.Component{// displays first head
  render(){
    return(
    <div>
    <h1>JavaTpoint</h1>
    </div>
    );
  }
}

class Second extends React.Component{// displays second head
  render(){
    return(
    <div>
    <h2>www.JavaTpoint.com</h2>
     <p>This websites contains the great CS tutorial.</p> 
    </div>
    );
  }
}

class Third extends React.Component{// displays third head
  render(){
    return(
    <div>
    <h1>OrigiGbonks</h1>
    </div>
    );
  }
}
 
*/

/*import React, { Component } from 'react';  
import PropTypes from 'prop-types';
class App extends React.Component {  
 constructor() {  
      super();        
      this.state = { displayBio: false }; 
      console.log('Component this', this)//
      this.toggleDisplayBio= this.toggleDisplayBio.bind(this); // without binding cannot access the toggleD
      }  
      toggleDisplayBio(){
        this.setState({displayBio:! this.state.displayBio})
      }
      render() {  
          const bio = this.state.displayBio ? (  
              <div>  
                  <p><h3>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h3></p>   
            </div>  
              ) : null;  
              return (  
                  <div>  
                      <h1> Welcome to {this.props.name}!! </h1>  
                      { bio } 
                    { this.state.displayBio?(
                     <div>
 <p><h4>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h4></p>  
<button onClick={this.toggleDisplayBio}>Show Less</button>
 </div>):(
              <div>  
                 <button onClick={this.toggleDisplayBio}> Read More </button>  
                              </div> 
                     )

                     }

                <h1>ReactJS Props validation example</h1>  
              <table>  
                  <tr>  
                      <th>Type</th>  
                      <th>Value</th>  
                      <th>Valid</th>  
                  </tr>  
                <tr>  
                      <td>Array</td> 
                        <td>{this.props.propArray}</td>
                        <td>{this.props.propArray?"true":"False"}</td>
                      </tr> 
<tr>  
                      <td>Boolean</td>  
                      <td>{this.props.propBool ? "true" : "False"}</td>  
                      <td>{this.props.propBool ? "true" : "False"}</td>  
                  </tr>  
                  <tr>  
                      <td>Function</td>  
                      <td>{this.props.propFunc(5)}</td>  
                      <td>{this.props.propFunc(5) ? "true" : "False"}</td>  
                  </tr>  
                  <tr>  
                      <td>String</td>  
                      <td>{this.props.propString}</td>  
                      <td>{this.props.propString ? "true" : "False"}</td>  
                  </tr>  
                  <tr>  
                      <td>Number</td>  
                      <td>{this.props.propNumber}</td>  
                      <td>{this.props.propNumber ? "true" : "False"}</td>  
                  </tr>  
          
                

                      </table>

                  </div>  
              );  
     }  
}  
 


App.propTypes ={
    propArray: PropTypes.array.isRequired,  
    propBool: PropTypes.bool.isRequired,  
    propFunc: PropTypes.func,  
    propNumber: PropTypes.number,  
    propString: PropTypes.string,

}







App.defaultProps={
    name:"Robogbo2",
    propArray: [1,2,3,4,5],  
    propBool: true,  
    propFunc: function(x){return x+5},  
    propNumber: 1,  
    propString: "JavaTpoint", 
}

*/
/*
import React, { Component } from 'react';  
import ReactDOM from 'react-dom';   
class App extends Component {  
  constructor(props){  
    super(props);  
    this.state = {  
         data: 'www.javatpoint.com',
            inputTextValue: 'initial value',
            msg:  "Welcome to JavaTpoint",  
            hello: "JavaTpoint"
      };
    this.updateSetState = this.updateSetState.bind(this);    
    this.handleEvent = this.handleEvent.bind(this);  
    this.forceUpdateState = this.forceUpdateState.bind(this); 
    this.findDomNodeHandler1 = this.findDomNodeHandler1.bind(this);  
    this.findDomNodeHandler2 = this.findDomNodeHandler2.bind(this);
    this.changeState = this.changeState.bind(this)  
  };  
findDomNodeHandler1() {  
       var myDiv1 = document.getElementById('myDivOne');  
       ReactDOM.findDOMNode(myDiv1).style.color = 'red';  
   }  
   findDomNodeHandler2() {  
       var myDiv2 = document.getElementById('myDivTwo');  
       ReactDOM.findDOMNode(myDiv2).style.color = 'blue';  
   }  

//the same thing using arrows as against functions with this

handleEvent = () => {  
    console.log(this.props);  
  } 

  handleEvent(){  
    console.log(this.props);  
}
updateSetState() {  
       this.setState({  
          msg:"Its a best ReactJS tutorial"  
       }); 
  }  

forceUpdateState() {  
      this.forceUpdate();  
   };


 


  render() {  
    return (  
      <div className="App">  
    <h2>React Constructor Example</h2>  
    <input type ="text" value={this.state.data} />  
        <button onClick={this.handleEvent}>Please Click</button>  


<div>  
             <h1>{this.state.msg}</h1>  
             <button onClick = {this.updateSetState}>SET STATE</button>  
         </div> 

 <div>  
             <h1>Example to generate random number</h1>  
             <h3>Random number: {Math.random()}</h3>  
             <button onClick = {this.forceUpdateState}>ForceUpdate</button>  
         </div>  


<div>  
             <h1>ReactJS Find DOM Node Example</h1>  
             <button onClick = {this.findDomNodeHandler1}>FIND_DOM_NODE1</button>  
             <button onClick = {this.findDomNodeHandler2}>FIND_DOM_NODE2</button>  
             <h3 id = "myDivOne">JTP-NODE1</h3>  
             <h3 id = "myDivTwo">JTP-NODE2</h3>  
         </div>  

             <div>  
              <h1>ReactJS components Lifecycle</h1> 
             <h3>Hello {this.state.hello}</h3>  
             <button onClick = {this.changeState}>Click Here!</button>          
         </div>  


      </div>  
    );  
  } 

  componentWillMount() {  
      console.log('Component Will MOUNT!')  
   }  
   componentDidMount() {  
      console.log('Component Did MOUNT!')  
   }  
   changeState(){  
      this.setState({hello:"All!!- Its a great reactjs tutorial."});  
   }  
   componentWillReceiveProps(newProps) {      
      console.log('Component Will Recieve Props!')  
   }  
   shouldComponentUpdate(newProps, newState) {  
      return true;  
   }  
   componentWillUpdate(nextProps, nextState) {  
      console.log('Component Will UPDATE!');  
   }  
   componentDidUpdate(prevProps, prevState) {  
      console.log('Component Did UPDATE!')  
   }  
   componentWillUnmount() {  
      console.log('Component Will UNMOUNT!')
      } 
}  

*/
/*/forms uncontrolled
import React, { Component } from 'react';  
class App extends React.Component {  
  constructor(props) {  
      super(props);  
      this.updateSubmit = this.updateSubmit.bind(this);  
      this.input = React.createRef();  
  }  

 updateSubmit(event) {  
      alert('You have entered the UserName and CompanyName successfully.');  
      event.preventDefault();  
  }  

render() {  
    return (  
      <form onSubmit={this.updateSubmit}>  
        <h1>Uncontrolled Form Example</h1>  
        <label>Name:  
            <input type="text" ref={this.input} />  
        </label>  
        <label>  
            CompanyName:  
            <input type="text" ref={this.input} />  
        </label>  
        <input type="submit" value="Submit" />  
      </form>  
    );  
  }  




}
*/

/*////controlled and multiple
import React, { Component } from 'react';  
class App extends React.Component {  
  constructor(props) {  
      super(props);  
      
      this.state = {value: '',
      personGoing:true,
      numberOfOersons: 5};  

      this.handleChange = this.handleChange.bind(this);  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange=this.handleInputChange.bind(this);  
  }  

handleInputChange(event){
const target=event.target;
const value=target.type==='checkbox'? target.checked:target.value;
const name=target.name;
this.state({[name]:value});
}


handleChange(event) {  
      this.setState({value: event.target.value});  
  }  
  handleSubmit(event) {  
      alert('You have submitted the input successfully: ' + this.state.value);  
      event.preventDefault();  
  }  

render() {  
      return (  
          <div>
          <form onSubmit={this.handleSubmit}>  
            <h1>Controlled Form Example</h1>  
            <label>  
                Name:  
                <input type="text" value={this.state.value} onChange={this.handleChange} />  
            </label>  
            <input type="submit" value="Submit" />  
         </form>  
     
     <div>\
<form>
 <h1>Multiple Input Controlled Form Example</h1>
<label>
is Person going:

<input
name="personGoing"
type="checkbox"
checked={this.state.personGoing}  
onChange={this.handleInputChange} />

</label>
<br/>

<label>  
                 Number of persons:  
                 <input  
                 name="numberOfPersons"  
                 type="number"  
                 value={this.state.numberOfPersons}  
                 onChange={this.handleInputChange} />  
             </label>  



</form>
</div>
</div>
      );  
  }  
}  
*/
/*
import React, { Component } from 'react';    
// Message Component   
function Message(props)   
{   
    if (props.isLoggedIn)   
        return <h1>Welcome Back!!!</h1>;   
    else  
        return <h1>Please Login First!!!</h1>;   
}   


// Login Component   
function Login(props)   
{   
   return(   
           <button onClick = {props.clickInfo}> Login </button>   
       );   
}    

/// Logout Component   
function Logout(props)   
{   
    return(   
           <button onClick = {props.clickInfo}> Logout </button>   
       );   
}





  
class App extends React.Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            personGoing: true,  
            numberOfPersons: 5,
            isLoggedIn:false  
        };  
        this.handleInputChange = this.handleInputChange.bind(this);  
        this.handleLogin = this.handleLogin.bind(this);  
        this.handleLogout = this.handleLogout.bind(this); 



   }  

handleLogin()   
    {   
        this.setState({isLoggedIn : true});   
    }   

    handleLogout()   
    {   
        this.setState({isLoggedIn : false});   
    }   
       


   handleInputChange(event) {  
       const target = event.target;  
       const value = target.type === 'checkbox' ? target.checked : target.value;  
       const name = target.name;  
       this.setState({  
           [name]: value  
       });  
  }  



  render() {  
    var numbers = [1, 2, 3, 4, 5];   
const multiplyNums = numbers.map((number)=>{   
    return (number * 5);   
});   
      return (  

        <div>
 <>  <h1>Home</h1> </>
          <form>  
              <h1>Multiple Input Controlled Form Example</h1>  
              <label>  
                  Is Person going:  
                  <input  
                    name="personGoing"  
                    type="checkbox"  
                    checked={this.state.personGoing}  
                    onChange={this.handleInputChange} />  
             </label>  
             <br />  
             <label>  
                 Number of persons:  
                 <input  
                 name="numberOfPersons"  
                 type="number"  
                 value={this.state.numberOfPersons}  
                 onChange={this.handleInputChange} />  
             </label>  
         </form>  
  <div>
<h1> Conditional Rendering Example </h1>  
<Message isLoggedIn = {this.state.isLoggedIn}/>  
 {   
                    (this.state.isLoggedIn)?(   
                    <Logout clickInfo = {this.handleLogout} />   
                    ) : (   
                    <Login clickInfo = {this.handleLogin} />   
                    )   
                }   
     </div>

<div> <ul>{listItems}</ul> </div>


  </div>
     );  
  }  
}  
export default App;

const myList = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa'];   
const listItems = myList.map((myList)=>{   
    return <li>{myList}</li>;   
});   
/*/

import React from 'react';  
import ReactDOM from 'react-dom';  
import './App.css';  
  
class App extends React.Component {  
  render() {  
    return (  
      <div>  
      <h1>Hello JavaTpoint</h1>  
      <p>Here, you can find all CS tutorials.</p>  
      </div>  
    );  
  }  
}  
export default App; 



