import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'


export const Nav = styled.nav`
  // background: #0D3B66;
  background: ${({scrollNav}) => (scrollNav ? 'rgba(255, 255, 255, 0.8)' : 'transparent')};
  height: 80px;
  margin-top:-80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  position: sticky;
  top: 0;
  z-index: 10;


  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 8px;
  z-index: 1;
  width: 100%;
  // padding: 0 24px;
  max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
  // color: #fff;
  color: #0D3B66;
  justify-self: flex-start;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: -2rem;
  margin-right: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`

export const MobileIcon= styled.div`
  display: none;

  @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #fff;

  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const NavItem= styled.li`
  height: 80px;
`

export const NavLinks = styled(LinkS)`
  // color: #fff;
  color: #0D3B66;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;

    // border: 0.01rem solid #0D3B66;
    // background: #01BF71;
    color: #01BF71;
    transform: translate(-5%, 3%);
    font-weight: 600;
  }

  &.active {
    border-bottom: 8px solid #01bf71;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 8px;
  background: #C3D8E3;
  white-space: nowrap;
  padding: 8px 20px;
  color: #0D3B66;
  font-size: 0.9rem;
  text-transform: uppercase;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.4s ease-in-out;
    background: #01BF71;
    color: #fff;
  }




`
