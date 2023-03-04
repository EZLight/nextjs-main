import React from 'react'
import {ABSTabletBanner} from '../../styles/images'
import Image from "../image"


function Tablet(props) {
  return (
    <div>
    
        <section className="w3-content w3-hide-small w3-hide-large" > 

            <Image imgSrc={ABSTabletBanner} className="w3-image" style={{width:'auto'}}/>

        </section>
    
    </div>
  )
}

export default Tablet