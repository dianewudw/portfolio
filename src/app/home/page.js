'use client'
import NavigationBar from "@/app/NavigationBar";

export default function Home() {
  return (
      <>
        <div class='bg-[url("/futuristic_background.png")] bg-cover bg-no-repeat h-full w-full object-scale-down'>
            <NavigationBar/>
                <div class='flex flex-col w-full px-5 pt-20 md:pt-60 pb-10'>
                    <div class=''>
                      <h2 class='flex flex-start text-3xl md:text-5xl font-header text-white pb-10'>Hey,</h2>
                        <span >
                        <h1 class='flex flex-start font-display italic text-4xl md:text-8xl mb--8 text-white'>It's Diane</h1>
                        <span class='flex flex-start direction-row'>
    <img className='flex self-start md:pl-20' src='/Squiggle.svg'
         alt="Name Underline"/>
                        </span>
                        </span>
                    </div>
                    <div class='flex direction-column flex-wrap text-end'>
                        <p class='font-body  text-2xl md:text-5xl text-white py-20 shadow pl-10 lg:pl-80 text-end'>Product designer & developer, currently getting creative @ UX Academy</p>
                    </div>
                <div class='flex flex-col items-center mx-8 my-5 md:my-20'>
                </div>
            </div>
        </div>
      </>
  )
}