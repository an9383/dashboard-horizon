import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Logo from '../common/Logo'
import { Box, Flex } from '@chakra-ui/react'
import Title from './Title'

function Layout() {
    return (
        <Flex minH={'100vh'}>
            <Header />
            <Box id="main" flex={1} p={5}>
                <Title />
                <Outlet />
            </Box>
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
