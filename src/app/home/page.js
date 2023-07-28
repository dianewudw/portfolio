'use client'
import NavigationBar from "@/app/NavigationBar";
import RecentWork from '../RecentWork'

export default function Home() {
  return (
      <>
        <div>
            <NavigationBar/>
            <div class='flex direction-column mt-52' />
                <div class='direction-column'>
                  <h2 class='flex text-6xl font-header text-gray'>Hey,</h2>
                    <span >
                    <h1 class='flex font-display italic text-9xl mb--8 text-gray'>It's Diane</h1>
                    <span class='flex direction-row'>
                        <h1 className='flex font-body italic text-9xl mb--8 text-white'>It's</h1>
<img className='flex self-start' src='/Squiggle.svg'
     alt="Name Underline"/>
                    </span>
                    </span>
                    <div class='flex direction-column flex-wrap justify-end text-end'>
                        <img src='/ProfileImage.svg'
                               alt="Profile Pic"
                               class='w-60 h-60 my-10 lg:my-20' />
                        <p class='font-body text-7xl text-gray'>Product designer & developer, currently getting creative @ UX Academy</p>
                    </div>
                <div class='flex flex-col items-center mx-8 my-60'>
                    <p class='font-header text-gray m-10'>Welcome</p>
                    <img class='max-w-12 max-h-12' src='/arrow.svg' alt='Arrow Icon'/>
                </div>
            </div>
        </div>
          <RecentWork />
      </>
  )
}