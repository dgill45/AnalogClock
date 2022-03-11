import React, {useEffect, useState} from "react"
import './Clock.css'

export default function Clock(){

    const [cTime, setTime] = useState(new Date().toLocaleString())

    useEffect(() => {
        setInterval(() =>{
            setTime(new Date().toLocaleString())
        }, 1000);
    })

    return(
        <section className="App-Clock">
                <div onClick = {() =>setTime(cTime)}>{cTime}</div>
        </section>
    )

}