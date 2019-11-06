import React, { useState, useEffect } from 'react'
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'
import Loader from 'react-loader-spinner'

import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md'

import api from '~/services/api'
import history from '~/services/history'

import { Container, MeetupItens, Content } from './styles'

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [meetups, setMeetups] = useState([])

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get(`organizer`)

      const data = response.data.map(meetup => {
        return {
          ...meetup,
          dateFormatted: format(
            parseISO(meetup.date),
            "dd 'de' MMMM', às' H:mm'h'",
            {
              locale: pt,
            }
          ),
        }
      })

      setMeetups(data)
      setLoading(false)
    }

    loadMeetups()
  }, [])

  function handleSubmit() {
    history.push('/newedit', { status: 'new' })
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
          {loading && (
            <div className="loading">
              <Loader type="TailSpin" color="#9a68ed" width={32} height={32} />
            </div>
          )}

          {!loading && !meetups.length ? (
            <MeetupItens flag>
              <strong>não há dados para esse usuário</strong>
            </MeetupItens>
          ) : (
            !loading &&
            meetups.map(meetup => (
              <MeetupItens key={meetup.id} past={meetup.past}>
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
