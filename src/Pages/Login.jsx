import React, { useEffect, useState } from 'react'
import { Container, Content, Details, Img, Input, Inputs, LoaderContainer, OrderImg, Price, Wrapper } from './LoginStyle'
import Load from '../components/Loader';
import coin from '../assets/img/cashback.svg'
import rubl from '../assets/img/rubel.svg'
import suprice from '../assets/img/suprise.svg'
import Image from '../assets/img/image.svg'
import mebel from '../assets/img/mebel.svg'
import mebel1 from '../assets/img/mebel1.svg'
import mebel2 from '../assets/img/mebel2.svg'
import Footer from '../components/Footer'

export default function Login() {
    const [load, setLoad] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 1000)
    })

    return (
        <Container>
            {
                load ? <LoaderContainer><Load /></LoaderContainer>
                    : <Content>
                        <Content.Title>Главная / Личный кабинет</Content.Title>
                        <Content.SubTitle>
                            <Content.SupText>Бонусная программа</Content.SupText>
                            <Content.SubText>У вас 0 бонусных баллов <span className='text'>Правила бонусной программы</span></Content.SubText>
                        </Content.SubTitle>
                        <Price>
                            <Price.Row>
                                <Price.Col>
                                    <Price.Content>
                                        <Price.Img src={coin} />
                                        <Price.Text>Возвращаем до 7% на бонусный счет</Price.Text>
                                    </Price.Content>
                                </Price.Col>
                                <Price.Col>
                                    <Price.Content>
                                        <Price.Img src={rubl} />
                                        <Price.Text>1 бонус = 1 рубль</Price.Text>
                                    </Price.Content>
                                </Price.Col>
                                <Price.Col>
                                    <Price.Content>
                                        <Price.Img src={suprice} />
                                        <Price.Text>Оплачивайте бонусами до 20% от покупки</Price.Text>
                                    </Price.Content>
                                </Price.Col>
                            </Price.Row>
                        </Price>
                        <Details>
                            <Details.Row>
                                <Details.Col>
                                    <Details.Title>Личные данные</Details.Title>
                                    <Inputs>
                                        <Inputs.Col>
                                            <Details.Text className="name">Имя</Details.Text>
                                            <Input />
                                            <Details.Text>Фамилия</Details.Text>
                                            <Input />
                                        </Inputs.Col>
                                        <Inputs.Col>
                                            <Details.Text className="name" type="mail">E-mail</Details.Text>
                                            <Input />
                                            <Details.Text>Номер телефона</Details.Text>
                                            <Input type="number" />
                                        </Inputs.Col>
                                    </Inputs>
                                    <Details.Text className="name">Город</Details.Text>
                                    <Input className='city' />

                                    <Details.InputText>Улица</Details.InputText>
                                    <Details.Input />
                                    <Details.Address>
                                        <Wrapper>
                                            <Details.InputText>Дом/Корпус</Details.InputText>
                                            <Details.SupInput type="number" />
                                        </Wrapper>
                                        <Wrapper className='wrapper-secondry'>
                                            <Details.InputText>Квартира</Details.InputText>
                                            <Details.SubInput type="number" />
                                        </Wrapper>
                                    </Details.Address>
                                    <Details.Btn>Изменить</Details.Btn>
                                </Details.Col>
                                <Details.Col className="order-col">
                                    <Details.Title>Мои заказы</Details.Title>
                                    <div className="container text-center">
                                        <div className="row border">
                                            <div className="col-sm-6 grid-product">Товар</div>
                                            <div className="col-sm-2 border">Цена</div>
                                            <div className="col-sm-2 border">Дата</div>
                                            <div className="col-sm-2 border">Статус</div>
                                        </div>
                                        <div className="row border">
                                            <div className='col-sm-6'><Img src={Image} /><span className='grid-text'>Кускен Navy Blue</span></div>
                                            <div className="col-sm-2 border">16990</div>
                                            <div className="col-sm-2 border">01.05.2020</div>
                                            <div className="col-sm-2 border">Ожидается</div>
                                        </div>
                                        <div className="row border">
                                            <div className='col-sm-6'><Img src={mebel} /><span className='grid-text'>Кускен Navy Blue</span></div>
                                            <div className="col-sm-2 border">28490</div>
                                            <div className="col-sm-2 border">01.05.2020</div>
                                            <div className="col-sm-2 border">Оплачено <br /> 50%</div>
                                        </div>
                                        <div className="row border">
                                            <div className='col-sm-6'><Img src={mebel1} /><span className='grid-text'>Кускен Navy Blue</span></div>
                                            <div className="col-sm-2 border">21990</div>
                                            <div className="col-sm-2 border">01.05.2020</div>
                                            <div className="col-sm-2 border">Доставлено</div>
                                        </div>
                                        <div className="row border">
                                            <div className='col-sm-6'><Img src={mebel2} /><span className='grid-text'>Кускен Navy Blue</span></div>
                                            <div className="col-sm-2 border">21990</div>
                                            <div className="col-sm-2 border">01.05.2020</div>
                                            <div className="col-sm-2 border">Отменен</div>
                                        </div>
                                    </div>
                                </Details.Col>
                            </Details.Row>
                        </Details>
                        <Footer />
                    </Content>
            }
        </Container>
    )
}
