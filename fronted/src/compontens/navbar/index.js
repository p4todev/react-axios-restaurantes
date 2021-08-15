import React from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {
    Nav,
    NavbarContainer,
    NavbarLogo,
    MobileIcon,
    NavbarMenu,
    NavbarItem,
    NavbarLink,
    NavbarListRestaurants
    
} from './navbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavbarLogo to="/">FindRes</NavbarLogo>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavbarMenu>
                        <NavbarItem>
                            <NavbarLink>Inicio</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink>Sobre Nosotros</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarListRestaurants to="/restaurantes/lista">Restaurantes</NavbarListRestaurants>
                        </NavbarItem>
                    </NavbarMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
