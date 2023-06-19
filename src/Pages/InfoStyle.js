import styled from "styled-components";


export const Container = styled.div`
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
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

Content.Row = styled.div`
    display: flex;
    align-items: center;
`

Content.Col = styled.div`
    width: 100%;
`

Content.Img = styled.img`
    margin-top: 80px;
`
Content.CardImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100%;
`

Content.Arrow = styled.div`
    font-size: 25px;
    cursor: pointer;
    margin-top: 75px;
`

Content.Imgs = styled.img`
    padding: 68px 15px;
    cursor: pointer;
    margin-top: 80px;
`

Content.Star = styled.img`
    cursor: pointer;
`

Content.SupTitle = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    color: #414141;
    padding-top: 16px;
`
Content.SubTitle = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #686868;
    padding-top: 10px;
`

Content.Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

Content.PriceText = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    color: #414141;
    padding-top: 19px;
`
Content.PriceBtn = styled.button`
    background: #245462;
    padding: 12px 50px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #FFFFFF;
    margin-left: 31px;
    transition: 0.5s;
    :hover{
        background-color: #183943;
    }
`

Content.PriceLife = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    :hover{
        color: rgb(215, 68, 68);
    }
`

Content.PriceIcon = styled.div`
    cursor: pointer;
    font-size: 20px;
    transition: 0.5s;
`

Content.PriceIconText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #414141;
    padding-left: 11px;
    padding-top: 10px;
    cursor: pointer;
`

Content.Options = styled.div`
    margin-top: 18px;
    width: 100%;
    display: flex;
    align-items: center;
`
Content.OptionsCollors = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    position: relative;
    bottom: 8px;
    left: 0;
`
Content.OptionsCollorText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #414141;
`
Content.OptionsCollorsImg = styled.img`
    margin-top: 10px;
`
Content.OptionsArrow = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
    margin-left: 5px;
    cursor: pointer;
`
Content.OptionsQuantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    cursor: pointer;
    margin-bottom: 10px;
`
Content.OptionsQuantityText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #414141;
    position: relative;
    top: 0;
    left: 22px;
`
Content.OptionsQuantityCount = styled.p`
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    margin-top: 10px;
`

Content.OptionsQuantitySize = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    margin-bottom: 10px;
    margin-left: 45px;
`

Content.OptionsQuantitySizeText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #414141;
    
`

Content.OptionsQuantitySizeCount = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #414141;
    height: 30px;
    width: 187px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    margin-top: 17px;
    display: flex;
    align-items: center;
    justify-content: center;

`

Content.DescriptionTitle = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #414141;
    margin-top: 20px;
`

Content.DescriptionText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #686868;
    margin-top: 10px;
    height: 90px;
    width: 456px;
`

export const Reviews = styled.div`
    margin-top: 50px;
`
Reviews.Texts = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
Reviews.SupTitle = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #414141;
    cursor: pointer;
    margin-top: 30px;
`
Reviews.Line = styled.p`
    width: 122px;
    height: 3px;
    background: #245462;
    margin-top: 10px;
    border-radius: 6px;
`
Reviews.Title = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #414141;
    margin-left: 50px;
    cursor: pointer;

`

Reviews.Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

Reviews.Col = styled.div``

Reviews.Items = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 23px;
`

Reviews.Text = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #686868;
`

Reviews.Doshded = styled.p`
    border: 1px dashed #686868;
    width: 226px;
    height: 0px;
    margin-left: 10px;
`
Reviews.DoshdedOne = styled.p`
    border: 1px dashed #686868;
    width: 168px;
    height: 0px;
    margin-left: 10px;
`

Reviews.DoshdedTwo = styled.p`
    border: 1px dashed #686868;
    width: 152px;
    height: 0px;
    margin-left: 10px;
`
Reviews.DoshdedThree = styled.p`
    border: 1px dashed #686868;
    width: 229px;
    height: 0px;
    margin-left: 10px;
`
Reviews.DoshdedFour = styled.p`
    border: 1px dashed #686868;
    width: 208px;
    height: 0px;
    margin-left: 10px;
`
Reviews.DoshdedFive = styled.p`
    border: 1px dashed #686868;
    width: 166px;
    height: 0px;
    margin-left: 10px;
`
Reviews.DoshdedSixe = styled.p`
    border: 1px dashed #686868;
    width: 134px;
    height: 0px;
    margin-left: 10px;
`

Reviews.DoshdedBox = styled.p`
    border: 1px dashed #686868;
    width: 174px;
    height: 0px;
    margin-left: 10px;
`

Reviews.DoshdedUsb = styled.p`
    border: 1px dashed #686868;
    width: 104px;
    height: 0px;
    margin-left: 10px;
`
Reviews.DoshdedCase = styled.p`
    border: 1px dashed #686868;
    width: 172px;
    height: 0px;
    margin-left: 10px;
`
Reviews.DoshdedPillows = styled.p`
    border: 1px dashed #686868;
    width: 117px;
    height: 0px;
    margin-left: 10px;
`
Reviews.DoshdedForm = styled.p`
    border: 1px dashed #686868;
    width: 156px;
    height: 0px;
    margin-left: 10px;
`

Reviews.DoshdedRuss = styled.p`
    border: 1px dashed #686868;
    width: 173px;
    height: 0px;
    margin-left: 10px;
`

Reviews.SubText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #686868;
    margin-left: 10px;
`

export const CardContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
`

export const Title = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #414141;
    margin-top: 90px;
`