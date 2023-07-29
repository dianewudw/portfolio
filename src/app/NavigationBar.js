'use client'
import styled from 'styled-components'
import CryptoDiane from '../../public/CryptoDiane.svg';
import Image from 'next/image'
import styles from './page.module.css'
import Script from 'next/script'
import {useEffect} from 'react'
import Link from "next/link";
import Accordian from "@/app/accordian";
//  display: flex;
//   font-family: "Bai Jamjuree";
//   font-size: 30px;
//   color: #333333;
export default function NavigationBar() {
    return (
        <>
            <div class="flex justify-between items-center content-center py-5 px-5 md:px-20 font-header">
                <a href="/home" class="flex flex-nowrap inline-flex items-center no-underline">
                    <img
                        src="/CryptoDiane.svg"
                        alt="Brand Logo"
                        class='flex w-12 h-12 md:w-20 md:h-20'
                    />
                    <p class='hidden md:flex flex-nowrap text-2xl text-white mx-3'>Diane Wu</p>
                </a>
                <div class='md:flex contents-center'>
                    <img src='/square.svg' alt='hamburger icon' class=' flex md:hidden w-12 h-12 md:w-20 md:h-20' />
                    <Link href="/about" passHref class='hidden md:flex content-center no-underline margin mx-8 text-xl hover:text-diane text-white'>
                       <p class='font-body'>About</p>
                    </Link>
                    <Link href="/resume" passHref class='hidden md:flex content-center no-underline margin mx-8 text-xl hover:text-diane text-white'>
                        Resume
                    </Link>
                    <Link href="/work" passHref class='hidden md:flex content-center no-underline margin mx-8 text-xl hover:text-diane text-white'>
                        Work
                    </Link>
                    <Link href="/info" passHref class='hidden md:flex content-center no-underline margin mx-8 text-xl hover:text-diane text-white'>
                        Info
                    </Link>
                </div>
            </div>
        </>
    )
}





