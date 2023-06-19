import styled from "styled-components";


export const Conatiner = styled.div`
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
`

export const Content = styled.div`
`

Content.Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    @media screen and (max-width: 400px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

Content.Col = styled.div`
@media screen  and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`

Content.Logo = styled.img`
margin-bottom: 20px;
`

Content.Input = styled.input`
        margin-left: 20px;
        @media screen and (max-width: 400px) {
            width: 100%;
            padding-top: 10px;
    :hover::placeholder{
                color: red;
            }
        }
`

Content.Items = styled.img`
    cursor: pointer;
    padding-right: 35px;
    @media screen and (max-width: 400px) {
        display: none;
    }
`

Content.Circle = styled.img`
    position: relative;
    bottom: 4px;
    right: 41px;
    @media screen and (max-width: 400px) {
        display: none;
    }
`

Content.Wrapper = styled.div`
    border: 1px solid #E6E6E6;
    height: 50px;
    width: 839px;
    border-radius: 0px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 15px;
    @media screen and (max-width: 400px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: center;
        align-items: center;
    }
`

Content.Search = styled.img`
@media screen and (max-width: 400px) {
    display: none;
}
`
