import React from 'react'
import {ABSTabletBanner} from '../../styles/images'
import Image from "../image"
import * as NavTab from '../../styles/styles'
import Dropdown from '../Dropdown'
import HeaderTab from '../Header'
import { BodyTab } from '../Body'
import Footer from '../Footer'

function Tablet(props) {
  return (
    <div className='w3-content w3-hide-small w3-hide-large w3-amber'>
     <button className={NavTab.RegisterButtonTab}>Get Started</button>
    <button className={NavTab.MemberButtonTab}>Sign In</button>
    <Dropdown title="Menu" demo="MenuTablet" classType=" w3-border w3-rightbar w3-button w3-black w3-bar-item"><HeaderTab /></Dropdown>
    <article className='w3-card-4 w3-opacity-min'>
<div><BodyTab title="News" /></div>
          </article>
        <section className="" > 

            <Image imgSrc={ABSTabletBanner} className="w3-image" style={{width:'992px'}}/>
      
        </section>
              <section><Footer settings="w3-container w3-center"></Footer></section>

    </div>
  )
}

export default Tablet