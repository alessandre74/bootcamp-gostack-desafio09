import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'

import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md'

import api from '~/services/api'
import history from '~/services/history'

import { Container, MeetupItens, Content } from './styles'

export default function Dashboard() {
  const idUser = useSelector(state => state.user.profile.id)
  const [meetups, setMeetups] = useState([])
  const flag = meetups.length === 0

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get(`organizer/${idUser}`)

      const dataMeetups = response.data.map(itens => {
        return {
          ...itens,
          dateFormatted: format(
            parseISO(itens.date),
            "dd 'de' MMMM', às' H:mm'h'",
            {
              locale: pt,
            }
          ),
        }
      })

      setMeetups(dataMeetups)
    }

    loadMeetups()
  }, [idUser])

  function handleSubmit() {
    history.push('newedit')
  }

  function handleDetails(id) {
    setMeetups([])
    history.push(`/details/${id}`)
  }

  return (
    <Container>
      <Content>
        <header>
          <h1>Meus meetups</h1>
          <button type="button" onClick={() => handleSubmit()}>
            <MdAddCircleOutline size={20} color="#fff" />
            <strong>Novo meetup</strong>
          </button>
        </header>
        <ul>
          {flag ? (
            <MeetupItens flag>
              <strong>não há dados para esse usuário</strong>
            </MeetupItens>
          ) : (
            meetups.map(meetup => (
              <MeetupItens key={meetup.id} pas={meetup.past}>
                <strong>{meetup.title}</strong>

                <div>
                  <span>{meetup.dateFormatted}</span>

                  <MdChevronRight
                    onClick={() => handleDetails(meetup.id)}
                    size={28}
                    color="#fff"
                  />
                </div>
              </MeetupItens>
            ))
          )}
        </ul>
      </Content>
    </Container>
  )
}
