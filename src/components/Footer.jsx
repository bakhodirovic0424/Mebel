import React from 'react'
import { Container, Content, Navigate, Title, Text } from './FooterStyle'
import logo from '../assets/img/logo2.svg'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <Container>
            <Content>
                <Content.Row>
                    <Content.Col>
                        <Title>
                            НАВИГАЦИЯ
                        </Title>
                        <Navigate>
                            <Navigate.Col>
                                <Navigate.Item>
                                    <NavLink to={'/chapter'}>Кухни</NavLink>
                                </Navigate.Item>
                                <Navigate.Item>Спальни</Navigate.Item>
                                <Navigate.Item>Гостинные</Navigate.Item>
                            </Navigate.Col>
                            <Navigate.Col className="cols">
                                <Navigate.Item>Прихожие</Navigate.Item>
                                <Navigate.Item>Офисная мебель</Navigate.Item>
                                <Navigate.Item>Детская</Navigate.Item>
                            </Navigate.Col>
                            <Navigate.Col>
                                <Navigate.Item>Шкафы</Navigate.Item>
                                <Navigate.Item>Матрасы</Navigate.Item>
                                <Navigate.Item>Мягкая мебель</Navigate.Item>
                            </Navigate.Col>
                        </Navigate>
                        <Text>
                            <span className='sale'>Акция</span>
                            <span className='new'>Новинки</span>
                        </Text>
                    </Content.Col>
                    <Content.Col className="col-texts">
                        <Content.Img src={logo} />
                        <Content.Title>
                            г. Анапа, Анапское шоссе,<br />
                            <span className='span'>30 Ж/К Черное море</span>
                        </Content.Title>
                        <Content.Text>
                            <p><i class="bi bi-telephone"></i>
                                8 (964) 89 99 119</p>
                            <p><i class="bi bi-instagram"></i>
                                INSTAGRAM</p>
                            <p><i class="bi bi-envelope"></i>
                                mebel_loft_anapa@mail.ru</p>
                        </Content.Text>
                    </Content.Col>
                </Content.Row>
            </Content>
        </Container>
    )
}
