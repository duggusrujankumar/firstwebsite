import './App.css';
import Work from './work';

function Superwork(props){

return <div>"this is my work: " {props.work} </div>

}

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to {props.name}'s Page 
      <br/> 
      <div className= "name" >      
         My name is: {props.name} 
         </div>
          <Superwork work="Kitestring"/>

          <Work work="TCS"/>
         
          Tech Stack: QA <br/>
          </header>
    </div>
  );
}

export default App;
