import React, { Children } from 'react'
import Header from './Header'



export default function Dropdown(props){
    
    function myFunction() {
        var x = document.getElementById(`${props.demo}`);
        if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
        } else { 
          x.className = x.className.replace(" w3-show", "");
        }
      }
return(
    <div>

    <button onClick={myFunction} className={`${props.classType}`}>{props.title}</button>
 <section className="w3-dropdown-click">
    <article id={`${props.demo}`} className="w3-dropdown-content w3-transparent w3-bar-block" >
     {props.children}
    </article>
  </section>
    </div>
)
}