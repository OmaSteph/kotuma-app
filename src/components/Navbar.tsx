import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="mb-2">
            <div className="logo">
                <Link to="/">Kotuma</Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/experts">Experts</Link></li>
                <li><Link to="/booking">Booking</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/signin">Sign In</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar