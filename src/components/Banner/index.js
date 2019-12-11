import React, { useState, useRef, useEffect } from 'react'
import { useField } from '@rocketseat/unform'
import PropTypes from 'prop-types'
import { MdCameraAlt } from 'react-icons/md'
import { Container } from './style'
import api from '~/services/api'

export default function Banner({ status, avatar }) {
  const { registerField } = useField('banner')
  const { error } = useField('file_id')
  const [preview, setPreview] = useState(avatar && avatar.url)
  const [file, setFile] = useState(status === 'edit' ? avatar.id : null)
  const ref = useRef()
  const imgMeetupDiv =
    (preview && status === 'new') || status === 'edit' ? 'imgMeetup' : ''

  const flag = file !== null ? 'true' : 'false'

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      })
    }
    // eslint-disable-next-line
  }, [ref.current])

  async function handleChange(e) {
    const data = new FormData()
    data.append('file', e.target.files[0])
    const response = await api.post('files', data)
    const { id, url } = response.data
    setFile(id)
    setPreview(url)
  }

  return (
    <Container cor={flag}>
      <label htmlFor="banner" style={{ backgroundImage: `url(${preview})` }}>
        <div className={imgMeetupDiv}>
          <MdCameraAlt size={48} color="#fff" />
        </div>

        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>

      {error && <span>{error}</span>}
    </Container>
  )
}
Banner.propTypes = {
  status: PropTypes.string.isRequired,
  avatar: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
  }).isRequired,
}
