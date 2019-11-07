import styled from 'styled-components'

export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
`
export const Content = styled.div`
  padding: 0 20px;
  max-width: 940px;

  form {
    display: flex;
    flex-direction: column;

    input {
      height: 50px;
      background-color: #000000;
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
    span {
      color: #f94d6a;
      margin: 0 0 10px 0;
      padding: 5px;
      align-self: flex-start;
    }

    hr {
      border: 0;
      margin: 20px 0 20px 0;
      height: 2px;
      opacity: 0.1;
      background-color: #ffffff;
    }
  }
`
