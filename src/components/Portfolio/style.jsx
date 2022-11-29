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
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    @media (max-width:1024px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
`

export const Box = styled.div`
    width: 360px;
    height: 300px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 0 20px;
    margin-bottom: 80px;
    transition: all ease 0.3s;
    box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.19);

    a{
        font-size: 18px;
        text-align: center;
        font-weight: 500;
        text-decoration-line: none;
        color: #070707;
        cursor: pointer;
        transition: all ease 0.3s;
        margin-bottom: 10px;

        :hover{
            color: #08bbbb;
        }
    }

    &:hover{
        transform: scale(1.1);
    }

    @media (max-width:425px) {
        width: 90%;
        :hover{
            transform: none;
        }
    }
`

export const ProjectImg = styled.img`
    width: 350px;
    height: 200px;
    margin-top: 5px;
    margin-bottom: 15px;
    border-radius: 10px;
    object-fit: contain;

    @media (max-width:425px) {
        width: 100%;
    }
`

export const Technos = styled.div`
    display: flex;
    align-items: center;

    h2{
        font-size: 18px;
        text-align: center;
        font-weight: 500;
        text-decoration-line: none;
        margin: 0 10px;
    }

    .html{
        color: orange;
    }

    .css{
        color: #1795c7;
        
    }

    .react{
        color: #09488f;
    }

    .api{
        color: purple;
    }
`

