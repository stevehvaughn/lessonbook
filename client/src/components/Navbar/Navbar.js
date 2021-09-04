import { MenuItems } from "./MenuItems"
import { Button } from '../Button'
import { toggleActive } from "../../redux/actions/navbarActions"
import { logoutAction } from "../../redux/actions/userActions"
import { useDispatch, useSelector } from 'react-redux'
import './Navbar.css'

const Navbar = () => {    
    const dispatch = useDispatch()

    function handleClick() {
       dispatch(toggleActive())
    }

    function handleLogOut() {
        dispatch(logoutAction())
    }
    
    const active = useSelector(state => state.navbar.active)
    const user = useSelector(state => state.user)
    
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
            {user.isLoggedIn 
            ? <Button onClick={handleLogOut}>Log Out</Button>
            : <Button>Sign Up</Button>
            }
        </nav>
    )
}

export default Navbar
