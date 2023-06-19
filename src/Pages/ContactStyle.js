import styled from "styled-components";

export const Container = styled.div`
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
`

export const Header = styled.div`
    background-color: #313131;
    height: 38px;
    padding-top: 10px;
    @media screen and (max-width: 400px;) {
        width: 100%;
    }
`

Header.Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

Header.Col = styled.div``

Header.Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
Header.Items = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    padding: 0 30px;
    cursor: pointer;
`
Header.Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`

Header.Phone = styled.p`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
`

Header.PhoneIcon = styled.img`
   padding-right: 11px;
`

Header.Delivery = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    padding-left: 30px;
`

Header.DeliveryIcon = styled.img`
    padding-right: 10px;
`
