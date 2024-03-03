'use client'
import styled from 'styled-components'
import { useState } from 'react'
import NavigationBar from "@/app/NavigationBar";

import Link from 'next/link'

export default function Work(){
    const [ image, setImage ] = useState('/EverHomeCare.png')
    //based on hover state, view certain image, EHC, A, KD


    return(
        <>
        <NavigationBar />
            <h1 class='flex justify-center text-5xl md:text-8xl text-gray font-display pt-10 md:pt-20'>Recent Work</h1>
            <div class='flex justify-center flex-wrap direction-row items-center my-5md:my-40 '>
                { setImage ? <img src={image} alt='cover image' class='px-5 md:p-0 md:max-h-2xl md:max-w-2xl' /> : null}

                <div class='flex-col'>
                    <ul>
                        <li>
                            <Link href='/work/everhomecare' class='flex flex-nowrap font-body text-3xl sm:text-6xl text-gray hover:text-diane sm:ml-10'>001 Ever Home</Link>
                        </li>
                        <li>
                            <Link href='/work/artfolio' class='flex flex-nowrap font-body text-3xl sm:text-6xl text-gray hover:text-diane sm:ml-10'>002 Artfolio</Link>
                        </li>
                        <li>
                            <Link href='/work/ketodiet' class='flex flex-nowrap font-body text-3xl sm:text-6xl text-gray hover:text-diane sm:ml-10'>003 KetoDiet</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class='flex flex-row justify-end p-20'>
                <a href='https://linkedin.com/in/dianewudw'>
                    <img src='/linkedin.svg' alt='linkedin icon' class='max-h-20 max-w-20 mx-4'/>
                </a>
                <a href='https://github.com/dianewudw'>
                    <img src='inverted_githublogo.png' alt='github icon' class='max-h-20 max-w-20 mx-4' />
                </a>
            </div>
        </>
    )
}


const MainContent = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    margin: 800px 0px 0px 300px;
    
`

const Title = styled.p`
    display:flex;
    font-size:100px;
    color: #333333;
    font-family:'K2D';
    margin: 30px 0px 30px 0px;
`
const TableOfContents = styled.div`
    display:flex;
    align-items: flex-start;
    flex-direction: column;
    margin:0px 180px 100px 300px;
    :hover${Title}{
      color:#AA57CA;
    }
`