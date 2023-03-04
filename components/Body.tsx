import React from 'react'
import Dropdown from './Dropdown'

function Body(props) {
  return (
    <article className="">
    <Dropdown title={props.title} color="black" demo="News" width="100%" width2="300px" classType="w3-cell-row w3-tiny w3-block  w3-button w3-amber w3-border w3-border-black w3-rightbar">
    <div className="w3-tiny w3-container w3-cell w3-white w3-opacity-min" >{props.children}</div>
    </Dropdown>
    
    </article>
  )
}

export default Body