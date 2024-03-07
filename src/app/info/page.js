'use client'
import NavigationBar from "@/app/NavigationBar";
import Image from 'next/image'
import {FormEvent, useState} from 'react'
export default function Info(){
    const [email, setEmail] = useState({
        title:'',
        emailAddress: '',
        message: '',
    })

    const setTitle = () => {
        e.preventDefault()
        setEmail('')
    }
    return(
        <>
            <NavigationBar />
            <div class='flex mt-30 h-screen justify-center w-full flex-col md:flex-row'>
                <div class='flex flex-row md:flex-column justify-center font-body bg-[#CDCACA] md:mx-20 py-10 rounded'>
                    <Image src='/Contact_page.png' alt='placeholder' class='w-1/2 px-10 object-scale-down' />
                    <form class='flex flex-col text-left items-start p-20 w-1/2'>
                        <label class='flex flex-col w-full py-3'>
                            Title:
                        </label>
                        <input name='title' defaultValue='Message Title' class='text-[#979797] rounded-lg w-full stroke-gray p-3' />
                        <label class='flex flex-col py-3 w-full'>
                            Email Address:
                        </label>
                        <input name='emailAddress' defaultValue='Email Address...' class='text-[#979797] rounded-lg stroke-gray w-full p-3' />
                        <label class='flex flex-col py-3 w-full'>
                            Write your message:
                        </label>
                        <textarea name='postContent' defaultValue='Message...' class='text-[#979797] rounded-lg stroke-gray p-3 w-full' />
                        <button type="submit" class='bg-diane/80 py-2 rounded-full w-full mt-3'>Send</button>
                    </form>
                </div>
            </div>
            <div className='flex flex-row justify-end p-20'>
                <a href='https://linkedin.com/in/dianewudw' className='h-15 w-20 px-2'>
                    <Image src='/linkedin.svg' alt='linkedin icon' className='w-full h-full object-contains'/>
                </a>
                <a href='https://github.com/dianewudw' className='h-15 w-20 px-2'>
                    <Image src='/inverted_githublogo.png' alt='github icon' className='w-full h-full object-contains'/>
                </a>
            </div>
        </>
    )
}