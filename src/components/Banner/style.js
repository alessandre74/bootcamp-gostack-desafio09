import styled from 'styled-components'

export const Container = styled.div`
  align-self: stretch;
  margin-bottom: 8px;

  label {
    height: 260px;
    opacity: ${props => (props.cor === 'true' ? '0.9' : '0.4')};
    background-color: #000000;
    border-radius: 6px;
    margin-bottom: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      display: none;
    }

    div.imgMeetup {
      display: none;
    }
  }
`
