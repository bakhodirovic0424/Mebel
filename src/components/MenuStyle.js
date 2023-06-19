import styled from "styled-components";

export const Container = styled.div`
    max-width: 1240px;
    padding: 0 20px;
    margin: 0 auto;
`

export const Content = styled.div``

Content.Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

Content.Col = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
    padding: 23px 40px;
    margin-top: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 400px) {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        text-align: center;
    }
`

Content.MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    cursor: pointer;
`

Content.Imgs = styled.img``

Content.Text = styled.p`
    padding-left: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    transition: 0.5s;
    color: #414141;
    position: relative;
    top: 13px;
    left: 0;
    :hover{
        color:rgb(215, 68, 68);
    }
`

Content.RedText = styled.p`
    padding-left: 25px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #414141;
    cursor: pointer;
    position: relative;
    top: 13px;
    left: 0;
    transition: 0.5s;
    :hover{
        color:rgb(215, 68, 68);
    }
`
Content.Icon = styled.img`
    padding-left: 47px;
    cursor: pointer;
    @media screen and (max-width: 400px) {
        display: none;
    }
`