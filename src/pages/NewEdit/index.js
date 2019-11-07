import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { MdCameraAlt, MdAddCircleOutline } from 'react-icons/md'
import { Form, Input } from '@rocketseat/unform'
import DatePicker from '~/components/DatePicker'

import api from '~/services/api'
import { Container, Content, MImage, DivSaveButton } from './styles'

export default function NewEdit({ location }) {
  const meetup = location.state ? location.state : null

  const [preview, setPreview] = useState(
    meetup.status === 'edit' ? meetup.avatar && meetup.avatar.url : null
  )
  const [file, setFile] = useState(
    meetup.status === 'edit' ? meetup.avatar.id : null
  )

  async function handleSubmit(data) {
    if (meetup.status === 'new') {
      const dataNew = {
        title: data.title,
        description: data.description,
        location: data.location,
        date: data.date,
        file_id: file,
      }
      console.tron.log(dataNew)
    } else {
      const dataEdit = {
        id: meetup.id,
        title: data.title,
        description: data.description,
        location: data.location,
        date: new Date(),
        file_id: file,
      }
      console.tron.log(dataEdit)
    }
  }

  async function handleChange(e) {
    const data = new FormData()
    data.append('file', e.target.files[0])

    const response = await api.post('files', data)
    const { id, url } = response.data

    setFile(id)
    setPreview(url)
  }

  return (
    <Container>
      <Content>
        <Form initialData={meetup} onSubmit={handleSubmit}>
          <MImage
            htmlFor="banner"
            style={{ backgroundImage: `url(${preview})` }}
            status={meetup.status}
          >
            <input
              type="file"
              id="banner"
              accept="image/*"
              data-file={file}
              onChange={handleChange}
            />
            <div
              className={
                (preview && meetup.status === 'new') || meetup.status === 'edit'
                  ? 'imgMeetup'
                  : ''
              }
            >
              <span>
                <MdCameraAlt size={54} color="#ffffff" />
              </span>
              <strong>Selecionar imagem</strong>
            </div>
          </MImage>

          <Input name="title" placeholder="Título do Meetup" />

          <Input
            name="description"
            placeholder="Descrição completa"
            multiline
          />
          {/*
          <Input
            type="date"
            name={meetup.status === 'edit' ? 'dateFormatted' : 'date'}
            placeholder="Data do meetup"
          /> */}
          <DatePicker
            name={meetup.status === 'edit' ? 'dateFormatted' : 'date'}
            placeholder="Data do meetup"
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
