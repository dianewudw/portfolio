'use client'

import NavigationBar from "@/app/NavigationBar";

export default function About(){
    return(
        <>
            <NavigationBar/>
            <div class='flex relative flex-col w-full'>
            <h1 class='flex self-center font-display pt-10 text-4xl md:text-8xl text-gray'>About Me</h1>
            <span class='flex flex-col md:flex-row justify-center md:items-center w-full'>
                <img src='/prof_pic.png' alt='Prof Pic' class=' p-10 md:p-20 md:w-1/2 object-cover rounded-full'/>
                <div class='flex flex-col md:h-1/2 md:w-1/2 md:justify-items-center'>
                    <p class='flex pt-4 font-body text-5xl sm:text-3xl p-10'>
                        Diane Wu
                    </p>
                    <p class='flex pt-4 font-body text-xl md:text-lg p-10'>
                        is a product designer and developer from Austin, Texas. Her love for creating cool stuff stems from her background making haircare products for cosmetic giants to building microservices for fintech startups.
                    </p>
                    <p class='flex pt-4 font-body text-xl md:text-lg p-10'>
                        Currently, she's working as a product consultant for a domiciliary care start-up in the UK and a small-pharma company in the Bay Area.
                    </p>
                    <p class='flex pt-4 font-body text-xl md:text-lg p-10'>
                        Forever a thinker and tinkerer, holler at her if you're interested in making things that help make the world a better place.
                    </p>
                </div>
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