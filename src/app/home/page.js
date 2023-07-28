'use client'
import NavigationBar from "@/app/NavigationBar";
import RecentWork from '../RecentWork'

export default function Home() {
  return (
      <>
        <div class='bg-[url("/futuristic_background.png")] bg-cover bg-no-repeat h-full w-full object-scale-down'>
            <NavigationBar/>
                <div class='flex flex-col w-full px-20 pt-80 pb-20'>
                    <div>
                      <h2 class='flex flex-start text-5xl font-header text-white'>Hey,</h2>
                        <span >
                        <h1 class='flex flex-start font-display italic text-8xl mb--8 text-white'>It's Diane</h1>
                        <span class='flex flex-start direction-row'>
                            <h1 className='flex font-body italic pl-20 mb--8 text-grey'>It's</h1>
    <img className='flex self-start' src='/Squiggle.svg'
         alt="Name Underline"/>
                        </span>
                        </span>
                    </div>
                    <div class='flex direction-column self-center flex-wrap text-end'>
                        <p class='font-body text-7xl text-gray py-20 drop-shadow-2xl'>Product designer & developer, currently getting creative @ UX Academy</p>
                    </div>
                <div class='flex flex-col items-center mx-8 my-20'>
                    <p class='font-header text-white m-10 text-3xl font-bold drop shadow-dxl'>Welcome</p>
                    <img class='h-4xl w-4xl' src='/green.svg' alt='Arrow Icon'/>
                </div>
            </div>
        </div>
      <RecentWork />
      </>
  )
}