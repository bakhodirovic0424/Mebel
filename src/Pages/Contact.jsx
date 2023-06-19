import React from 'react'
import { Container, Header } from './ContactStyle'
import delivery from '../assets/img/delivery-icon.svg'
import phone from '../assets/img/phone.svg'
import { NavLink } from 'react-router-dom'

export default function Contact() {
    return (
        <Container>
            <Header>
                <Header.Row>
                    <Header.Col>
                        <Header.Menu>
                            <Header.Items>
                                <NavLink to={'/'}>
                                    Главная
                                </NavLink>
                            </Header.Items>
                            <Header.Items>
                                О нас
                            </Header.Items>
                            <Header.Items>
                                <NavLink to={'/contact'}> Контакты</NavLink>
                            </Header.Items>
                        </Header.Menu>
                    </Header.Col>
                    <Header.Col>
                        <Header.Content>
                            <Header.Phone>
                                <Header.PhoneIcon src={phone} />
                                8 (964) 89 99 119
                            </Header.Phone>
                            <Header.Delivery>
                                <Header.DeliveryIcon src={delivery} />
                                Доставка
                            </Header.Delivery>
                            
                        </Header.Content>
                    </Header.Col>
                </Header.Row>
            </Header>
        </Container>
    )
}
