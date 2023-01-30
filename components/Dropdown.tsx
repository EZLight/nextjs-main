import React from 'react'
import Header from './Header'



export default function Dropdown(){
    
    function myFunction() {
        var x = document.getElementById("Demo");
        if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
        } else { 
          x.className = x.className.replace(" w3-show", "");
        }
      }
return(
    <div>

    <button onClick={myFunction} className="w3-button w3-circle w3-black">Menu</button>
 <section className="w3-dropdown-click">
    <article id="Demo" className="w3-dropdown-content w3-bar-block" >
     <Header />
    </article>
  </section>
    </div>
)
}