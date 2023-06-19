import React from 'react'
import { Container, Content, LoadContainer, Button } from './ProductStyle'
import { useState } from 'react'
import { useEffect } from 'react'
import Load from '../components/Loader'
import { useRef } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Product() {
    const [load, setLoad] = useState(true)
    const [dep, setDep] = useState(false)
    const [data, setData] = useState([])
    const navigate = useNavigate()

    const url = useRef()
    const title = useRef()
    const name = useRef()
    const price = useRef()
    const width = useRef()
    const depeth = useRef()
    const height = useRef()

    const getData = () => {
        let product = {
            url: url.current.value,
            title: title.current.value,
            name: name.current.value,
            price: price.current.value,
            width: width.current.value,
            depeth: depeth.current.value,
            height: height.current.value,
        }

        fetch('https://6427fbdc46fd35eb7c492488.mockapi.io/student', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json"
            }
        })

            .then(res => res.json())
            .then(data => {
                setDep(!dep);
                    url.current.value = ""
                    title.current.value = ""
                    name.current.value = ""
                    price.current.value = ""
                    width.current.value = ""
                    depeth.current.value = ""
                    height.current.value = ""
            })
            .then(res => {
                navigate('/')
            },)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 1000)
    })
    return (
        <Container>
            {
                load ? <LoadContainer><Load /></LoadContainer>
                    :
                    <Content>
                        <div className='container mt-5'>
                            <div className='row'>
                                <h1 className='title'>Добавить продукт</h1>
                                <div className='col-md-3 mt-4'>
                                    <input ref={url} type="text" className='form-control' placeholder='Enter img url' />
                                </div>
                                <div className='col-md-3 mt-4'>
                                    <input ref={title} type="text" className='form-control' placeholder='Enter product title' />
                                </div>
                                <div className='col-md-3 mt-4'>
                                    <input ref={name} type="text" className='form-control' placeholder='Enter product name' />
                                </div>
                                <div className='col-md-3 mt-4'>
                                    <input ref={price} type="number" className='form-control' placeholder='Enter product price ($,₽)' />
                                </div>
                                <div className='col-md-3 mt-5'>
                                    <input ref={width} type="number" className='form-control' placeholder='Enter product width (cм)' />
                                </div>
                                <div className='col-md-3 mt-5'>
                                    <input ref={depeth} type="number" className='form-control' placeholder='Enter product depeth (cм)' />
                                </div>
                                <div className='col-md-3 mt-5'>
                                    <input ref={height} type="number" className='form-control' placeholder='Enter product height (cм)' />
                                </div>
                                <Button>
                                    <button onClick={getData} class="button-86" role="button">Добавить продукт</button>
                                </Button>
                            </div>
                        </div>
                    </Content>
            }
        </Container>
    )
}
