import React from "react"
import Track from "./Track"


export default function Tracker(){
    const [data, setData] = React.useState({
        expense:"",
        expenseType:"",
        amount:"",
        date:""
    })

    const [dataArray, setDataArray] = React.useState([])
    function handleChange(e){
        const {name, value, type, checked} = e.target
        setData(prevState =>({
            ...prevState,
            [name] : type ==="checkbox" ? checked : value
        }
        ))
        
    }
    

    function handleSubmit(e){
        e.preventDefault()
        setDataArray(prevState => [...prevState, {
            name : data.expense,
            amount : data.amount,
            date : data.date,
            type : data.expenseType
        }])
        setData(prevState =>({
            ...prevState,
            expense:"",
            expenseType:"",
            amount:"",
            date:""
        }
        ))
        
    }
    const newArray = dataArray.map((i, id) =>{
        return <Track key={id} track={i}/>
    })
    
    
    
   
   
    return(
        <form id="form" onSubmit={handleSubmit}>
            <h1>Expense Tracker</h1>
            <label htmlFor="exp-input">Expense : </label>
            <input type="text" name="expense" placeholder="Enter expense..." required id="exp-input" onChange={handleChange} value={data.expense}/>
            <select name="expenseType" value={data.expenseType} onChange={handleChange}>
                <option value="">..Choose your expense type..</option>
                <option value="credit-card">Credit Card</option>
                <option value="cheque">Cheque</option>
                <option value="cash">Cash</option>
                <option value="mobile-app">Mobile App</option>
            </select>
            <label htmlFor="amount">Amount : </label>
            <input type="number" name="amount" required placeholder="Enter Amount..." id="amt-input" onChange={handleChange} value={data.amount}/>
            <input type="date" value={data.date} name="date" required id="tracker-date" placeholder="Expense Date" onChange={handleChange}/>
            <input type="submit" id="submit-button" />
            <div id="expense-output">
                {newArray}
            </div>
        </form>
    )
}