import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { toast } from 'react-toastify'

import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md'
import { Container, DivButton, Content, Region } from './styles'

import api from '~/services/api'
import history from '~/services/history'

export default function Details({ match }) {
  const { id } = match.params
  const [meetup, setMeetup] = useState({})

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`/meetups/${id}`)

      const data = response.data.map(itens => {
        return {
          ...itens,
          dateFormatted: format(
            parseISO(itens.date),
            "dd 'de' MMMM' de 'yyyy', às' H'h'",
            {
              locale: pt,
            }
          ),
        }
      })

      setMeetup(data[0])
    }
    loadMeetup()
  }, [id])

  function handleSubmit(dados) {
    history.push('/newedit', {
      ...dados,
      date: parseISO(dados.date),
      status: 'edit',
    })
  }

  async function handleCancel() {
    const meetupTitle = meetup.title
    try {
      await api.delete(`/meetups/${id}`)

      toast.success(`${meetupTitle} cancelado com sucesso..!!`)

      history.push('/')
    } catch (error) {
      toast.warn('Falha ao cancelar o Meetup')
    }
  }

  return (
    <Container>
      <Content key={meetup.id}>
        <header>
          <div>
            <h1>{meetup.title}</h1>
            <DivButton>
              <button type="submit" onClick={() => handleSubmit(meetup)}>
                <MdEdit size={20} color="#fff" />
                <span>Editar</span>
              </button>
            </DivButton>

            <DivButton isColor>
              <button type="submit" onClick={() => handleCancel(id)}>
                <MdDeleteForever size={20} color="#fff" />
                <span>Cancelar</span>
              </button>
            </DivButton>
          </div>
        </header>

        <section>
          <img src={meetup.avatar && meetup.avatar.url} alt="Meetup" />

          <div>
            <p>{meetup.description}</p>

            <Region>
              <MdEvent size={28} color="#999" />
              <span>{meetup.dateFormatted}</span>

              <MdPlace size={28} color="#999" />
              <span>{meetup.location}</span>
            </Region>
          </div>
        </section>
      </Content>
    </Container>
  )
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
}
