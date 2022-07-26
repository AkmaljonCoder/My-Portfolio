import React from 'react'
import { Box, BoxWrapper, Container, ProjectImg, Title } from './style'
import Project1 from '../../assets/Portfolio/project1.png'

const Portfolio = () => {
  return (
    <Container>
      <Title>Portfolio</Title>

      <BoxWrapper>

        <Box>
          <ProjectImg src={Project1} />
          <a>Online fashion store - Homepage</a>
        </Box>

        <Box>
          <ProjectImg src={Project1} />
          <a>Online fashion store - Homepage</a>
        </Box>

        <Box>
          <ProjectImg src={Project1} />
          <a>Online fashion store - Homepage</a>
        </Box>

        <Box>
          <ProjectImg src={Project1} />
          <a>Online fashion store - Homepage</a>
        </Box>

      </BoxWrapper>

    </Container>
  )
}

export default Portfolio