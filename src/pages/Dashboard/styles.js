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
      border-radius: 4px;
      background-color: #f94d6a;
      color: #fff;
      font-weight: bold;
      padding: 10px 22px;

      strong {
        font-size: 16px;
        margin-left: 12px;
      }
    }
  }
  ul {
    margin-top: 40px;

    .loading {
      display: flex;
      justify-content: center;
    }

    span {
      color: #fff;
    }
  }
`

export const MeetupItens = styled.li`
  background: rgba(0, 0, 0, 0.3);
  margin-top: 10px;
  font-weight: bold;
  height: ${props => (props.flag ? '400px' : '62px')};
  padding: 14px 22px;
  border-radius: 6px;

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
