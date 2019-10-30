import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import { MdAddCircleOutline } from 'react-icons/md'
import { Container, Content } from './sytles'

import { updateProfileRequest } from '~/store/modules/user/actions'

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório!'),
  email: Yup.string()
    .email('Insira um e-mail válido!')
    .required('O e-mail é obrigatório!'),
  // oldPassword: Yup.string()
  //   .min(6, 'No mínimo 6 caracteres!')
  //   .required('A senha é obrigatória!'),
})

export default function Profile() {
  const dispach = useDispatch()
  const profile = useSelector(state => state.user.profile)

  function handleSubmit(data) {
    dispach(updateProfileRequest(data))
  }
  return (
    <Container>
      <Content>
        <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome Completo" />
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
              <MdAddCircleOutline size={20} color="#fff" />
              <strong>Salvar perfil</strong>
            </button>
          </div>
        </Form>
      </Content>
    </Container>
  )
}
