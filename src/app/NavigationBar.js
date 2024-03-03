'use client'
import Link from "next/link";

export default function NavigationBar() {
    return (
        <>
            <div class="flex w-full justify-between items-center content-center py-5 px-5 md:px-20 font-header">
                <a href="/home" class="flex flex-nowrap inline-flex items-center no-underline">
                    <img
                        src="/Diane Wu-1.svg"
                        alt="Brand Logo"
                        class='flex w-40 h-12'
                    />
                    {/*<p class='md:flex flex-nowrap text-2xl text-gray mx-3'>Diane Wu</p>*/}
                </a>
                <div class='md:flex contents-center rounded-full bg-white/30 backdrop-blur-sm bg-cover p-5'>
                        <Link href="/about" passHref class='hidden md:flex content-center no-underline margin mx-8 text-2xl hover:text-diane text-gray'>
                           About
                        </Link>
                        <a href="/Resume.pdf" class='hidden md:flex content-center no-underline margin mx-8 text-2xl hover:text-diane text-gray' download>
                            Resume
                        </a>
                        <Link href="/work" passHref class='hidden md:flex content-center no-underline margin mx-8 text-2xl hover:text-diane text-gray'>
                            Work
                        </Link>
                        {/*<Link href="/info" passHref class='hidden md:flex content-center no-underline margin mx-8 text-2xl hover:text-diane text-gray'>*/}
                        {/*    Contact*/}
                        {/*</Link>*/}
                    <div class='flex opacity-100 h-full w-full'>
                    </div>
                </div>
                <div class='flex md:hidden'>
                    <img src='/square.svg' alt='hamburger icon' class=' flex md:hidden w-12 h-12 md:w-20 md:h-20' />
                </div>
            </div>
        </>
    )
}





