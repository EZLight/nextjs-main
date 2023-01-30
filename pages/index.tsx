
import React from "react";
import Dropdown from '../components/Dropdown'
import Header from "../components/Header";
import {AbsLogo} from '../styles/images'

export default function Home() {


  return (
    <div>
   <section className="w3-content " >
      <Dropdown title="Menu" color="black" demo="Menu" classType="w3-button w3-circle w3-black"><Header /></Dropdown>
<section className="w3-display-container">

<img className="w3-image" src={AbsLogo} style={{width:'350px'}} />
<article className="w3-display-left">
<Dropdown title="News" color="black" demo="News" classType="w3-button w3-circle w3-amber">
  <h5 className=" w3-opacity-min w3-container w3-gray">jklaj;laj;ljalj;</h5>
</Dropdown>

</article>

</section>
  
   </section>
   </div>
  )
}
