   import styled from "styled-components";

export const Container = styled.div`
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
`

export const Content = styled.div`
    margin-top:200px;
`

Content.Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFFFFF;
    box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.03);
    padding: 20px;
    width: 1240px;
    height: 210px;
    position: relative;
    right: 30px;
`

Content.Col = styled.div`
margin-top: 54px;
`

export const Title = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 126.69%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #000000;
`

export const Navigate = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
`

Navigate.Col = styled.div`

`

Navigate.Item = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 126.69%;
    color: #414141;
    cursor: pointer;
    transition: 0.5s;
    :hover{
        color: rgb(215, 68, 68);
    }
`

export const Text = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 126.69%;
    color: #414141;
    cursor: pointer;
`

Content.Img = styled.img`
    position: relative;
    left: 85%;
`

Content.Title = styled.p`
    height: 54px;
    width: 195px;
    margin-top: 25px;
    position: relative;
    left: 61%;
    .span{
        margin-left: 35px;
    }
`

Content.Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    margin-top: 10px;
    p{
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: 0.5s;
    }
    p:hover{
        color: rgb(215, 68, 68);
    }
    i{
        margin-right: 10px;
    }
`