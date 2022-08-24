import React from 'react'
import { AppRating, Card, Container, Programms, Text, Title, Wrapper } from './style'

import HtmlIc from '../../assets/Skills/html-5.png'
import CssIc from '../../assets/Skills/css-3.png'
import JsIc from '../../assets/Skills/js.png'
import ReactIc from '../../assets/Skills/physics.png'
import Bootstrap from '../../assets/Skills/bootstrap.png'
import Github from '../../assets/Skills/github.png'

const Skills = () => {
    
  return (
    <Wrapper>
      <Container>
        <Title>Skills</Title>
        <Text>I work in such programs as</Text>
        <Programms >
          <Card>
            <img src={HtmlIc} alt="" />
            <p>HTML</p>
          </Card>
          <Card>
            <img src={CssIc} alt="" />
            <p>CSS , SASS</p>
          </Card>
          <Card>
            <img src={Bootstrap} alt="" />
            <p>Bootstrap 5</p>
          </Card>
          <Card>
            <img src={Github} alt="" />
            <p>Github</p>
          </Card>
          <Card>
            <img src={JsIc} alt="" />
            <p>Javascript</p>
          </Card>
          <Card>
            <img src={ReactIc} alt="" />
            <p>React Js</p>
          </Card>
        </Programms>
      </Container>
    </Wrapper>
  )
}

export default Skills