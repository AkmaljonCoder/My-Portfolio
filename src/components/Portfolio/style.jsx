import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: #F6F6F6;
`

export const Title = styled.h1`
    width: 100%;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 34px;
    line-height: 42px;
    text-align: center;
    color: #070707;
    @media (max-width:768px) {
        height: 200px;
    }
`

export const BoxWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media (max-width:1024px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
`

export const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 99px;
    a{
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        text-decoration-line: underline;
        color: #070707;
        cursor: pointer;
    }
    @media (max-width:1024px) {
        width: 400px;
        height: 280px;
        margin: 15px;
        background-color: #b3b3b386;
        border-radius: 10px;
        justify-content: start;
        margin-bottom: 100px;
        img{
            width: 100%;
            height: auto;
            margin-bottom: 15px;
            border-radius: 10px 10px 0 0;
        }
    }
    @media (max-width:865px) {
        width: 80%;
        height: auto;
        img{
            margin-bottom: 0;
        }
        a{
            width: 100%;
            padding: 30px 0;
        }
    }
    @media (max-width:468px) {
        a{
            font-size: 14px;
            padding: 15px 0;
        }
    }
    @media (max-width:425px) {
        margin-bottom: 60px;
    }
`

export const ProjectImg = styled.img`
    width: 936.24px;
    height: 510px;
    object-fit: contain;
    margin-bottom: 44px;
`

