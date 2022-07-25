import React from 'react'
import { Box, Container, ProjectImg, Title } from './style'
import Project1 from '../../assets/Portfolio/project1.png'

const Portfolio = () => {
  return (
    <Container>
      <Title>Portfolio</Title>
      <Box>
        <ProjectImg src={Project1} />
        <a>Online fashion store - Homepage</a>
      </Box>
    </Container>
  )
}

export default Portfolio