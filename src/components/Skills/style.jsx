import styled from 'styled-components'
import { Rating } from '@mui/material'

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
`

export const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const Title = styled.h1`
    margin: 91px;
    font-size: 34px;
    line-height: 42px;
    text-align: center;
    color: #070707;
    font-weight: 500;
`

export const Text = styled.p`
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #070707;
    margin-bottom: 83px;
`

export const Programms = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width:650px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const Card = styled.div`
    width: 166px;
    display: flex;
    margin: 8px;
    flex-direction: column;
    align-items: center;
    img{
        width: 89px;
        height: 88px;
        object-fit: contain;
        margin-bottom: 23px;
    }
    p{
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #828282;
        margin-bottom: 41px;
    }
    @media (max-width:650px) {
        margin: 0 30px;
    }
`

export const AppRating= styled(Rating)`
    color: black !important;
    margin-bottom: 100px !important;
`


