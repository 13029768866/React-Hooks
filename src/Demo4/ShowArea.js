import React,{useContext} from "react";
import { ColorContext } from "./Color";

function ShowArea() {
    const {color} = useContext(ColorContext);
    return(
        <div style={{color: color}}>
            我是什么颜色？
        </div>
    )
}

export default ShowArea;