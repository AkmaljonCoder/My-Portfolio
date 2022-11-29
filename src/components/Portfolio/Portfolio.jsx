import React from 'react'
import { Box, BoxWrapper, Container, ProjectImg, Technos, Title } from './style'

import CyberSport from '../../assets/Portfolio/cybersport.png'
import EasyBank from '../../assets/Portfolio/easy-bank.png'
import TodoList from '../../assets/Portfolio/todo-list.png'
import Shop from '../../assets/Portfolio/shop.png'
import ReactTodo from '../../assets/Portfolio/react-todo-list.png'
import TammyFood from '../../assets/Portfolio/tammy-food.png'

const Portfolio = () => {
  return (
    <Container>
      <Title>Portfolio</Title>

      <BoxWrapper>

        <Box>
          <ProjectImg src={CyberSport} />
          <a onClick={()=>window.open('https://cyber-portfolio.vercel.app/')}>Cyber sport registration</a>
          <Technos>
            <h2 className='react'>REACT</h2>
          </Technos>
        </Box>

        <Box>
          <ProjectImg src={EasyBank} />
          <a onClick={()=>window.open('https://easy-bank-project.vercel.app/')}>Easy bank</a>
          <Technos>
            <h2 className='html'>HTML</h2>
            <h2 className='css'>CSS</h2>
          </Technos>
        </Box>

        <Box>
          <ProjectImg src={TodoList} />
          <a onClick={()=>window.open('https://to-do-list-kappa-ten.vercel.app/')}>Todo list with react app</a>
          <Technos>
            <h2 className='react'>REACT</h2>
          </Technos>
        </Box>

        <Box>
          <ProjectImg src={Shop} />
          <a onClick={()=>window.open('https://my-market-project.vercel.app/')}>Online shop</a>
          <Technos>
            <h2 className='react'>REACT</h2>
            <h2 className='api'>API</h2>
          </Technos>
        </Box>

        <Box>
          <ProjectImg src={TammyFood} />
          <a onClick={()=>window.open('https://tammy-food.vercel.app/')}>Tammy Food</a>
          <Technos>
            <h2 className='react'>REACT</h2>
          </Technos>
        </Box>

        <Box>
          <ProjectImg src={ReactTodo} />
          <a onClick={()=>window.open('https://react-todo-app-rose-theta.vercel.app/')}>React todo app</a>
          <Technos>
            <h2 className='react'>REACT</h2>
            <h2 className='css'>CSS</h2>
          </Technos>
        </Box>

      </BoxWrapper>

    </Container>
  )
}

export default Portfolio