import React from 'react'

export default function Track(props){
    return(
        <p className="exp-list"> You spent ${props.track.amount} on {props.track.name} via {props.track.type} on the {props.track.date}</p>
    )
}
