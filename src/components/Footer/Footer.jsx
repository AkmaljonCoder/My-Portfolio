import React from 'react'
import { Button, Container, LinkDiv, NetworkIcons, Text, Title, Wrapper } from './style'

// images 

import LinkedIn from '../../assets/FooterIcons/linkedin.png'
import Telegram from '../../assets/FooterIcons/telegram.png'
import Instagram from '../../assets/FooterIcons/instagram.png'

const Footer = () => {
  return (
    <Wrapper>
        <Container>
            <Title>Contacts</Title>
            <Text>Want to know more or just chat? <br /> You are welcome!</Text>
            <Button>Send message</Button>
            <NetworkIcons>
                <img onClick={()=>window.open('https://www.linkedin.com/in/akmal-azimov-a003ab246/')} src={LinkedIn} alt="" />
                <img onClick={()=>window.open('https://t.me/akmal_one')} src={Telegram} alt="" />
                <img onClick={()=>window.open('https://www.instagram.com/akmaljon_azimovv/')} src={Instagram} alt="" />
            </NetworkIcons>
            <LinkDiv>
                <h2>Like me on</h2>
                <p>LinkedIn, </p>
                <p>Telegram, </p>
                <p>Instagram</p>
            </LinkDiv>
        </Container>
    </Wrapper>
  )
}

export default Footer