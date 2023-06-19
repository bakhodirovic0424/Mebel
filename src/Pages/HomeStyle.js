import styled from "styled-components";

export const Container = styled.div`
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
`
export const LoadContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
`

export const Content = styled.div`
    margin-top: 30px;
`

Content.Title = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #414141;
    margin-top: 30px;
`
Content.Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const AddButton = styled.button`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    background-color: #245462;
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 20px;
    transition: 0.5s;
    :hover{
        transform: scale(1.1);
    }
`
Content.Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

Content.Col = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row ;
    flex-wrap: wrap;
`

