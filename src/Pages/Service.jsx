import React from 'react'
import { Col, Container, Content, Form, Input, LoadContainer, Row, Title, Wrapper, FormWrapper, ContactRow, Mail, Phone, Insta, Location, Btn, Submit, Address } from './ServiceStyle'
import { useState } from 'react'
import { useEffect } from 'react'
import Load from '../components/Loader'
import { NavLink } from 'react-router-dom'
import location from '../assets/img/map.svg'
import Footer from '../components/Footer'

export default function Service() {
    const [load, setload] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setload(false)
        }, 1000);
    })
    return (
        <Container>
            {
                load ? <LoadContainer><Load /></LoadContainer>
                    :
                    <Content>
                        <Title><NavLink to={'/'}>Главная </NavLink><span>/</span> <span>Контакты</span></Title>
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Title>Свяжитесь с нами</Form.Title>
                                    <Form.Content>
                                        <Wrapper>
                                            <Form.Text>Ваше имя</Form.Text>
                                            <Form.SupInput type="text" />
                                        </Wrapper>
                                        <Wrapper>
                                            <Form.Text className="email">Ваш e-mail</Form.Text>
                                            <Form.SubInput type="mail" />
                                        </Wrapper>
                                    </Form.Content>
                                    <FormWrapper>
                                        <Form.Text>Сообщение</Form.Text>
                                        <Input type='text' />
                                    </FormWrapper>
                                </Form>
                                <Btn>Прикрепить файл</Btn>
                                <Submit>Отправить</Submit>
                            </Col>
                            <Col>
                                <ContactRow>
                                    <Phone>
                                        <Phone.Icon><i class="bi bi-telephone"></i></Phone.Icon>
                                        <Phone.Text>8 (964) 89 99 119</Phone.Text>
                                    </Phone>
                                    <Mail>
                                        <Mail.Icon><i class="bi bi-envelope"></i></Mail.Icon>
                                        <Mail.Text>mebel_loft_anapa@mail.ru</Mail.Text>
                                    </Mail>
                                </ContactRow>
                                <Insta>
                                    <Insta.Icon><i class="bi bi-instagram"></i></Insta.Icon>
                                    <Insta.Text>INSTAGRAM</Insta.Text>
                                </Insta>
                                <Location>
                                    Адрес: г. Анапа, Анапское шоссе, 30 Ж/К Черное море
                                </Location>
                            </Col>
                        </Row>
                        <Address>Адрес нашей компании</Address>
                        <Address.Img src={location} />
                        <Footer />
                    </Content>
            }
        </Container>
    )
}
