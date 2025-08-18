import Header from '@components/layouts/Header'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

const AuthenticatedLayout = () => {
    return (
        <div className="layout">
            <Header />
            <main className="text-kotumagold font-inter">
            <Navigation />
                <Outlet />
            </main>
        </div>
    )
}

export default AuthenticatedLayout
