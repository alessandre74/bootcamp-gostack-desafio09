import React from 'react'
import { Link } from 'react-router-dom'
import { MdEdit, MdAddBox, MdDateRange, MdLocationOn } from 'react-icons/md'

import logoMettup from '~/assets/meetup.png'

import { Container, Content, DivButton } from './styles'

export default function Details() {
  const emailPalestrante = 'alessandre@gmail.com.br'
  const localDate = '24 de Junho, às 20hs'
  const location = 'Rua Guilherme Gembala, 260'
  return (
    <Container>
      <Content>
        <header>
          <div>
            <strong>Meetup de React Native</strong>

            <DivButton>
              <Link to="/">
                <MdEdit size={28} color="#fff" />
                <span>Editar</span>
              </Link>
            </DivButton>

            <DivButton isColor>
              <Link to="/">
                <MdAddBox size={28} color="#fff" />
                <span>Cancelar</span>
              </Link>
            </DivButton>
          </div>
        </header>

        <section>
          <img src={logoMettup} alt="" />
          <div>
            <p>
              O Meetup de React Native é um evento que reune a comunidade de
              desenvolvimento mobile utilizando React a fim de compartilhar
              conhecimento. Todos são convidados.
            </p>

            <p>
              Caso queira participar como palestrante do meetup envie um e-mail
              para {emailPalestrante}
            </p>
          </div>
        </section>

        <footer>
          <div>
            <MdDateRange size={28} color="#999" />
            <span>{localDate}</span>
          </div>

          <div>
            <MdLocationOn size={28} color="#999" />
            <span>{location}</span>
          </div>
        </footer>
      </Content>
    </Container>
  )
}
