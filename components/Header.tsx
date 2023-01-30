import * as Navigation from '../styles/styles'


function Header() {
    return (
        <header  className={Navigation.NavBar}>

<section className='w3-padding w3-margin'>
<button className={Navigation.HomeButton}>Home</button>
<button className={Navigation.NavButton}>Projects</button>
<button className={Navigation.NavButton}>Blog</button>
<button className={Navigation.NavButton}>Contact</button>
<button className={Navigation.NavButton}>Staff</button>
<button className={Navigation.NavButton}>About</button></section>


        </header>
    )
}

export default Header