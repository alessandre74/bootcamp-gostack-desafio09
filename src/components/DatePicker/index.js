import React, { useRef, useEffect, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { useField } from '@rocketseat/unform'
import PropTypes from 'prop-types'

import 'react-datepicker/dist/react-datepicker.css'

export default function DatePicker({ name, placeholder, dateMeetup, status }) {
  const ref = useRef(null)
  const { fieldName, registerField, error } = useField(name)
  const [startDate, setStartDate] = useState(
    status === 'edit' ? dateMeetup : new Date()
  )

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear()
      },
    })
    // eslint-disable-next-line
  }, [ref.current, fieldName])
  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={startDate}
        onChange={d => setStartDate(d)}
        minDate={new Date()}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="dd/MM/yyyy - HH:mm"
        placeholderText={placeholder}
        ref={ref}
      />
      {error && <span>{error}</span>}
    </>
  )
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  dateMeetup: PropTypes.instanceOf(Date).isRequired,
  status: PropTypes.string.isRequired,
}
