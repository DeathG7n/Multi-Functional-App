import React from 'react'
export default function Header(){
    const time = new Date()
    const [date, setDate] = React.useState({time})
    const gM = (date.time.getHours() >= 12 && date.time.getHours() <= 23) ? "PM" : "AM"
    let day = ""
  
    function refreshClock() {
        setDate({time})
    }

    React.useEffect(() => {
        setInterval(() => refreshClock, 1000)
    })

    if(date.time.getDay() === 1){
        day = "Monday,"
    }
    if(date.time.getDay() === 2){
        day = "Tuesday,"
    }
    if(date.time.getDay() === 3){
        day = "Wednesday,"
    }
    if(date.time.getDay() === 4){
        day = "Thursday,"
    }
    if(date.time.getDay() === 5){
        day = "Friday,"
    }
    if(date.time.getDay() === 6){
        day = "Saturday,"
    }
    if(date.time.getDay() === 7){
        day = "Sunday,"
    }

    
    
    return(
        <header>
            <h1>MultiApp</h1>
            <p id='time-date'>{date.time.getHours()}:{date.time.getMinutes()} {gM} <span id="day">{day}</span>  {date.time.toLocaleDateString()}</p>
        </header>
    )
}