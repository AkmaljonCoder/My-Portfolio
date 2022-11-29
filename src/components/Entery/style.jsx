import styled from 'styled-components'
import background from '../../assets/Entery/background.png'

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 110px;
`

export const Container = styled.div`
    width: 95%;
    max-width: 1300px;
`

export const TextDiv = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        font-size: 47.3392px;
        line-height: 59px;
        color: #070707;
        max-width: 100px;
    }
    h3{
        font-size: 18px;
        line-height: 22px;
        color: #070707;
    }
    h2{
        font-size: 16px;
        line-height: 20px;
        color: #828282;
        transform: rotate(-90deg);
        z-index: 0;
    }
    @media (max-width:768px) {
        flex-direction: column;
        height: 500px;
        justify-content: center;
        h1{
            max-width: none;
            margin-bottom: 40px;      
        }
        h3{
            text-align: center;
            margin-bottom: 40px;
        }
        h2{
            transform: none;
        }
    }
    @media (max-width:460px) {
        h1{
            font-size: 30px;
        }
    }
`

export const ImageBgc = styled.div`
    width: 100%;
    height: 500px;
    border-radius: 20px;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

