import React, { useEffect, useState } from 'react'
import {FaBars} from 'react-icons/fa'
import { Link } from "react-router-dom"
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { Button } from '@mui/material'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome= () => {
    scroll.scrollToTop()
  }


  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>finanças</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="financiamento"
                smooth={true} duration={500} spy={true}
                exact='true' offset={-80}

              >Financiamento</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="simulacoes"
                              smooth={true} duration={500} spy={true}
                              exact='true' offset={-80}
              >Simulações</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="transparencia"
                              smooth={true} duration={500} spy={true}
                              exact='true' offset={-80}
              >Transparência</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="solucoes"
                              smooth={true} duration={500} spy={true}
                              exact='true' offset={-80}
              >Soluções</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="ajuda"
                              smooth={true} duration={500} spy={true}
                              exact='true' offset={-80}
              >Ajuda</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <Button component={Link} to="/entrar" color='success' variant='contained'>Entrar</Button>
          </NavBtn>
          <NavBtn>
            <Button component={Link} to="/admin" color='primary' variant='contained'>Dashboard</Button>
          </NavBtn>
          <NavBtn>
            <Button component={Link} to="/user" color='primary' variant='contained'> User</Button>
          </NavBtn>
        </NavbarContainer>
      </Nav>


    </>
  )
}

export default Navbar
