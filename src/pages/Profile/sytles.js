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
      max-width: 940px;
      font-weight: bold;
      background-color: #000000;
      border: 0;
      border-radius: 4px;
      padding: 0 15px;
      color: #ffffff;
      margin: 0 0 20px;
      opacity: 0.4;
      font-size: 18px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }
    }
    span {
      color: #f94d6a;
      margin: 0 0 10px 0;
      padding: 5px;
      align-self: flex-start;
    }

    hr {
      margin-bottom: 20px;
      height: 1px;
      opacity: 0.1;
      background-color: #ffffff;
    }

    div {
      display: flex;
      justify-content: flex-end;

      button {
        display: flex;
        align-items: center;
        border: 0;
        border-radius: 6px;
        background-color: #f94d6a;
        color: #fff;
        padding: 14px 26px;

        strong {
          margin-left: 10px;
        }
      }
    }
  }
`
