import * as Navigation from '../styles/styles'
import ABSButton from './Button'

function Header() {
    return (
        <header  className={Navigation.NavBar} style={{width:'75px', height:'250px'}}>
<button className={Navigation.HomeButton}>Home</button>
<button className={Navigation.NavButton}>Projects</button>
<button className={Navigation.NavButton}>Blog</button>
<button className={Navigation.NavButton}>Contact</button>
<button className={Navigation.NavButton}>About</button>
<button className={Navigation.NavButton}>Members</button>
<button className={Navigation.NavButton}>Staff</button>



        </header>
    )
}

export default Header