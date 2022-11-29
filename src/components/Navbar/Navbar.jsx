import React, { useRef, useState } from 'react'
import { CloseBtn, Container, Link, LinkWrapper, Logo, Menu, Menus, MenuWrapper, Wrapper } from './style'

import {BurgerSpin as Burger} from 'react-burger-icons' // react burger icon

import LogoPng from '../../assets/Logo.svg'

const Navbar = () => {

  const [scroll, setScroll] = useState(false);

  const [isClosed, setIsClosed] = useState(false);

  const toggleClosed = ( ) => setIsClosed(!isClosed);
  
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
    menu.current.style.right = "0"
  }

  const closeMenu = ()=>{
    menu.current.style.right = "-100%"
  }

  const Scrolling = (val) => {
    window.scrollTo({
      top:val,
      behavior:'smooth'
    })
    menu.current.style.right = '-100%'
  }

  return (
    <Wrapper>
      <Container>
        <Logo onClick={()=>Scrolling(0)} src={LogoPng}/>

        <div onClick={toggleClosed}>
          <Burger isClosed={isClosed} />
        </div>
        
        <LinkWrapper>
          <Link onClick={()=>{setColor('home'); Scrolling(0)}} style={{color:Color==='home' ? '#070707' : '#828282'}} >Home</Link>
          <Link onClick={()=>{setColor('about');Scrolling(800)}} style={{color:Color==='about' ? '#070707' : '#828282'}} >About me</Link>
          <Link onClick={()=>{setColor('skills');Scrolling(1500)}} style={{color:Color==='skills' ? '#070707' : '#828282'}} >Skills</Link>
          <Link onClick={()=>{setColor('portfolio');Scrolling(2100)}} style={{color:Color==='portfolio' ? '#070707' : '#828282'}} >Portfolio</Link>
          <Link onClick={()=>{setColor('contact');Scrolling(6000)}} style={{color:Color==='contact' ? '#070707' : '#828282'}} >Contacts</Link>
        </LinkWrapper>

        <Menus className={`${isClosed===true? 'show-menu' : ''}`}>
          <h2 onClick={()=>{setIsClosed(false) ; Scrolling(0)}} style={{animationDelay:'0.1s'}}>home</h2>
          <h2 onClick={()=>{setIsClosed(false) ; Scrolling(950)}} style={{animationDelay:'0.2s'}}>about me</h2>
          <h2 onClick={()=>{setIsClosed(false) ; Scrolling(1550)}} style={{animationDelay:'0.3s'}}>Skills</h2>
          <h2 onClick={()=>{setIsClosed(false) ; Scrolling(2300)}} style={{animationDelay:'0.4s'}}>Portfolio</h2>
          <h2 onClick={()=>{setIsClosed(false) ; Scrolling(5000)}} style={{animationDelay:'0.5s'}}>contact</h2>
        </Menus>
      </Container>
    </Wrapper>
  )
}

export default Navbar