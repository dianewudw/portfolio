'use client'
import styled from 'styled-components'
import CryptoDiane from '../../public/CryptoDiane.svg';
import Image from 'next/image'
import styles from './page.module.css'
import Script from 'next/script'
import { useEffect } from 'react'

export default function NavigationBar() {

    return (
        <>
            <Main>
                <BrandLogo href="/">
                    <Pic
                        src="/CryptoDiane.svg"
                        alt="Brand Logo"
                        width={48}
                        height={48}
                        priority
                    />
                    <Logo>Diane Wu</Logo>
                </BrandLogo>
                <NavLinks>
                    <NavLink href="/contact">Contact</NavLink>
                    <NavLink href="/work">Work</NavLink>
                    <NavLink href='/about'>About</NavLink>
                    <NavLink href="/info">Info</NavLink>
                </NavLinks>
            </Main>
        </>
    )
}

const NavLink = styled.a`
    display: flex;
    text-decoration: none;
    align-content: center;
    font-family: "Bai Jamjuree";
    margin-left: 30px;
    margin-right:30px;
    font-size:30px;
    color: #333333;
`
const NavLinks = styled.nav`
    display:flex;
    justify-content: center;
  &hover:${NavLink}{
    color:#D632CF;
  }
`

const Pic = styled.img`
    display:flex;
`
const Main = styled.div`
    display:flex;
    justify-content:space-between;
    align-content: center;
    align-items: center;

`

const Logo = styled.p`
    display:flex;
    font-family: "Bai Jamjuree";
    font-size:30px;
    color:#333333;
`
const BrandLogo = styled.a`
    display:flex;
    align-items: center;
    text-decoration: none;
`



