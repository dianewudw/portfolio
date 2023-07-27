'use client'
import styled from 'styled-components'
import CryptoDiane from '../../public/CryptoDiane.svg';
import Image from 'next/image'
import styles from './page.module.css'
import Script from 'next/script'
import { useEffect } from 'react'
import NavigationBar from "@/app/NavigationBar";
import drawCircle from "@/app/arc";
import RecentWork from './RecentWork'
export default function Home() {


  return (
      <>
        <MainDesign>
            <NavigationBar/>
            <Body>
                <Header>
                  <HeaderFirstLine>Hey,</HeaderFirstLine>
                    <Name>It's Diane</Name>
                    <Squiggle src='/Squiggle.svg' priority/>
                </Header>
                <Content>
                    <Image src='/ProfileImage.svg'                         alt="Brand Logo"
                           width={200}
                           height={200}
                           priority />
                    <TagLine>Product designer & developer, currently getting creative @ UX Academy</TagLine>
                </Content>
                <Welcome>
                    <Text>Welcome</Text>
                    <Arrow
                        src='/arrow.svg'
                        width={50}
                        height={50}
                        priority
                    />
                </Welcome>
                <SecondHeader>Recent Work</SecondHeader>
                <RecentWork/>
            </Body>
        </MainDesign>
      </>
  )
}

const MainDesign = styled.div`
    height: 100%;
    width: 100%;
    padding:40px;
    background-color:#FDFBFD
`
const Body = styled.div`
    display:flex;
    flex-direction: column;
    margin-top:200px;
`
const Header = styled.div`
    display: flex;
    flex-direction: column;
`

const SecondHeader = styled.h1`
    display:flex;
    justify-content: center;
    font-size:150px;
    color: #333333;
    font-family: 'Gentium Book Basic';
    font-style: normal;
    margin-top:300px;
`

const Content = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 30px;
    margin-top:200px;
    margin-bottom:200px;
`
const Arrow = styled.img`
    display:flex;
`

const Squiggle = styled.img`
    display:flex;
    height: 50px;
    width: 250px;
    margin-left:180px;
    
`
const Name = styled.h1`
    display:flex;
    font-family:'Gentium Book Basic';
    font-style:italic;
    color: #333333;
    font-size:150px;
    margin-bottom:-30px;
`
const TagLine = styled.p`
    display:flex;
    color:#333333;
    font-size: 70px;
    font-family:'K2D';
    text-align: end;
`
const Text = styled.p`
  display: flex;
  border-color: #333333;
  justify-content: center;
`
const Welcome = styled.div`
  display: flex;
  align-items: center;
  font-family: "Bai Jamjuree";
  margin-left: 30px;
  margin-right:30px;
  margin-top:200px;
  margin-bottom:200px;
  font-size:50px;
  flex-direction: column;
  color: #333333;`

const HeaderFirstLine = styled.h2`
    display: flex;
    color:#333333;
  font-family: "Bai Jamjuree";
  font-Size: 60px;
`