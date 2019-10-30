import React from 'react'
// import { useField } from '@rocketseat/unform'

import logoMettup from '~/assets/meetup.png'
import { Container } from './style'

export default function MeetupInput() {
  function handleChange() {}
  return (
    <Container>
      <label htmlFor="avatar">
        <img src={logoMettup} alt="" />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  )
}
