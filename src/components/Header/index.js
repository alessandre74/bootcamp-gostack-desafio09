import React from 'react'
import { Link } from 'react-router-dom'

import logo from '~/assets/logo.png'

import { Container, Content, Profile } from './styles'

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="Meetup" />
          </Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Alessandre Livramento</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
          </Profile>
          <button type="button">Sair</button>
        </aside>
      </Content>
    </Container>
  )
}
