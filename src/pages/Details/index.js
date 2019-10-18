import React, { useState, useEffect } from 'react'
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { Link } from 'react-router-dom'
import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md'
import PropTypes from 'prop-types'

import logoMettup from '~/assets/meetup.png'
import { Container, DivButton, Content, Region } from './styles'

import api from '~/services/api'

export default function Details({ location }) {
  const [data, setData] = useState([])
  const { id } = location.state

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`/meetups/${id}`)

      const dataMeetups = response.data.map(itens => {
        return {
          id: itens.id,
          title: itens.title,
          description: itens.description,
          location: itens.location,
          date: format(parseISO(itens.date), "dd 'de' MMMM', às' H'h'", {
            locale: pt,
          }),
        }
      })

      setData(dataMeetups)
    }
    loadMeetup()
  }, [id])

  console.tron.log(data)
  return (
    <Container>
      {data.map(iten => (
        <Content key={iten.id}>
          <header>
            <div>
              <strong>{iten.title}</strong>

              <DivButton>
                <Link to="/newedit">
                  <MdEdit size={20} color="#fff" />
                  <span>Editar</span>
                </Link>
              </DivButton>

              <DivButton isColor>
                <Link to="/">
                  <MdDeleteForever size={20} color="#fff" />
                  <span>Cancelar</span>
                </Link>
              </DivButton>
            </div>
          </header>

          <section>
            <img src={logoMettup} alt="" />
            <div>
              <p>{iten.description}</p>

              <Region>
                <MdEvent size={28} color="#999" />
                <span>{iten.date}</span>

                <MdPlace size={28} color="#999" />
                <span>{iten.location}</span>
              </Region>
            </div>
          </section>
        </Content>
      ))}
    </Container>
  )
}

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
}
