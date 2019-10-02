import React from 'react'
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md'
import api from '~/services/api'

import { Container, Content, MeetupItens } from './styles'

export default function Dashboard() {
  api.get('meetupUserLogged')
  return (
    <Container>
      <Content>
        <header>
          <strong>Meus meetups</strong>
          <button type="button">
            <MdAddCircleOutline size={24} color="#fff" />
            <strong>Novo meetup</strong>
          </button>
        </header>

        <ul>
          <MeetupItens>
            <strong>Meus Meetups</strong>
            <div>
              <span>24 de junho, ás 20h</span>
              <button type="button">
                <MdChevronRight size={28} color="#fff" />
              </button>
            </div>
          </MeetupItens>

          <MeetupItens>
            <strong>Meus Meetups</strong>
            <div>
              <span>24 de junho, ás 20h</span>
              <button type="button">
                <MdChevronRight size={28} color="#fff" />
              </button>
            </div>
          </MeetupItens>
          <MeetupItens>
            <strong>Meus Meetups</strong>
            <div>
              <span>24 de junho, ás 20h</span>
              <button type="button">
                <MdChevronRight size={28} color="#fff" />
              </button>
            </div>
          </MeetupItens>
          <MeetupItens>
            <strong>Meus Meetups</strong>
            <div>
              <span>24 de junho, ás 20h</span>
              <button type="button">
                <MdChevronRight size={28} color="#fff" />
              </button>
            </div>
          </MeetupItens>
        </ul>
      </Content>
    </Container>
  )
}
