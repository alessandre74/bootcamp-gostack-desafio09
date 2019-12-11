import styled from 'styled-components'

export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
`

export const Content = styled.div`
  padding: 0 20px;

  form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      height: 50px;
      width: 100%;
      background: #000000;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      padding: 0 15px;
      color: #ffffff;
      margin: 0 0 8px;
      opacity: 0.4;

      &::placeholder {
        color: #ffffff;
      }
    }

    textarea {
      resize: none;
      height: 140px;
      padding: 15px;
    }

    span {
      color: #f94d6a;
      margin: 0 0 5px 0;
      padding: 5px;
      align-self: flex-start;
    }
  }
`

export const DivSaveButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${props => props.marginTop};

  button {
    display: flex;
    align-items: center;
    border: 0;
    border-radius: 4px;
    background-color: #f94d6a;
    color: #fff;
    font-weight: bold;
    padding: 8px 18px;

    strong {
      margin-left: 10px;
    }
  }
`
