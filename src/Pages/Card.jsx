import React from 'react'
import { Link } from 'react-router-dom'




export default function Card({ item, setDep }) {
  const removeProduct = () => {
    fetch(`https://6427fbdc46fd35eb7c492488.mockapi.io/student/${item.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "aplication/json"
      }
    })
      .then(res => res.json())
      .then(data => setDep((dep) => !dep))
  }

  return (
    <>

      <div className='col'>
        <div className='col-content'>
          <img src={item.url} alt="Image" className='card-img' />
          <i className="ri-heart-line img-icon"></i>
          <i class="bi bi-trash3 img-trash" onClick={removeProduct}></i>
          <h3 className='card-title'>{item.title}</h3>
          <p className='card-text'>{item.name}</p>
          <h2 className='card-price'>{item.price} ₽</h2>
          <p className='card-size'>Размеры</p>
          <div className='options'>
            <div className='sizes'>
              <p className='sizes-title'>ШИРИНА</p>
              <p className='sizes-text'>{item.width} CM</p>
            </div>
            <p className='icon'>×</p>
            <div className='sizes'>
              <p className='sizes-title'>ГЛУБИНА</p>
              <p className='sizes-text'>{item.depeth} CM</p>
            </div>
            <p className='icon'>×</p>
            <div className='sizes'>
              <p className='sizes-title'>ВЫСОТА</p>
              <p className='sizes-text'>{item.height} CM</p>
            </div>
          </div>
          <Link to={'/info'}>
            <div className='button'>Добавить в корзину</div>
          </Link>
        </div>
      </div>
    </>
  )
}
