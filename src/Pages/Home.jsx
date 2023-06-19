import React, { useState, useEffect } from 'react'
import { Arrow, Container, Content, LoadContainer, AddButton } from './HomeStyle';
import Load from '../components/Loader';
import Slider from '../components/Corusel';
import axios from 'axios';
import Card from './Card';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const url = 'https://6427fbdc46fd35eb7c492488.mockapi.io/student'

export default function Home() {
    const [load, setLoad] = useState(true);
    const [card, setCard] = useState([])
    const [dep, setDep] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoad(false);

            axios.get(url, {
                headers: {
                    "Content-Type": "application/json",
                },

            })
                .then((res) => setCard(res.data))

        }, 1000);
    }, [dep])
    return (
        <Container>
            {
                load ? <LoadContainer><Load /></LoadContainer>
                    :
                    <Content>
                        <Slider />
                        <Content.Wrapper>
                            <Content.Title>
                                Хиты продаж
                            </Content.Title>
                            <AddButton>
                                <Link to={'/addProduct'}>
                                    Добавить продукт
                                </Link>
                            </AddButton>
                        </Content.Wrapper>
                        <Content.Row>
                            <Content.Col>
                                {
                                    card.map(item => <Card setDep={setDep} key={item.id} item={item} />)
                                }
                            </Content.Col>
                        </Content.Row>
                        <Footer />
                    </Content>
            }
        </Container>
    )
}
