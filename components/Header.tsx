import * as Navigation from '../styles/styles'
import Link from 'next/link'

function Header() {
    return (
        <section>
            <header  className={Navigation.NavBar} style={{width:'75px'}}>
                <button className={Navigation.HomeButton}><Link href="/">Home</Link></button>
                <button className={Navigation.NavButton}><Link href="/projects">Projects</Link></button>
                <button className={Navigation.NavButton}><Link href="https://www.antiblasphemystudios.com">Blog</Link></button>
                <button className={Navigation.NavButton}><Link href="/contact">Contact</Link></button>
                <button className={Navigation.NavButton}><Link href="/about">About</Link></button>
                <button className={Navigation.NavButton}><Link href="/members">Members</Link></button>
                <button className={Navigation.NavButton}><Link href="/staff">Staff</Link></button>
            </header>
        </section>
    )
}

export default Header