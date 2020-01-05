import React,{useContext} from "react";
import { ColorContext } from "./Color";

function ShowArea() {
    const { color } = useContext(ColorContext)
    return (
        <div style={{color: color}}>
            我的颜色是{color}
        </div>
    )
}

export default ShowArea;