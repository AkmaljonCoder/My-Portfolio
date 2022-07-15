import React from 'react'
import { Container, Link } from './style'

const Navbar = () => {
  return (
    <Container>
        <Link>Home</Link>
        <Link>About me</Link>
        <Link>Skills</Link>
        <Link>Portfolio</Link>
        <Link>Contacts</Link>
    </Container>
  )
}

export default Navbar