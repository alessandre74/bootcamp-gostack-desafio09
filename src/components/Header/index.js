import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { signOut } from '~/store/modules/auth/actions'
import logo from '~/assets/logo.png'

import { Container, Content, Profile } from './styles'

export default function Header() {
  const dispatch = useDispatch()
  const nameUser = useSelector(state => state.user.profile.name)

  function handleSignOut() {
    dispatch(signOut())
  }
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
              <strong>{nameUser}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
          </Profile>
          <button type="button" onClick={handleSignOut}>
            Sair
          </button>
        </aside>
      </Content>
    </Container>
  )
}
