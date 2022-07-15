import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid black;
`

export const Link = styled.h2`
    font-family: 'Montserrat',sans-serif;
    font-size: 18px;
    line-height: 22px;
    color: #070707;
    margin: 0 40px;
    cursor: pointer;
    transition: all ease 0.3s;
    &:hover{
        opacity: 0.6;
    }
`
