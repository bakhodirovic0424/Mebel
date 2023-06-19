import styled from "styled-components";

export const Container = styled.div`
    max-width: 1240px;
    padding: 0 20px;
    margin: 0 auto;
`

export const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
`

export const Content = styled.div`

`
Content.Title = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #969696;
    margin-top: 30px;
    cursor: pointer;
`

export const Wrapper = styled.div`
    display: flex;
`

export const Sidebar = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
    width: 263px;
    height: 591px;
    padding: 20px;
    margin-top: 30px;
    overflow-y: auto;
    min-width: 267px;
`

Sidebar.Title = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #414141;
`
Sidebar.Price = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #414141;
    margin-top: 20px;
`

Sidebar.Texts = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
Sidebar.Img = styled.img`
    margin-bottom: 13px;
`
Sidebar.SupText = styled.p`
    background: #F8F8F8;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #414141;
    padding: 7px 22px;
`

Sidebar.Color = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #414141;
    margin-top: 21px;
`

Sidebar.Colors = styled.div`

`

Sidebar.ColorImg = styled.img`
    margin: 20px 5px;
    cursor: pointer;
`

Sidebar.Brand = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #414141;
`

Sidebar.Text = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #245462;
    margin-top: 15px;
    cursor: pointer;
`
export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 30px;
`