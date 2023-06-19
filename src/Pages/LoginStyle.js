import styled from "styled-components";

export const Container = styled.div`
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
    transition: 0.5s;
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
  padding-top: 30px;
`

Content.SubTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`

Content.SupText = styled.p` 
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #414141;
`
Content.SubText = styled.p` 
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #414141;
  .text{
    padding-left: 20px;
  }
`

export const Price = styled.div`
  background: #F8F8F8;
  width: 100%;
  height: 57px;
  padding-top: 16px;
  margin-top: 30px;
`
Price.Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
Price.Col = styled.div`
`

Price.Img = styled.img`
`

Price.Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
Price.Text = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: #414141;
  padding-left: 16px;
  position: relative;
  bottom: -8px;
`

export const Details = styled.div`

`

Details.Title = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #414141;
  margin-top: 55px;
`

Details.Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
Details.Col = styled.div`
  width: 457px;
`

export const Inputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Input = styled.input`
  background: #FCFCFC;
  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.07);
  width: 207px;
  height: 38px;
  padding-left: 10px;
`

Inputs.Col = styled.div`
  width: 100%;
`


Details.Text = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #969696;
  margin-top: 10px;
`

Details.Input = styled.input`
  background: #FCFCFC;
  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.07);
  width: 457px;
  height: 38px;
  padding-left: 10px;
`

Details.InputText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #969696;
  margin-top: 10px;
`

Details.SupInput = styled.input`
  background: #FCFCFC;
  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.07);
  width: 117px;
  height: 38px;
  padding-left: 10px;
`
Details.SubInput = styled.input`
  background: #FCFCFC;
  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.07);
  width: 80px;
  height: 38px;
  padding-left: 10px;
`

Details.Address = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const Wrapper = styled.div`
`
export const Img = styled.img`
  height: 40px;
  width: 53.33333206176758px;
`

Details.Btn = styled.button`
  background: #245462;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  padding: 13px 20px;
  margin-top: 20px;
  color: #FFFFFF;
  margin-left: 78%;
  transition: 0.5s;

  :hover{
    background-color: rgb(24 58 67);
  }
`

