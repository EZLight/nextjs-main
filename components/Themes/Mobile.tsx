import React from 'react'
import Dropdown from "../Dropdown"
import Image from "../image"
import {AbsLogo} from '../../styles/images'
import Header from "../Header"
import Footer from "../Footer"

export default function Mobile(props) {
  return (
    <div>   <section className="w3-content " >
    <Dropdown title="Menu" color="black" demo="Menu" classType="w3-button w3-circle w3-black"><Header /></Dropdown>
<section className="w3-display-container">
<Image imgSrc={AbsLogo} style={{width:'250px'}}/>
<article className="w3-display-topleft">
<Dropdown title={props.title} color="black" demo="News" classType="w3-button w3-circle w3-amber">
<p className="w3-tiny w3-opacity-min w3-container w3-rest w3-gray">{props.children}</p>
</Dropdown>

</article>

</section>
<Footer size="w3-tiny" />
 </section></div>
  )
}
