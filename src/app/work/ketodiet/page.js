import NavigationBar from "@/app/NavigationBar";
import Image from 'next/image'

export default function KetoDiet() {
    return (
        <>
            <NavigationBar/>
            <div>
                <Image src='/KetoDietCaseStudy.png' alt='KetoDiet Case Study' class='w-screen'/>
            </div>
            <div>
                <div className='flex w-full p-10 justify-center'>
                    <button className='flex rounded-full p-10 font-body text-gray bg-diane text-xl justify-center text-center'>
                        <a href='https://www.figma.com/proto/EJBe9X8t7cgG07k7AQ3D0v/KetoDiet?type=design&node-id=519-3721&t=PVo7O9UQDQ0apmcP-0&scaling=min-zoom&page-id=470%3A2861&starting-point-node-id=519%3A3721' className='flex text-2xl sm:text-2xl text-gray hover:text-diane' >
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