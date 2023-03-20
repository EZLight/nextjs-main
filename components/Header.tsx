import * as Navigation from '../styles/styles'
import Link from 'next/link'

export function Header() {
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

export function HeaderTab (){
    <header  className={Navigation.NavBarTab} style={{width:'75px'}}>
    <button className={Navigation.HomeButtonTab}><Link href="/">Home</Link></button>
    <button className={Navigation.NavButtonTab}><Link href="/projects">Projects</Link></button>
    <button className={Navigation.NavButtonTab}><Link href="https://www.antiblasphemystudios.com">Blog</Link></button>
    <button className={Navigation.NavButtonTab}><Link href="/contact">Contact</Link></button>
    <button className={Navigation.NavButtonTab}><Link href="/about">About</Link></button>
    <button className={Navigation.NavButtonTab}><Link href="/members">Members</Link></button>
    <button className={Navigation.NavButtonTab}><Link href="/staff">Staff</Link></button>
</header>
}

export default Header