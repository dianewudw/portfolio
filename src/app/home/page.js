'use client'
import NavigationBar from "@/app/NavigationBar";

export default function Home() {
  return (
      <>
        <div>
            <NavigationBar/>
                <div class='flex px-5 pt-20 md:pt-60 pb-10 md:px-20'>
                    <div class='flex flex-col'>
                      <h2 class='flex flex-start text-3xl md:text-6xl font-header text-gray pb-10'>Hey,</h2>
                        <span >
                        <h1 class='flex flex-start whitespace-nowrap font-display italic text-4xl md:text-9xl mb--8 text-gray'>It's Diane</h1>
                        <span class='flex flex-start direction-row'>
                            <img className='flex self-start md:pl-20' src='/Squiggle.svg'
                                 alt="Name Underline"/>
                        </span>
                        </span>
                    </div>
            </div>
            <div className='flex px-5 pt-20 md:pt-40 pb-10 md:px-20 justify-end'>
                <div className='flex flex-col justify-items-end'>
                    <img src='/flower_profile.svg' alt='portfolio_image' className='w-fit self-end'/>
                    <p className='font-body  text-2xl md:text-6xl text-end text-gray sm:py-20 pl-10 lg:pl-0'>Co-founder,
                        Product Designer & Developer, currently getting creative @ UX Academy</p>
                </div>
            </div>
        </div>
      </>
  )
}