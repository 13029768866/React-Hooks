import React,{useReducer} from "react";
import {render} from "react-dom";

function ReducerDemo3(){
    const [ count , dispatch] = useReducer(( state , action)=>{
        switch (action) {
            case "add":
                return state + 1;
            case "sub":
                return state - 1;
            default:
                return state;
        }
    },0)

    return(
        <div>
            <p>你做了{count}次</p>
            <button onClick={()=>{dispatch("add")}}>Increment</button>
            <button onClick={()=>{dispatch("sub")}}>Decrement</button>
        </div>
    )
}

export default ReducerDemo3;