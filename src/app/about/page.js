'use client'

import NavigationBar from "@/app/NavigationBar";

export default function About(){
    return(
        <>
            <NavigationBar/>
            <div class='flex flex-col w-full pb-10'>
            <h1 class='flex self-center font-display pt-10 text-4xl md:text-8xl text-white'>About Page</h1>
            <span class='flex flex-col md:flex-row justify-center md:items-baseline'>
                <img src='/prof_pic.png' alt='Prof Pic' class=' p-10 md:p-20 md:h-1/2 md:w-1/2'/>
                <img src='/white_version.svg' alt='personal_state' class='p-10 md:p-20' />
            </span>
            </div>
            <div className='flex flex-row justify-end p-20'>
                <a href='https://linkedin.com/in/dianewudw'>
                    <img src='/linkedin.svg' alt='linkedin icon' className='max-h-20 max-w-20 mx-4'/>
                </a>
                <a href='https://github.com/dianewudw'>
                    <img src='/inverted_githublogo.png' alt='github icon' className='max-h-20 max-w-20 mx-4'/>
                </a>
            </div>
        </>

    )
}