import React,{useContext} from "react";
import {UPDATA_COLOR,ColorContext} from "./Color";

function Buttons() {
    const {dispatch} = useContext(ColorContext)
    return (
        <div>
            <button onClick={()=>{dispatch({type:UPDATA_COLOR,color:"red"})}}>红色</button>
            <button onClick={()=>{dispatch({type:UPDATA_COLOR,color:"green"})}}>绿色</button>
        </div>
    )
}
export default Buttons;