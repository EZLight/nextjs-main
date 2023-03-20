import React from 'react'
import Dropdown from "../Dropdown"
import Image from "../image"
import {AbsLogo} from '../../styles/images'
import Header from "../Header"
import Footer from "../Footer"
import * as Navigation from '../../styles/styles'
import Body from '../Body'


export default function Mobile(props) {
  return (
    <div className="w3-content w3-hide-medium w3-hide-large">   <section  >           
    <button className={Navigation.RegisterButton}>Get Started</button>
    <button className={Navigation.MemberButton}>Sign In</button>
    <Dropdown title="Menu"  demo="MenuMobile" classType="w3-tiny w3-border w3-rightbar w3-button w3-black w3-bar-item"><Header /></Dropdown>
</section>

<section className=''>
<div className=''><Body title="News">{props.children}</Body></div>
<Image imgSrc={AbsLogo} className="w3-image" style={{width:'auto'}}/>


</section>
<section>
<Footer settings="w3-tiny w3-container w3-center" />
 </section>
 </div>
  )
}
