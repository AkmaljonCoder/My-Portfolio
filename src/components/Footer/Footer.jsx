import React from 'react'
import { Button, Container, Instagram, LinkDiv, NetworkIcons, Telegram, Text, Title, Twitter, Wrapper } from './style'

// images 

const Footer = () => {
  return (
    <Wrapper>
        <Container>
            <Title>Contacts</Title>
            <Text>Want to know more or just chat? <br /> You are welcome!</Text>
            <Button>Send message</Button>
            <NetworkIcons>
                <Twitter onClick={()=>window.open('https://twitter.com/akmalcoder/')}  alt="" />
                <Telegram onClick={()=>window.open('https://t.me/akmaljon_azimjonov/')}  alt="" />
                <Instagram onClick={()=>window.open('https://www.instagram.com/dev.akmal/')}  alt="" />
            </NetworkIcons>
            <LinkDiv>
                <h2>Like me on</h2>
                <p onClick={()=>window.open('https://twitter.com/akmalcoder/')}>Twitter, </p>
                <p onClick={()=>window.open('https://t.me/akmalcode')}>Telegram, </p>
                <p onClick={()=>window.open('https://www.instagram.com/dev.akmal/')}>Instagram</p>
            </LinkDiv>
        </Container>
    </Wrapper>
  )
}

export default Footer
