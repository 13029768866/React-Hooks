import React, {useState} from 'react';

function Demo2() {
    const [ age,setAge] = useState(18)
    const [ sex,setSex] = useState("男")
    const [ work,setWork] = useState("大力出奇迹")
    return (
        <div>
            <p>Wzj今年: {age}岁</p>
            <p>性别: {sex}</p>
            <p>工作: {work}</p>
        </div>
    )
   
}

export default Demo2;