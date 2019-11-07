import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import { MdAddCircleOutline } from 'react-icons/md'
import { Container, Content } from './sytles'

import { updateProfileRequest } from '~/store/modules/user/actions'
import { DivSaveButton } from '../NewEdit/styles'

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório!'),
  email: Yup.string()
    .email('Insira um e-mail válido!')
    .required('O e-mail é obrigatório!'),
  oldPassword: Yup.string().when('password', (password, field) =>
    password ? field.required('Senha atual é requerida!') : field
  ),
  password: Yup.string()
    .transform(value => (!value ? null : value))
    .nullable()
    .min(6, 'A senha deve ter pelo menos 6 caracteres!'),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field.required().oneOf([Yup.ref('password')], 'Senhas não conferem!')
      : field
  ),
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
          <Input name="password" type="password" placeholder="Nova senha" />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirmação de senha"
          />
          <DivSaveButton marginTop="8px">
            <button type="submit">
              <MdAddCircleOutline size={20} color="#fff" />
              <strong>Salvar perfil</strong>
            </button>
          </DivSaveButton>
        </Form>
      </Content>
    </Container>
  )
}
