import NavigationBar from "@/app/NavigationBar";
import Image from 'next/image'

export default function EverHomeCare() {
    return (
        <>
            <NavigationBar/>
            {/*class="bg-[url('/EverHomeCareCaseStudy.png')]"*/}
            <div>
                <Image src='/EHC_Capstone.svg' alt={'EHC case study'} class='w-screen'/>
                <div class='flex w-full p-10 justify-center'>
                <button class='flex rounded-full p-10 font-body text-gray bg-diane text-xl justify-center text-center'>
                    <a href='https://www.figma.com/proto/E0i1yaM0HAkUNuX0qzhkSD/Ever-Home-Care?type=design&node-id=425-657&t=NETwS6YxOx0BNeug-0&scaling=min-zoom&page-id=359%3A244&starting-point-node-id=425%3A657&show-proto-sidebar=1' className='flex text-2xl sm:text-2xl text-gray hover:text-diane' >
                        Ever Home Care Prototype
                    </a>
                </button>
                </div>
            </div>
        </>
    )
}