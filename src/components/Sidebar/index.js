import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElement';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='financiamento' onClick={toggle}>Financiamento</SidebarLink>
          <SidebarLink to='simulacoes' onClick={toggle}>Simulações</SidebarLink>
          <SidebarLink to='transparencia' onClick={toggle}>Transparência</SidebarLink>
          <SidebarLink to='solucoes' onClick={toggle}>Soluções</SidebarLink>
          <SidebarLink to='ajuda' onClick={toggle}>Ajuda</SidebarLink>
          <SidebarLink to='cadastro' onClick={toggle}>Cadastre-se</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/entrar">Entrar</SidebarRoute>
        </SideBtnWrap>


      </SidebarWrapper>

    </SidebarContainer>
  )
}

export default Sidebar
