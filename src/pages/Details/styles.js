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
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 940px;

      strong {
        width: 100%;
        color: #fff;
        font-size: 32px;
      }
    }
  }

  section {
    margin-top: 50px;
    img {
      border-radius: 6px;
      width: 100%;
    }
    div {
      width: 100%;
      padding: 20px 0;
      color: #fff;

      p {
        font-size: 16px;
        text-align: justify;
      }
    }
  }
`

export const DivButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 18px;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    border: 0;
    border-radius: 6px;
    background-color: ${props => (props.isColor ? '#d44059' : '#4dbaf9')};
    color: #fff;
    font-weight: bold;
    padding: 14px 26px;

    span {
      font-size: 16px;
      margin-left: 12px;
    }
  }
`
export const Region = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;

  svg {
    height: 20px;
    font-size: 20px;
    margin-right: 14px;
  }

  span {
    height: 19px;
    font-size: 16px;
    color: #999;
    margin-right: 40px;
  }
`
