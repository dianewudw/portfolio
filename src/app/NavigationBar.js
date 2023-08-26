'use client'
import Link from "next/link";

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
                    <p class='md:flex flex-nowrap text-2xl text-gray mx-3'>Diane Wu</p>
                </a>
                <div class='md:flex contents-center'>
                    <Link href="/about" passHref class='hidden md:flex content-center no-underline margin mx-8 text-2xl hover:text-diane text-gray'>
                       About
                    </Link>
                    <Link href="/resume" passHref class='hidden md:flex content-center no-underline margin mx-8 text-2xl hover:text-diane text-gray'>
                        Resume
                    </Link>
                    <Link href="/work" passHref class='hidden md:flex content-center no-underline margin mx-8 text-2xl hover:text-diane text-gray'>
                        Work
                    </Link>
                    <Link href="/info" passHref class='hidden md:flex content-center no-underline margin mx-8 text-2xl hover:text-diane text-gray'>
                        Info
                    </Link>
                </div>
                <div class='flex md:hidden'>
                    <img src='/square.svg' alt='hamburger icon' class=' flex md:hidden w-12 h-12 md:w-20 md:h-20' />
                </div>
            </div>
        </>
    )
}





