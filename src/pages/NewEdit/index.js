import React from 'react'
import { Form, Input } from '@rocketseat/unform'
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import { MdAddCircleOutline } from 'react-icons/md'
import { toast } from 'react-toastify'
import DatePicker from '~/components/DatePicker'
import Banner from '~/components/Banner'
import { Container, Content, DivSaveButton } from './styles'
import api from '~/services/api'
import history from '~/services/history'

export default function NewEdit({ location }) {
  const meetup = location.state ? location.state : null

  async function handleSubmit(data) {
    if (meetup.status === 'new') {
      try {
        await api.post('meetups/', data)
        toast.success('Meetup criado com sucesso!')
        history.push('/dashboard')
      } catch (error) {
        const errData = error.response.data
        toast.error(
          errData && errData.error
            ? `Erro editando Meetup : ${errData.error}`
            : 'Erro Editando Meetup, tente novamente!'
        )
      }
    } else if (meetup.status === 'edit') {
      try {
        await api.put(`meetups/${meetup.id}`, data)
        toast.success('Meetup editado com sucesso!')
        history.push('/dashboard')
      } catch (error) {
        const errData = error.response.data
        toast.error(
          errData && errData.error
            ? `Erro editando Meetup : ${errData.error}`
            : 'Erro Editando Meetup, tente novamente!'
        )
      }
    }
  }
  const schema = Yup.object().shape({
    file_id: Yup.number().required('Banner is required'),
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    date: Yup.date().required('Date is required'),
    location: Yup.string().required('Location is required'),
  })

  return (
    <Container>
      <Content>
        <Form initialData={meetup} onSubmit={handleSubmit} schema={schema}>
          <Banner
            name="file_id"
            status={meetup.status}
            avatar={meetup.avatar}
          />
          <Input name="title" placeholder="Título do Meetup" />

          <Input
            name="description"
            placeholder="Descrição completa"
            multiline
          />

          <DatePicker
            name="date"
            placeholder="Data do meetup"
            dateMeetup={meetup.date}
            status={meetup.status}
          />

          <Input name="location" placeholder="Localização" />

          <DivSaveButton marginTop="8px">
            <button type="submit">
              <MdAddCircleOutline size={20} color="#fff" />
              <strong>Salvar meetup</strong>
            </button>
          </DivSaveButton>
        </Form>
      </Content>
    </Container>
  )
}

NewEdit.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({}),
  }).isRequired,
}
