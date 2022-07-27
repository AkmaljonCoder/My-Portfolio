import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 560px;
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 34px;
    line-height: 42px;
    text-align: center;
    color: #070707;
    margin: 30px 0;
`

export const Text = styled.p`
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #070707;
    margin: 20px 0;
`

export const Button = styled.button`
    width: 180px;
    height: 42px;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    border: 1px solid #070707;
    background-color: #070707;
    transition: all ease 0.3s;
    cursor: pointer;
    border-radius: 20px;
    margin: 30px 0;
    &:hover{
        color: #070707;
        background-color: #FFFFFF;
    }
`

export const NetworkIcons = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0 0 0;
    margin-bottom: 30px;
    img{
        width: 40px;
        height: 40px;
        object-fit: contain;
        color: #070707;
        margin: 0 30px;
        cursor: pointer;
    }
`

export const LinkDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    h2{
        width: 100%;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #828282;
        text-align: center;
        margin-bottom: 10px;
    }
    p{
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #828282;
        text-align: center;
        margin: 0 3px;
        cursor: pointer;
        &:hover{
            text-decoration-line: underline;
        }
    }
`




