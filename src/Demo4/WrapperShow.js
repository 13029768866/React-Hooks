import React from "react";
import Buttons from "./Buttons";
import ShowArea from "./ShowArea";
import { Color } from "./Color";

function WrapperShow() {
    return(
        <div>
           <Color>
               <ShowArea/>
               <Buttons/>
           </Color>
        </div>
    )
}

export default WrapperShow;