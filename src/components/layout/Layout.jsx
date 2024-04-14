import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Logo from '../common/Logo'
import { Flex } from '@chakra-ui/react'

function Layout() {
    return (
        <Flex minH={'100vh'}>
            <Header />
            <main id="main">
                <Outlet />
            </main>
            {/* <Footer /> */}
        </Flex>
    )
}

export function LayoutType2() {
    return (
        <>
            <Logo />
            <Outlet />
        </>
    )
}

export default Layout
