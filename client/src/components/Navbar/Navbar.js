import { Button } from '../Button'
import { toggleActive, toggleOff } from "../../redux/actions/navbarActions"
import { logoutAction } from "../../redux/actions/userActions"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './lessonbook_favicon.png'

const Navbar = () => {    
    const dispatch = useDispatch()

    function handleClick() {
       dispatch(toggleActive())
    }

    function closeNavMenu() {
        dispatch(toggleOff())
    }

    function handleLogOut() {
        dispatch(logoutAction())
    }

    const active = useSelector(state => state.navbar.active)
    const user = useSelector(state => state.user)
    
    function renderContent() {
        if (user.isLoggedIn === false) {
            return (
                <>
                <li>
                    <Link onClick={closeNavMenu} className="nav-links" to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link onClick={closeNavMenu} className="nav-links" to="/students">
                        Students
                    </Link>
                </li>
                <li>
                    <Link onClick={closeNavMenu} className="nav-links" to="/teachers">
                        Teachers
                    </Link>
                </li>
                <li>
                    <Link onClick={closeNavMenu} className="nav-links" to="/contact">
                        Contact Us
                    </Link>
                </li> 
                <li>
                    <Link onClick={closeNavMenu} className="nav-links-mobile" to="/signup">
                        Sign Up
                    </Link>
                </li>
                </>
            )
        } else if (user.isLoggedIn && user.teacher === null) {
            return (
                <>
                <li>
                    <Link onClick={closeNavMenu} className="nav-links" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link onClick={closeNavMenu} className="nav-links" to="/create-lesson">
                        New Lesson
                    </Link>
                </li>
                <li>
                    <Link onClick={closeNavMenu} className="nav-links" to="/grades">
                        Grades
                    </Link>
                </li>
                <li>
                    <Link onClick={closeNavMenu} className="nav-links" to="/studio">
                        Studio Info
                    </Link>
                </li>
                <li>
                    <Link className="nav-links-mobile" to="/" onClick={() => { handleLogOut(); closeNavMenu(); }}>
                        Log Out
                    </Link>
                </li>
                </>
            )
        } else {
            return (
                <>
                <li>
                    <Link onClick={closeNavMenu} className="nav-links" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link onClick={closeNavMenu} className="nav-links" to="/practice">
                        Practice Journal
                    </Link>
                </li>
                <li>
                    <Link onClick={closeNavMenu} className="nav-links" to="/grades">
                        Grades
                    </Link>
                </li>
                <li>
                    <Link onClick={closeNavMenu} className="nav-links" to="/past-lessons">
                        Past Lessons
                    </Link>
                </li>
                <li>
                    <Link className="nav-links-mobile" to="/" onClick={() => { handleLogOut(); closeNavMenu(); }}>
                        Log Out
                    </Link>
                </li>
                </>
            )
        }
    }
    
    
    return (
        <nav className="NavbarItems">
            <Link className='navbar-logo-big' to="/">
                <h1 className='navbar-logo'><span><img id='favicon' src={logo} alt='lessonbook-favicon'></img></span> lessonbook</h1>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={active ? "nav-menu active" : "nav-menu"}>
            {renderContent()}
            </ul>
            {user.isLoggedIn 
            ?   <Link to="/">
                    <Button onClick={handleLogOut}>Log Out</Button>
                </Link>
            :   <Link to="/signup">
                    <Button>
                        Sign Up
                    </Button>
                </Link>
            }
        </nav>
    )
}

export default Navbar
