import React from 'react'
import api from '~/services/api'

import { Container } from './styles'

export default function Dashboard() {
  api.get('meetupUserLogged')
  return (
    <Container>
      <h1>Dashboard</h1>
    </Container>
  )
}
