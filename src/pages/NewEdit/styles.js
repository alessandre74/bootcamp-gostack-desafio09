import styled from 'styled-components'

export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
`

export const Content = styled.div`
  display: block;
  padding: 0 20px;
  max-width: 940px;
  height: 100%;

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
      opacity: 0.3;
      font-size: 18px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }
    }

    textarea {
      height: 140px;
      max-width: 940px;
      font-weight: bold;
      background-color: #000000;
      border: 0;
      border-radius: 6px;
      padding: 10px 15px;
      color: #ffffff;
      margin-bottom: 20px;
      opacity: 0.3;
      font-size: 18px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }
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
        font-weight: bold;
        padding: 14px 26px;

        strong {
          margin-left: 10px;
        }
      }
    }
  }
`
export const MImage = styled.label`
  height: 260px;
  max-width: 100%;
  opacity: 0.4;
  border-radius: 6px;
  background-color: #000000;
  margin-bottom: 20px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 260px;
    width: 940px;
  }

  input {
    display: none;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: 20px;
      color: #ffffff;
    }
  }

  div.imgMeetup {
    display: none;
  }
`
