import React, { useEffect, useState } from 'react'
import { LoaderContainer, Content, Container, Sidebar, Menu, Wrapper } from './ChapterStyle'
import Load from '../components/Loader'
import Line from '../assets/img/Line.svg'
import Footer from '../components/Footer'
import Card from '../Pages/Card'
import axios from 'axios'
import Price from '../components/Slider'
import { NavLink } from 'react-router-dom'

export default function Chapter() {
    const [load, setLoad] = useState(true)
    const [card, setCard] = useState([])
    const [dep, setDep] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 1000)

        axios.get('https://6427fbdc46fd35eb7c492488.mockapi.io/student', {
            headers: {
                "Content-Type": "application/json",
            },

        })
            .then((res) => setCard(res.data))

    }, [dep])

    return (
        <Container>
            {
                load ? <LoaderContainer><Load /></LoaderContainer>
                    : <Content>
                        <Content.Title>
                            <NavLink to={'/'}> Главная</NavLink> / Гостинные / Мягкая мебель / Диваны
                        </Content.Title>
                        <Wrapper>
                            <Sidebar>
                                <Sidebar.Title>
                                    Раздел
                                </Sidebar.Title>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" >
                                                Гостинные
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <strong className="strong">Гостинные</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Мягкая мебель
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <strong className="strong">Мягкая мебель</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Диваны
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <strong className="strong">Диваны</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Sidebar.Price>
                                    Цена
                                </Sidebar.Price>
                                <Price />
                                <Sidebar.Texts>
                                    <Sidebar.SupText>2 000 ₽ </Sidebar.SupText>
                                    <Sidebar.Img src={Line} />
                                    <Sidebar.SupText>102 000 ₽ </Sidebar.SupText>
                                </Sidebar.Texts>
                                <Sidebar.Color>
                                    Цвет
                                </Sidebar.Color>
                                <Sidebar.Colors>
                                    <input class="form-check-input red" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <label class="form-check-label" for="flexCheckIndeterminate"></label>
                                    <input class="form-check-input green" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <label class="form-check-label" for="flexCheckIndeterminate"></label>
                                    <input class="form-check-input gray" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <label class="form-check-label" for="flexCheckIndeterminate"></label>
                                    <input class="form-check-input black" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <label class="form-check-label" for="flexCheckIndeterminate"></label>
                                    <input class="form-check-input color-1" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <label class="form-check-label" for="flexCheckIndeterminate"></label>
                                    <input class="form-check-input color-2" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <label class="form-check-label" for="flexCheckIndeterminate"></label>
                                </Sidebar.Colors>
                                <Sidebar.Brand>
                                    Бренд
                                </Sidebar.Brand>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <label class="form-check-label" for="flexCheckIndeterminate">
                                        Динс
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <label class="form-check-label" for="flexCheckIndeterminate">
                                        Кускен
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <label class="form-check-label" for="flexCheckIndeterminate">
                                        Эби
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <label class="form-check-label" for="flexCheckIndeterminate">
                                        Реджио
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <label class="form-check-label" for="flexCheckIndeterminate">
                                        Сайле
                                    </label>
                                </div>
                                <Sidebar.Text>
                                    Показать еще
                                </Sidebar.Text>
                            </Sidebar>
                            <Menu>
                                {
                                    card.map(item => <Card setDep={setDep} key={item.id} item={item} />)
                                }
                            </Menu>
                        </Wrapper>
                        <Footer />
                    </Content>
            }
        </Container>
    )
}
