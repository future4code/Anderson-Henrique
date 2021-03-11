import React from 'react'
import "./CardPequeno.css"

export const CardPequeno = props => {
return (<div className="box">
    <h2>{props.campo}:</h2>
    <span>{props.preenchimento}</span>
</div>)
}