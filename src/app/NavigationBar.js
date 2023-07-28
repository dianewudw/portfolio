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
            <div class="flex justify-between items-center content-center p-20">
                <a href="/home" class="flex flex-nowrap inline-flex items-center no-underline">
                    <img
                        src="/CryptoDiane.svg"
                        alt="Brand Logo"
                        class='flex w-20 h-20'
                    />
                    <p class='flex flex-nowrap text-2xl font-header text-white mx-3'>Diane Wu</p>
                </a>
                <div class='flex contents-center'>
                    <Link href="/about" passHref class='flex content-center no-underline margin mx-8 text-2xl hover:text-diane font-body text-white'>
                        About
                    </Link>
                    <Link href="/resume" passHref class='flex content-center no-underline margin mx-8 text-2xl hover:text-diane font-body text-white'>
                        Resume
                    </Link>
                    <Link href="/work" passHref class='flex content-center no-underline margin mx-8 text-2xl hover:text-diane font-body text-white'>
                        Work
                    </Link>
                    <Link href="/info" passHref class='flex content-center no-underline margin mx-8 text-2xl hover:text-diane font-body text-white'>
                        Info
                    </Link>
                </div>
            </div>
        </>
    )
}





