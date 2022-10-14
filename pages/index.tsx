import type { NextPage } from 'next'
import styled from '@emotion/styled'

const Header1 = styled.h1`
  align-items: center;
  text-align:center;
  color: #D8D9CF;
  font-familly: 'Roboto';
`

const Header2 = styled.h2`
  align-items: center;
  text-align:center;
  color: #EDEDED;
  font-familly: 'Roboto';
`

const Header3 = styled.h3`
  align-items: center;
  text-align:center;
  color: #EDEDED;
  font-familly: 'Roboto';
  &> ul >li{
    list-style: none;
    margin-top:0.5em;
  }
`
const Container = styled.section`
    margin: 0;
    padding: 0;
    background-color: transparent;
    background: url('https://www.avanade.com/-/media/images/blogs/inside-avanade/aurora.jpeg?la=en&ver=1');
    position: fixed;
    width:100vw;
    height: 100vh;


`


const Home = () => {
  return (
      <Container>
        <Header1>Executando React com Next.JS</Header1>
        <Header2>Site criado em TypeScript publicado na Vercel.</Header2>
        <Header3>
        <ul>
          <li>Grupo 2:</li>
          <li>Camis</li>
          <li>Gabriel</li>
          <li>Gustavo</li>
          <li>Iris</li>
          <li>Miguel</li>
          <li>Milena</li>
          <li>Nathallye</li>
        </ul>
        </Header3>
      </Container>
  )
}

export default Home
