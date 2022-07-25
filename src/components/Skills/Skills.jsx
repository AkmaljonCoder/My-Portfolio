import React from 'react'
import { AppRating, Card, Container, Programms, Text, Title, Wrapper } from './style'

import HtmlIc from '../../assets/Skills/html-5.png'
import CssIc from '../../assets/Skills/css-3.png'
import JsIc from '../../assets/Skills/js.png'
import ReactIc from '../../assets/Skills/physics.png'

const Skills = () => {
    
  return (
    <Wrapper>
      <Container>
        <Title>Skills</Title>
        <Text>I work in such programs as</Text>
        <Programms>
          <Card>
            <img src={HtmlIc} alt="" />
            <p>HTML</p>
            <AppRating readOnly value={5} />
          </Card>
          <Card>
            <img src={CssIc} alt="" />
            <p>CSS</p>
            <AppRating readOnly value={4} />
          </Card>
          <Card>
            <img src={JsIc} alt="" />
            <p>Javascript</p>
            <AppRating readOnly value={4} />
          </Card>
          <Card>
            <img src={ReactIc} alt="" />
            <p>React Js</p>
            <AppRating readOnly value={4} />
          </Card>
        </Programms>
      </Container>
    </Wrapper>
  )
}

export default Skills