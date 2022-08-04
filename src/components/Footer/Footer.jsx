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
                <Twitter onClick={()=>window.open('https://twitter.com/azimov_akmaljon/')}  alt="" />
                <Telegram onClick={()=>window.open('https://t.me/akmal_one')}  alt="" />
                <Instagram onClick={()=>window.open('https://www.instagram.com/akmaljon_azimovv/')}  alt="" />
            </NetworkIcons>
            <LinkDiv>
                <h2>Like me on</h2>
                <p onClick={()=>window.open('https://twitter.com/azimov_akmaljon/')}>Twitter, </p>
                <p onClick={()=>window.open('https://t.me/akmal_one')}>Telegram, </p>
                <p onClick={()=>window.open('https://www.instagram.com/akmaljon_azimovv/')}>Instagram</p>
            </LinkDiv>
        </Container>
    </Wrapper>
  )
}

export default Footer