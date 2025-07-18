import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <header className="header">
                <h1>Kotuma</h1>
                <p>Your one-stop solution for all your needs</p>
            </header>
            <main className="p-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
