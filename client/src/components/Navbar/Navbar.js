import { useState } from 'react'
import { MenuItems } from "./MenuItems"
import { Button } from '../Button'
import './Navbar.css'

const Navbar = () => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }
    
    return (
        <nav className="NavbarItems">
            <h1 className='navbar-logo'>Lessons App</h1>
            <div className='menu-icon' onClick={handleClick}>
                <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={active ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>{item.title}</a>
                        </li>
                    )
                })}
            </ul>
            <Button>Sign Up</Button>
        </nav>
    )
}

export default Navbar
