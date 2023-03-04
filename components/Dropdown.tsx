import React from 'react'



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
 <section className="w3-dropdown-click" >
    <article id={`${props.demo}`} style={{textOverflow:'ellipsis',width:'255px'}} className="w3-dropdown-content w3-transparent w3-padding"  >
     {props.children}
    </article>
  </section>
    </div>
)
}