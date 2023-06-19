import React, { useState } from 'react'
import { Conatiner, Content, } from './style'
import logo from '../assets/img/logo.svg'
import heard from '../assets/img/wishlist-icon.svg'
import bag from '../assets/img/bag.svg'
import profile from '../assets/img/profile-icon.svg'
import circle from '../assets/img/circle.svg'
import search from '../assets/img/search-icon.svg'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <Conatiner>
            <Content>
                <Content.Row>
                    <Content.Col>
                        <NavLink to={'/'}>
                            <Content.Logo src={logo} />
                        </NavLink>
                    </Content.Col>
                    <Content.Col>
                        <Content.Wrapper>
                            <Content.Search src={search} />
                            <Content.Input placeholder="Поиск" />
                        </Content.Wrapper>
                    </Content.Col>
                    <Content.Col>
                        <NavLink to={'/chapter'}>
                            <Content.Items src={heard} />
                        </NavLink>
                        <Content.Items src={bag} />
                        <Content.Circle src={circle} />
                        <NavLink to={'/login'}>
                            <Content.Items src={profile} />
                        </NavLink>
                    </Content.Col>
                </Content.Row>
            </Content>
        </Conatiner>
    )
}
