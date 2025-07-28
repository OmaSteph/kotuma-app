import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="flex items-center p-4 gap-4">
            <div className="logo">
                <Link to="/">Kotuma</Link>
            </div>
            <ul className="list-none flex gap-4 items-center">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/Experts">Experts</Link></li>
                <li><Link to="/Booking">Booking</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/SignIn">
                <button>Sign In</button>
                </Link></li>
                <li><Link to="/SignUp">
                <button>Sign Up</button>
                </Link></li>
            </ul>
        </nav>
    )
}

export default Navbar