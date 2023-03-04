import React from 'react'
import Dropdown from "../Dropdown"
import Image from "../image"
import {AbsLogo} from '../../styles/images'
import Header from "../Header"
import Footer from "../Footer"
import * as Navigation from '../../styles/styles'


export default function Mobile(props) {
  return (
    <div>   <section className="w3-content " >           
    <button className={Navigation.RegisterButton}>Get Started</button>
    <button className={Navigation.MemberButton}>Sign In</button>
    <Dropdown title="Menu" color="black" demo="Menu" classType="w3-border w3-rightbar w3-button w3-black w3-bar-item"><Header /></Dropdown>
<section className="w3-display-container">
<Image imgSrc={AbsLogo} style={{width:'250px'}}/>
<article className="w3-display-topleft">
<Dropdown title={props.title} color="black" demo="News" classType="w3-button w3-amber w3-block w3-border w3-border-black w3-rightbar">
<p className="w3-tiny w3-opacity-min w3-white">{props.children}</p>
</Dropdown>

</article>

</section>
<Footer size="w3-tiny" />
 </section></div>
  )
}
