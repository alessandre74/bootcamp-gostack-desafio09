import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { MdCameraAlt, MdAddCircleOutline } from 'react-icons/md'
import { Form, Input } from '@rocketseat/unform'

import { Container, Content, MImage } from './styles'

export default function NewEdit({ location }) {
  const meetup = location.state ? location.state : null
  const [imgMeetup, setImgMeetup] = useState(null)

  const preview = useMemo(() => {
    return imgMeetup ? URL.createObjectURL(imgMeetup) : null
  }, [imgMeetup])

  return (
    <Container>
      <Content>
        <MImage
          style={
            preview
              ? { backgroundImage: `url(${preview})` }
              : {
                  backgroundImage: meetup
                    ? `url(${meetup.avatar && meetup.avatar.url})`
                    : `url(${preview})`,
                }
          }
        >
          <input
            type="file"
            id="avatar"
            accept="image/*"
            onChange={event => setImgMeetup(event.target.files[0])}
          />
          <div className={preview || meetup ? 'imgMeetup' : ''}>
            <span>
              <MdCameraAlt size={54} color="#ffffff" />
            </span>
            <strong>Selecionar imagem</strong>
          </div>
        </MImage>

        <Form initialData={meetup} onSubmit={() => {}}>
          <Input name="title" placeholder="Título do Meetup" />

          <Input
            name="description"
            placeholder="Descrição completa"
            multiline
          />

          <Input name="dateFormatted" placeholder="Data do meetup" />

          <Input name="location" placeholder="Localização" />

          <div>
            <button type="submit">
              <MdAddCircleOutline size={20} color="#fff" />
              <strong>Salvar meetup</strong>
            </button>
          </div>
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
