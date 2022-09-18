import React from 'react'

export default function ToDo(props){
  const styles = { 
      textDecoration: props.tasks.isDone ? "line-through" : "" ,
      backgroundColor : props.tasks.isDone ? "#000000" : "transparent",
      color : props.tasks.isDone ? "white" : "black"
  }
  return (
      <div id='todo-item' style={styles}>
          <span  onClick={() => props.markTask(props.id)} >{props.tasks.todo}</span>
      </div>
  )
}
