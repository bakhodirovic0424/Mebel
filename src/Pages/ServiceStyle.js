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

`
export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Wrapper = styled.div`
    margin-top: 35px;
`

export const Col = styled.div``
export const Title = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #969696;
    margin-top: 30px;

    span{
        margin-left: 10px;
    }
`

export const Form = styled.div``

Form.Title = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-top: 40px;
    color: #414141;
`

Form.Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
Form.Text = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #969696;
    
`

Form.SupInput = styled.input`
    background: #FCFCFC;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.07);
    width: 207px;
    height: 38px;
    padding-left: 10px;
`
Form.SubInput = styled.input`
    background: #FCFCFC;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.07);
    width: 207px;
    height: 38px;
    margin-left: 10px;
    padding-left: 10px;
`
export const FormWrapper = styled.div`
    margin-top: 10px;
`
export const Input = styled.input`
    background: #FCFCFC;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.07);
    width: 457px;
    height: 142px;
    padding: 10px;
`

export const ContactRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const Phone = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 40px;
    cursor: pointer;
`
Phone.Icon = styled.div`
    margin-right: 10px;
`
Phone.Text = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 126.69%;
    text-align: right;
    color: #414141;
    padding-top: 5px;
`
export const Mail = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
`
Mail.Icon = styled.div`
    margin-right: 10px;
`

Mail.Text = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 126.69%;
    padding-top: 5px;
    color: #414141;
`
export const Insta = styled.div`
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
`

Insta.Icon = styled.div`
    margin-right: 10px;
`

Insta.Text = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 126.69%;
    text-align: right;
    color: #414141;
    padding-top: 5px;
`

export const Btn = styled.button`
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #414141;
    padding: 13px 20px;
    margin-top: 20px;
    margin-left: 40%;
    transition: 0.5s;
    :hover{
        transform: scale(1.1);
    }
`
export const Submit = styled.button`
    background: #245462;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #FFFFFF;
    margin-top: 20px;
    padding: 13px 20px;
    margin-left: 20px;
    transition: 0.5s;
    :hover{
        transform: scale(1.1);
    }
`

export const Location = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 126.69%;
    text-align: right;
    color: #414141;
    padding-top: 30px;
`

export const Address = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #414141;
    margin-top: 50px;
`

Address.Img = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    margin: 0 auto;
`