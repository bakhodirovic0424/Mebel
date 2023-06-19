import { Carousel } from 'antd';
import headers from '../assets/img/header-img.png'
import img from '../assets/img/img.jpg'
import { Img } from './CoruselStyle';
import { NavLink } from 'react-router-dom';

const Slider = () => (
  <Carousel autoplay>
    <div className='content'>
      <Img src={headers} />
      <Img.Title>loft мебель</Img.Title>
      <Img.Text>Современная и удобная мебель в Анапе</Img.Text>
      <NavLink to={'/chapter'}>
        <Img.Btn>СМОТРЕТЬ КАТАЛОГ</Img.Btn>
      </NavLink>
    </div>
    <div className='content'>
      <Img src={headers} />
      <Img.Title>loft мебель</Img.Title>
      <Img.Text>Современная и удобная мебель в Анапе</Img.Text>
      <NavLink to={'/chapter'}>
        <Img.Btn>СМОТРЕТЬ КАТАЛОГ</Img.Btn>
      </NavLink>
    </div>
    <div className='content'>
      <Img src={headers} />
      <Img.Title>loft мебель</Img.Title>
      <Img.Text>Современная и удобная мебель в Анапе</Img.Text>
      <NavLink to={'/chapter'}>
        <Img.Btn>СМОТРЕТЬ КАТАЛОГ</Img.Btn>
      </NavLink>
    </div>
    <div className='content'>
      <Img src={headers} />
      <Img.Title>loft мебель</Img.Title>
      <Img.Text>Современная и удобная мебель в Анапе</Img.Text>
      <NavLink to={'/chapter'}>
        <Img.Btn>СМОТРЕТЬ КАТАЛОГ</Img.Btn>
      </NavLink>
    </div>
  </Carousel>
);
export default Slider;