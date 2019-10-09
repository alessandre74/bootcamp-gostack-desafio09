import React from 'react'
import { Form, Input } from '@rocketseat/unform'
import { MdAddCircleOutline } from 'react-icons/md'
import { Container, Content } from './sytles'

export default function Profile() {
  function handleSubmit(data) {
    console.tron.log(data)
  }
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Input name="nome" placeholder="Nome Completo" />
          <Input name="email" type="emai" placeholder="Seu e-mail" />

          <hr />

          <Input name="oldPassword" type="password" placeholder="Senha atual" />
          <Input name="newPassword" type="password" placeholder="Nova senha" />
          <Input
            name="ConfirmPassword"
            type="password"
            placeholder="Confirmação de senha"
          />
          <div>
            <button type="submit">
              <MdAddCircleOutline size={24} color="#fff" />
              <strong>Salvar perfil</strong>
            </button>
          </div>
        </Form>
      </Content>
    </Container>
  )
}
