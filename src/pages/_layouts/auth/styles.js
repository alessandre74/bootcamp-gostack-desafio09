import styled from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(to bottom, #22202c, #402845);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background-color: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 50px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    span {
      color: #f94d6a;
      margin: 0 0 10px 0;
      padding: 5px;
      align-self: flex-start;
    }

    button {
      margin: 5px 0 0;
      height: 50px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 18px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#f94d6a')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 18px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`
