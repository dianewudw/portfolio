import NavigationBar from "@/app/NavigationBar";

export default function Info(){
    return(
        <>
            <NavigationBar />
            <div class='flex mt-30 h-screen justify-center w-full flex-col'>
                <div class='flex flex-row md:flex-column justify-center font-body'>
                    <img src='/FormImage.svg' alt='placeholder' class='w-1/3 px-10' />
                    <form class='flex flex-col text-left items-start p-20'>
                        <label class='flex flex-col w-full'>
                            Title:
                            <input name='title' defaultValue='Message Title' class='text-[#979797] rounded stroke-gray' />
                        </label>
                        <label class='flex flex-col  w-full'>
                            Email Address:
                            <input name='emailAddress' defaultValue='Email Address...' class='text-[#979797] rounded stroke-gray' />
                        </label>
                        <label class='flex flex-col  w-full'>
                            Write your message:
                            <textarea name='postContent' defaultValue='Message...' class='text-[#979797] rounded stroke-gray' />
                        </label>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className='flex flex-row justify-end p-10'>
                    <a href='https://linkedin.com/in/dianewudw'>
                        <img src='/linkedin.svg' alt='linkedin icon' className='max-h-20 max-w-20 mx-4'/>
                    </a>
                    <a href='https://github.com/dianewudw'>
                        <img src='inverted_githublogo.png' alt='github icon' className='max-h-20 max-w-20 mx-4' />
                    </a>
                </div>
            </div>
        </>
    )
}