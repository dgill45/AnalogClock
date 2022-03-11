import React, {useEffect, useState} from "react"

export default function Clock(){

    const [cTime, setTime] = useState(new Date().toLocaleString())

    useEffect(() => {
        setInterval(() =>{
            setTime(new Date().toLocaleString())
        }, 1000);
    })

    return(
        <div>
            <h1>{cTime}</h1>

            <p className="App-clock">
                <button onClick = {() =>setTime(cTime)}>{cTime}</button>
            </p>
        </div>
    )

}