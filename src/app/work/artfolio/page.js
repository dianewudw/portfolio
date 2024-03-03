import NavigationBar from "@/app/NavigationBar";
import Image from 'next/image'

export default function Artfolio() {
    return (
        <>
            <NavigationBar/>
            <div>
                <Image src='/ArtfolioCaseStudy.png' alt='Artfolio Case Study' class='w-screen'/>
            </div>
            <div>
                <div className='flex w-full p-10 justify-center'>
                    <button className='flex rounded-full p-10 font-body text-gray bg-diane text-xl justify-center text-center'>
                        <a href='https://www.figma.com/proto/ExbARABarm9eYIrwMjs64K/Digital-Wallet?type=design&node-id=665-22150&t=eziDDaD1cSBlVRJ3-0&scaling=min-zoom&page-id=665%3A6522&starting-point-node-id=665%3A22150&show-proto-sidebar=1' className='flex text-2xl sm:text-2xl text-gray hover:text-diane' >
                            Artfolio Prototype
                        </a>
                    </button>
                </div>
            </div>
            <div className='flex flex-row justify-end p-20'>
                <a href='https://linkedin.com/in/dianewudw'>
                    <Image src='/linkedin.svg' alt='linkedin icon' className='max-h-20 max-w-20 mx-4'/>
                </a>
                <a href='https://github.com/dianewudw'>
                    <Image src='/inverted_githublogo.png' alt='github icon' className='max-h-20 max-w-20 mx-4'/>
                </a>
            </div>
        </>
    )
}