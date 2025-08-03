import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="flex items-center pl-16 pt-7.5 pb-8.5 w-auto h-auto font-neue">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/icons/Logo.svg" alt="logo" />
                    <p className='font-bold text-4xl leading-11'>Kotuma</p>
                </Link>
            <ul className="list-none flex gap-4 items-center">
                <div className='flex gap-2.5 items-center ml-44 w-auto h-auto font-normal text-lg leading-7'>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/About">ABOUT US</Link></li>
                <li><Link to="/Services">SERVICES</Link></li>
                <li><Link to="/Experts">EXPERTS</Link></li>
                <li><Link to="/Contact">CONTACT US</Link></li>
                </div>
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