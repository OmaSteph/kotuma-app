import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <main className="text-kotumagold font-neue">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
