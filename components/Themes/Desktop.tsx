import React from 'react'
import * as Navigation from '../../styles/styles'
import Link from 'next/link'


function Desktop() {
  return (
    <div className='w3-hide-small w3-hide-medium w3-content'>

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
    </div>
  )
}

export default Desktop