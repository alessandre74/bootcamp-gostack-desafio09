import React, { useState, useEffect } from 'react'
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

import api from '~/services/api'

import { Container, MeetupItens } from './styles'

export default function Dashboard() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups')

      const dataMeetups = response.data.map(itens => {
        return {
          id: itens.id,
          title: itens.title,
          date: format(parseISO(itens.date), "dd 'de' MMMM', às' H:mm'h'", {
            locale: pt,
          }),
        }
      })

      setData(dataMeetups)
    }

    loadMeetups()
  }, [])

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <Link to="/newedit">
          <button type="button">
            <MdAddCircleOutline size={24} color="#fff" />
            <strong>Novo meetup</strong>
          </button>
        </Link>
      </header>

      <ul>
        {data.map(iten => (
          <MeetupItens key={iten.id}>
            <strong>{iten.title}</strong>
            <Link
              to={{
                pathname: '/details',
                state: { id: `${iten.id}` },
              }}
            >
              <span>{iten.date}</span>
              <MdChevronRight size={28} color="#fff" />
            </Link>
          </MeetupItens>
        ))}
      </ul>
    </Container>
  )
}
