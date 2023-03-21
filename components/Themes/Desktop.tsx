import React from 'react'
import * as Navigation from '../../styles/styles'
import Link from 'next/link'
import Image from 'next/image'
import { ABSDesktopBanner } from '../../styles/images'
import Footer from '../Footer'

function Desktop() {
  return (
    <div className='l1 w3-hide-small w3-hide-medium w3-content w3-border w3-border-black'>
<header  className={Navigation.NavBarDT} >
<button className={Navigation.RegisterButtonDT}>Get Started</button>
        <button className={Navigation.MemberButtonDT} >Login</button>
    <button className={Navigation.HomeButtonDT}><Link href="/">Home</Link></button>
    <button className={Navigation.NavButtonDT}><Link href="/projects">Projects</Link></button>
    <button className={Navigation.NavButtonDT}><Link href="https://www.antiblasphemystudios.com">Blog</Link></button>
    <button className={Navigation.NavButtonDT}><Link href="/contact">Contact</Link></button>
    <button className={Navigation.NavButtonDT}><Link href="/about">About</Link></button>
    <button className={Navigation.NavButtonDT}><Link href="/members">Members</Link></button>
    <button className={Navigation.NavButtonDT}><Link href="/staff">Staff</Link></button>
</header>
<section className='w3-black'>
<Image src={ABSDesktopBanner} alt="ABSBanner" width="1400" height="450" />
<h4 className='w3-center w3-small w3-black'>"Creativity in the name of Christ"</h4>
  <h2 className='w3-center w3-amber w3-border w3-border-black'>News</h2>
</section>
<section className=''>
  <article className='w3-card w3-border w3-border-black w3-amber w3-button w3-round-xlarge w3-container w3-cell'>
      <div className="w3-border w3-white w3-panel w3-border-black">Picture</div>
      <div className='w3-black'>Title</div>
      <div className='w3-grey'>Date</div>
  </article>
  <article className='w3-card w3-border w3-border-black w3-amber w3-button w3-round-xlarge w3-container w3-cell'>
      <div className="w3-border w3-white w3-panel w3-border-black">Picture</div>
      <div className='w3-black'>Title</div>
      <div className='w3-grey'>Date</div>
  </article>
  <article className='w3-card w3-border w3-border-black w3-amber w3-button w3-round-xlarge w3-container w3-cell'>
      <div className="w3-border w3-white w3-panel w3-border-black">Picture</div>
      <div className='w3-black'>Title</div>
      <div className='w3-grey'>Date</div>
  </article>
  <article className='w3-card w3-border w3-border-black w3-amber w3-button w3-round-xlarge w3-container w3-cell'>
      <div className="w3-border w3-white w3-panel w3-border-black">Picture</div>
      <div className='w3-black'>Title</div>
      <div className='w3-grey'>Date</div>
  </article>
</section>
<Footer settings="w3-center"/>
    </div>
  )
}

export default Desktop