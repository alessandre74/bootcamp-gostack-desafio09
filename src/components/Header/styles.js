import styled from 'styled-components'

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 40px;
`

export const Content = styled.div`
  height: 92px;
  max-width: 940px;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  aside {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      border: 0;
      border-radius: 4px;
      background-color: #d44059;
      color: #fff;
      font-weight: bold;
      padding: 10px 22px;
    }
  }
`

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    margin-right: 30px;

    strong {
      display: block;
      font-size: 14px;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 8px;
      font-size: 14px;
      font-weight: normal;
      color: #999;
    }
  }
`
