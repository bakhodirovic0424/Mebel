import React, { useEffect, useState } from 'react'
import { CardContent, Container, Content, LoaderContainer, Reviews, Title, } from './InfoStyle'
import Load from '../components/Loader'
import Image1 from '../assets/img/image1.svg'
import imgs2 from '../assets/img/image2.svg'
import imgs3 from '../assets/img/image3.svg'
import imgs4 from '../assets/img/image4.svg'
import imgs5 from '../assets/img/image5.svg'
import imgs6 from '../assets/img/image6.svg'
import yellow from '../assets/img/yellow.svg'
import Card from '../Pages/Card'
import Footer from '../components/Footer'
import axios from 'axios'
import Star from '../components/Star'


export default function Info() {
    const [load, setLoad] = useState(true)
    const [card, setCard] = useState([])
    const [dep, setDep] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)

            axios.get('https://6427fbdc46fd35eb7c492488.mockapi.io/student', {
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => setCard(res.data))
        }, 1000)
    }, [dep])
    return (
        <Container>
            {
                load ? <LoaderContainer><Load /></LoaderContainer>
                    : <Content>
                        <Content.Title>
                            Главная  /  Гостинные  /  Мягкая мебель  /  Диваны
                        </Content.Title>
                        <Content.Row>
                            <Content.Col>
                                <Content.Img src={Image1} />
                                <Content.CardImg>
                                    <Content.Arrow>
                                        <i class="ri-arrow-left-s-line"></i>
                                    </Content.Arrow>
                                    <Content.Imgs src={imgs2} />
                                    <Content.Imgs src={imgs3} />
                                    <Content.Imgs src={imgs4} />
                                    <Content.Imgs src={imgs5} />
                                    <Content.Imgs src={imgs6} />
                                    <Content.Arrow>
                                        <i class="ri-arrow-right-s-line"></i>
                                    </Content.Arrow>
                                </Content.CardImg>
                            </Content.Col>
                            <Content.Col className="two-col">
                                <Star />
                                <Content.SupTitle>
                                    Динс Velvet Yellow
                                </Content.SupTitle>
                                <Content.SubTitle>
                                    Диваны
                                </Content.SubTitle>
                                <Content.Price>
                                    <Content.PriceText>
                                        4 690₽
                                    </Content.PriceText>
                                    <Content.PriceBtn>
                                        Купить
                                    </Content.PriceBtn>
                                    <Content.PriceLife>
                                        <Content.PriceIcon>
                                            <i class="bi bi-heart"></i>
                                        </Content.PriceIcon>
                                        <Content.PriceIconText>
                                            Добавить в желаемое
                                        </Content.PriceIconText>
                                    </Content.PriceLife>
                                </Content.Price>
                                <Content.Options>
                                    <Content.OptionsCollors>
                                        <Content.OptionsCollorText>
                                            Цвет
                                        </Content.OptionsCollorText>
                                        <Content.OptionsCollorsImg src={yellow} />
                                    </Content.OptionsCollors>
                                    <Content.OptionsArrow>
                                        <i class="bi bi-chevron-down"></i>
                                    </Content.OptionsArrow>
                                    <Content.OptionsQuantity>
                                        <Content.OptionsQuantityText>
                                            Количество
                                        </Content.OptionsQuantityText>
                                        <Content.OptionsQuantityCount>
                                            1
                                        </Content.OptionsQuantityCount>
                                    </Content.OptionsQuantity>
                                    <Content.OptionsArrow>
                                        <i class="bi bi-chevron-down"></i>
                                    </Content.OptionsArrow>
                                    <Content.OptionsQuantitySize>
                                        <Content.OptionsQuantitySizeText>
                                            Размер (Д × Ш × В)
                                        </Content.OptionsQuantitySizeText>
                                        <Content.OptionsQuantitySizeCount>
                                            218 СМ
                                            ×
                                            95 СМ
                                            ×
                                            90 СМ
                                        </Content.OptionsQuantitySizeCount>
                                    </Content.OptionsQuantitySize>
                                    <Content.OptionsArrow>
                                        <i class="bi bi-chevron-down"></i>
                                    </Content.OptionsArrow>
                                </Content.Options>
                                <Content.DescriptionTitle>
                                    Описание
                                </Content.DescriptionTitle>
                                <Content.DescriptionText>
                                    Лаконичные линии и простые формы, безупречный стиль и индивидуальность – все это диван «Динс». Сдержанный скандинавский дизайн украсит любую современную обстановку. Элегантность, комфорт и функциональность, собранные воедино – «Динс» просто создан для размеренного отдыха в кругу семьи или компании друзей!
                                </Content.DescriptionText>
                            </Content.Col>
                        </Content.Row>
                        <Reviews>
                            <Reviews.Texts>
                                <Reviews.SupTitle>
                                    Характеристики
                                    <Reviews.Line></Reviews.Line>
                                </Reviews.SupTitle>
                                <Reviews.Title>Отзывы</Reviews.Title>
                                <Reviews.Title>Доставка и оплата</Reviews.Title>
                            </Reviews.Texts>
                            <Reviews.Row>
                                <Reviews.Col>
                                    <Reviews.Items>
                                        <Reviews.Text>Размер</Reviews.Text>
                                        <Reviews.Doshded></Reviews.Doshded>
                                        <Reviews.SubText>218 × 95 × 90 (Дл. × Шир. × Выс.)</Reviews.SubText>
                                    </Reviews.Items>
                                    <Reviews.Items>
                                        <Reviews.Text>Спальное место</Reviews.Text>
                                        <Reviews.DoshdedOne></Reviews.DoshdedOne>
                                        <Reviews.SubText>195 × 144 × 44 (Дл. × Шир. × Выс.)</Reviews.SubText>
                                    </Reviews.Items>
                                    <Reviews.Items>
                                        <Reviews.Text>Посадочное место</Reviews.Text>
                                        <Reviews.DoshdedTwo></Reviews.DoshdedTwo>
                                        <Reviews.SubText>50 × 44 (Глуб. × Выс.)</Reviews.SubText>
                                    </Reviews.Items>
                                    <Reviews.Items>
                                        <Reviews.Text>Каркас</Reviews.Text>
                                        <Reviews.DoshdedThree></Reviews.DoshdedThree>
                                        <Reviews.SubText>массив, фанера, ДВП, пружинная змейка</Reviews.SubText>
                                    </Reviews.Items>
                                    <Reviews.Items>
                                        <Reviews.Text>Механизм</Reviews.Text>
                                        <Reviews.DoshdedFour></Reviews.DoshdedFour>
                                        <Reviews.SubText>пантограф</Reviews.SubText>
                                    </Reviews.Items>
                                    <Reviews.Items>
                                        <Reviews.Text>Материал ножек</Reviews.Text>
                                        <Reviews.DoshdedFive></Reviews.DoshdedFive>
                                        <Reviews.SubText>массив</Reviews.SubText>
                                    </Reviews.Items>
                                    <Reviews.Items>
                                        <Reviews.Text>Наполнение подушек</Reviews.Text>
                                        <Reviews.DoshdedSixe></Reviews.DoshdedSixe>
                                        <Reviews.SubText>крошка ППУ, холлофайбер</Reviews.SubText>
                                    </Reviews.Items>
                                </Reviews.Col>
                                <Reviews.Col className="Colls">
                                    <Reviews.Items>
                                        <Reviews.Text>Бельевой ящик</Reviews.Text>
                                        <Reviews.DoshdedBox></Reviews.DoshdedBox>
                                        <Reviews.SubText>есть</Reviews.SubText>
                                    </Reviews.Items>
                                    <Reviews.Items>
                                        <Reviews.Text>Зарядное устройство USB</Reviews.Text>
                                        <Reviews.DoshdedUsb></Reviews.DoshdedUsb>
                                        <Reviews.SubText>нет</Reviews.SubText>
                                    </Reviews.Items>
                                    <Reviews.Items>
                                        <Reviews.Text>Съемный чехол</Reviews.Text>
                                        <Reviews.DoshdedCase></Reviews.DoshdedCase>
                                        <Reviews.SubText>нет</Reviews.SubText>
                                    </Reviews.Items>
                                    <Reviews.Items>
                                        <Reviews.Text>Декоративные подушки</Reviews.Text>
                                        <Reviews.DoshdedPillows></Reviews.DoshdedPillows>
                                        <Reviews.SubText>есть</Reviews.SubText>
                                    </Reviews.Items>
                                    <Reviews.Items>
                                        <Reviews.Text>Вариант доставки</Reviews.Text>
                                        <Reviews.DoshdedForm></Reviews.DoshdedForm>
                                        <Reviews.SubText>в разобранном виде</Reviews.SubText>
                                    </Reviews.Items>
                                    <Reviews.Items>
                                        <Reviews.Text>Производитель</Reviews.Text>
                                        <Reviews.DoshdedRuss></Reviews.DoshdedRuss>
                                        <Reviews.SubText>Россия</Reviews.SubText>
                                    </Reviews.Items>
                                </Reviews.Col>
                            </Reviews.Row>
                        </Reviews>
                        <Title>Хиты продаж</Title>
                        <CardContent>

                            {
                                card.map(item => <Card setDep={setDep} key={item.id} item={item} />)
                            }
                        </CardContent>
                        <Footer />
                    </Content>
            }
        </Container>
    )
}
