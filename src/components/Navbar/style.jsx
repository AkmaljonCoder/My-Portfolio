import styled from 'styled-components'

import MenuIcon from '@mui/icons-material/Menu';

export const Wrapper = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: fixed;
    z-index: 99;
    transition: all ease 0.5s;

    @media (max-width:768px) {
        background-color: #5c5c5cdc;
    }
`

export const Container = styled.div`
    background-color: white;
    width: 95%;
    height: 100px;
    z-index: 99;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    /* position: fixed; */
    top: 0;
    max-width: 1300px;
    margin: 0 auto;

    .burger{
        display: none;
    }

    .show-menu{
        opacity: 1;
        visibility: visible;
        @keyframes appear {
            0% { opacity: 0; translate: 0 50px; }
            100% { opacity: 1; }
        }
    
        h2{
            animation: appear 0.3s both;
        }
    }

    @media (max-width:768px) {
        background-color: rgb(0,0,0,0);
        .burger{
            display: block;
            margin: 0 30px;
            z-index: 3;
        }
    }
`

export const Logo = styled.img`
    width: 170px;
    height: 90px;
    object-fit: contain;
    @media (max-width:460px) {
        width: 150px;
        height: 70px;
    }
`

export const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    @media (max-width:768px) {
        display: none;
    }
`

export const Link = styled.h2`
    font-family: 'Montserrat',sans-serif;
    font-size: 18px;
    line-height: 22px;
    color: #828282;
    cursor: pointer;
    transition: all ease 0.6s;
`

export const Menus = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(20px);
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
    h2{
        color: #f9f9f9;
        font-size: 32px;
        cursor: pointer;
        font-weight: 500;
        text-transform: capitalize;
    }
    
    @media (max-width:425px){
        align-items: start;
        gap: 50px;
        h2{
            margin-left: 40px;
        }
    }
    @media (max-width:375px) {
        h2{
            margin-left: 20px;
        }
    }
`

export const Menu = styled(MenuIcon)`
    width: 35px !important;
    height: 35px !important;
    object-fit: contain !important;
    color: #070707 !important;
    display: none !important;
    @media (max-width:768px) {
        display: block !important;
    }
`


