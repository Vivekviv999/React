
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import {useState} from "react";
import {Routes, Route} from "react-router-dom";



function App() {
  const company = "devtown" //dynamic value
  const [name, setName] = useState("vivek")



  return (
    <Routes>
      <Route path='/' element={<ClassComponent/>}/>
        <Route path='/functional-comp' element={<FunctionalComponent/>}/>
    </Routes>
    // <div className="App">
    //   <h2>Hello World!</h2>
    //   <ClassComponent/>
    //   <FunctionalComponent name={name} number={99} company={company} setName={setName}/>
    // </div>
  );
}

export default App;
