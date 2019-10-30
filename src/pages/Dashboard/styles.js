import styled from 'styled-components'

export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
`

export const Content = styled.div`
  display: block;
  padding: 0 20px;
  max-width: 940px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      text-align: right;
      color: #fff;
    }
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
        font-size: 16px;
        margin-left: 12px;
      }
    }
  }
  ul {
    margin-top: 20px;

    span {
      color: #fff;
    }
  }
`

export const MeetupItens = styled.li`
  background-color: rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  font-size: 20px;
  height: ${props => (props.flag ? '400px' : '62px')};
  padding: 14px 22px;

  display: flex;
  justify-content: ${props => (props.flag ? 'center' : 'space-between')};
  align-items: center;

  strong {
    color: #fff;
  }

  div {
    display: flex;
    align-items: center;

    span {
      margin-right: 20px;
      color: #999;
    }

    svg {
      cursor: pointer;
    }
  }
`
