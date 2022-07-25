import React, { useRef, useState } from 'react'
import { CloseBtn, Container, Link, LinkWrapper, Logo, Menu, MenuWrapper, Wrapper } from './style'

import LogoPng from '../../assets/Logo.svg'

const Navbar = () => {

  const [scroll, setScroll] = useState(false)
  
  const changeColor = ()=>{
    if(window.scrollY >= 50){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }
  
  const [Color, setColor] = useState('home')

  const menu = useRef()

  const openMenu = ()=>{
    menu.current.style.width = "250px"
  }

  const closeMenu = ()=>{
    menu.current.style.width = "0"
  }

  const Scrolling = (val) => {
    window.scrollTo({
      top:val,
      behavior:'smooth'
    })
    menu.current.style.width = '0'
  }

  return (
    <Wrapper>
      <Container>
        <Logo onClick={()=>Scrolling(0)} src={LogoPng}/>
        <LinkWrapper>
          <Link onClick={()=>setColor('home')} style={{color:Color==='home' ? '#070707' : '#828282'}} >Home</Link>
          <Link onClick={()=>setColor('about')} style={{color:Color==='about' ? '#070707' : '#828282'}} >About me</Link>
          <Link onClick={()=>setColor('skills')} style={{color:Color==='skills' ? '#070707' : '#828282'}} >Skills</Link>
          <Link onClick={()=>setColor('portfolio')} style={{color:Color==='portfolio' ? '#070707' : '#828282'}} >Portfolio</Link>
          <Link onClick={()=>setColor('contact')} style={{color:Color==='contact' ? '#070707' : '#828282'}} >Contacts</Link>
        </LinkWrapper>
        <MenuWrapper ref={menu}>
          <CloseBtn onClick={closeMenu}>&times;</CloseBtn>
          <h2 onClick={()=>Scrolling(0)}>Home</h2>
          <h2 onClick={()=>Scrolling(200)}>About me</h2>
          <h2>Skills</h2>
          <h2>Portfolio</h2>
          <h2>Contacts</h2>
        </MenuWrapper>
        <Menu onClick={openMenu}/>
      </Container>
    </Wrapper>
  )
}

export default Navbar