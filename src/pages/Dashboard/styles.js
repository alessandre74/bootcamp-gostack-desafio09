import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 60px;
`
export const Content = styled.div`
  height: 38px;
  max-width: 900px;
  margin: 0 auto;

  header {
    max-width: 900px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      text-align: right;
      color: #fff;
      font-size: 32px;
    }
    button {
      display: flex;
      justify-content: space-between;
      border: 0;
      border-radius: 6px;
      background-color: #f94d6a;
      color: #fff;
      font-weight: bold;
      padding: 14px 26px;

      strong {
        font-size: 22px;
        margin-left: 10px;
      }
    }
  }

  ul {
    margin-top: 40px;
  }
`

export const MeetupItens = styled.li`
  background-color: rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  font-size: 20px;
  height: 62px;
  padding: 14px 26px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    color: #fff;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      color: #999;
    }

    button {
      border: 0;
      margin-left: 40px;
      background: none;
    }
  }
`
