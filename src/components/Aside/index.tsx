import React, { useState } from 'react';
import Toggle from '../Toggle';

import logImg from '../../assets/logo.svg';

import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp, MdClose, MdMenu } from 'react-icons/md';

import { Container, Header, MenuContainer, MenuItemLink, MenuItemButton, LogImg, Title, ThemeToggleFooter, ToggleMenu } from './styles';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  const { toggleTheme, theme } = useTheme();

  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened);
  }

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  }

  return (
    <Container menuIsOpen={toggleMenuIsOpened}>
      <Header>
        <ToggleMenu onClick={handleToggleMenu}>
          {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
        </ToggleMenu>

        <LogImg src={logImg} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>

        <MenuItemLink href="/">
          <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink href="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>

        <MenuItemLink href="/list/exit-balance">
          <MdArrowDownward />
          Saídas
        </MenuItemLink>

        <MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </MenuItemButton>

      </MenuContainer>

      <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
        <Toggle
          labelLeft="Light"
          labelRight="Dark"
          checked={darkTheme}
          onChange={handleChangeTheme}
        />
      </ThemeToggleFooter>
    </Container>
  );
}

export default Aside;