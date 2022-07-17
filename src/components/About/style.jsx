import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 506px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F6F6F6;
    h1{
        font-size: 34px;
        line-height: 42px;
        text-align: center;
        color: #070707;
        margin: 10px;
    }
    p{
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #070707;
        font-weight: 300;
        margin: 14px;
    }
    @media (max-width:520px) {
        h1{
            font-size: 25px;
        }
        p{
            font-size: 14px;
        }
    }
    @media (max-width:410px) {
        p{
            font-size: 11px;
        }
    }
`

