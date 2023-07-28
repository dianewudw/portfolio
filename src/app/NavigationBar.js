'use client'
import styled from 'styled-components'
import CryptoDiane from '../../public/CryptoDiane.svg';
import Image from 'next/image'
import styles from './page.module.css'
import Script from 'next/script'
import {useEffect} from 'react'
import Link from "next/link";
//  display: flex;
//   font-family: "Bai Jamjuree";
//   font-size: 30px;
//   color: #333333;
export default function NavigationBar() {
    return (
        <>
            <div class="flex justify-between items-center content-center">
                <a href="/home" class="flex flex-nowrap inline-flex items-center no-underline">
                    <img
                        src="/CryptoDiane.svg"
                        alt="Brand Logo"
                        class='flex max-w-48 max-h-48'
                    />
                    <p class='flex flex-nowrap text-3xl'>Diane Wu</p>
                </a>
                <div class='flex contents-center'>
                    <Link href="/contact" passHref class='flex content-center no-underline margin mx-8 text-3xl hover:text-diane font-body text-gray'>
                        Contact
                    </Link>

                    <Link href="/work" passHref class='flex content-center no-underline margin mx-8 text-3xl hover:text-diane font-body text-gray'>
                        Work
                    </Link>

                    <Link href="/about" passHref class='flex content-center no-underline margin mx-8 text-3xl hover:text-diane font-body text-gray'>
                        About
                    </Link>

                    <Link href="/info" passHref class='flex content-center no-underline margin mx-8 text-3xl hover:text-diane font-body text-gray'>
                        Info
                    </Link>

                </div>
            </div>
        </>
    )
}





