import React, {useState} from "react";

function FunctionalComponent(props){
    const [count, setCount] = useState(0);
    const [changeName, setChangeName] =useState("");

    // const {name, number, company, setName} = props
    // so by writing this we can call name instead of props.name 
    return(
        <div>
            <p>This is a Functional Component</p>
            <button onClick={()=> setCount(count+1)}> Click on me to increment the count by 1</button>
            
            <button onClick={()=> setCount(count-1)}> Click on me to decrement the count by 1</button>
            <h1>{count}</h1>
            <h4> My Name is {props.name}, and i am from {props.company}, which is {props.number}, times bigger than apple</h4>
            <input type="text" onChange={(a)=> setChangeName(a.target.value)}/>
            <button onClick={()=> props.setName(changeName)}> Change name </button>
        </div>
    )

}
 export default FunctionalComponent