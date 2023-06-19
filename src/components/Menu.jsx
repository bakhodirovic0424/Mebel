import React from 'react'
import { Container, Content } from './MenuStyle'
import kitchen from '../assets/img/kitchen-icon.svg'
import bedroom from '../assets/img/bedroom-icon.svg'
import living from '../assets/img/livingroom-icon.svg'
import closet from '../assets/img/closet-icon.svg'
import office from '../assets/img/office-icon.svg'
import childrens from '../assets/img/childrensroom-icon.svg'
import etc from '../assets/img/etc.svg'
import { NavLink } from 'react-router-dom'

export default function Menu() {
    return (
        <Container>
            <Content>
                <Content.Row>
                    <Content.Col>
                        <Content.MenuContainer>
                            <Content.Imgs src={kitchen} />
                            <Content.Text>
                                Кухни
                            </Content.Text>
                        </Content.MenuContainer>
                        <Content.MenuContainer>
                            <Content.Imgs src={bedroom} />
                            <Content.Text>
                                Спальни
                            </Content.Text>
                        </Content.MenuContainer>
                        <Content.MenuContainer>
                            <Content.Imgs src={living} />
                            <Content.Text>
                                Гостинные
                            </Content.Text>
                        </Content.MenuContainer>
                        <Content.MenuContainer>
                            <Content.Imgs src={closet} />
                            <Content.Text>
                                Прихожие
                            </Content.Text>
                        </Content.MenuContainer>
                        <Content.MenuContainer>
                            <Content.Imgs src={office} />
                            <Content.Text>
                                Офисная мебель
                            </Content.Text>
                        </Content.MenuContainer>
                        <Content.MenuContainer>
                            <Content.Imgs src={childrens} />
                            <Content.Text>
                                Детская
                            </Content.Text>
                        </Content.MenuContainer>
                        <Content.RedText>
                            Акция
                        </Content.RedText>
                        <Content.Icon src={etc} />
                    </Content.Col>
                </Content.Row>
            </Content>
        </Container>
    )
}
