import React from 'react'
import { Box, BoxWrapper, Container, ProjectImg, Title } from './style'

import CyberSport from '../../assets/Portfolio/cybersport.png'
import EasyBank from '../../assets/Portfolio/easy-bank.png'
import TodoList from '../../assets/Portfolio/todo-list.png'
import Shop from '../../assets/Portfolio/shop.png'

const Portfolio = () => {
  return (
    <Container>
      <Title>Portfolio</Title>

      <BoxWrapper>

        <Box>
          <ProjectImg src={CyberSport} />
          <a onClick={()=>window.open('https://cyber-portfolio.vercel.app/')}>Cyber sport registration</a>
        </Box>

        <Box>
          <ProjectImg src={EasyBank} />
          <a onClick={()=>window.open('https://easy-bank-project.vercel.app/')}>Easy bank project</a>
        </Box>

        <Box>
          <ProjectImg src={TodoList} />
          <a onClick={()=>window.open('https://to-do-list-kappa-ten.vercel.app/')}>Todo list with react app</a>
        </Box>

        <Box>
          <ProjectImg src={Shop} />
          <a onClick={()=>window.open('https://market-web-weld.vercel.app/')}>Online shop project</a>
        </Box>

      </BoxWrapper>

    </Container>
  )
}

export default Portfolio