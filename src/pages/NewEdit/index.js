import React from 'react'
import { MdCameraAlt, MdAddCircleOutline } from 'react-icons/md'
import { Form, Input, Textarea } from '@rocketseat/unform'

import { Container, Content, MImage } from './styles'

export default function NewEdit() {
  function handleSubmit(data) {
    console.tron.log(data)
  }
  return (
    <Container>
      <Content>
        <MImage>
          {/* <Input name="imagemMeetup" /> */}
          <span>
            <MdCameraAlt size={54} color="#ffffff" />
          </span>
          <strong>Selecionar imagem</strong>
        </MImage>

        <Form onSubmit={handleSubmit}>
          <Input name="titulo" placeholder="Título do Meetup" />

          <Textarea name="descricao" placeholder="Descrição completa" />

          <Input name="data" placeholder="Data do meetup" />

          <Input name="localizacao" placeholder="Localização" />
          <div>
            <button type="submit">
              <MdAddCircleOutline size={24} color="#fff" />
              <strong>Salvar meetup</strong>
            </button>
          </div>
        </Form>
      </Content>
    </Container>
  )
}
