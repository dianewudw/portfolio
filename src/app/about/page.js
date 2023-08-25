'use client'

import NavigationBar from "@/app/NavigationBar";

export default function About(){
    return(
        <>
            <NavigationBar/>
            <div class='flex flex-col w-full pb-10'>
            <h1 class='flex self-center font-display pt-10 text-4xl md:text-8xl text-gray'>About Page</h1>
            <span class='flex flex-col md:flex-row justify-center md:items-center'>
                <img src='/prof_pic.png' alt='Prof Pic' class=' p-10 md:p-20 md:w-1/2'/>
                <div class='flex flex-col md:h-1/2 md:w-1/2'>
                    <h2 class='text-4xl md:text-8xl text-gray'>Greetings! </h2>
                    <p class='flex pt-4 font-body md:text-5xl'>
                        I'm a fervent advocate of creating products that profoundly enrich individuals' lives. My journey began amidst the realm of creativity, embarking on marketing internships with esteemed fashion houses such as Alexander Wang and Stella McCartney. Fuelled by an unquenchable thirst for originality, I graduated with a BA in Marketing, accompanied by a minor in Management, setting the stage for a career dedicated to driving change.
                        <br/>
                        My initial steps encompassed orchestrating product launches and spearheading marketing campaigns for industry giants like L'Oreal and Morrocanoil. This journey offered me invaluable insights into the art of connecting products to people's aspirations.
    As destiny would have it, a juncture led me to embrace the world of software development. I ventured into the role of a full-stack software engineer at the dynamic unicorn startup, Extend. In this realm, I imbibed the intricacies of technology, combining them seamlessly with my marketing finesse to deliver solutions that resonated with users on multiple levels.
<br/>
    Today, I'm steering the course as a co-founder and Chief Marketing Officer of a pioneering health caregiving venture, underscoring my ability to bring forth comprehensive expertise in marketing, UX/UI design, and software development. My journey, from fashion marquees to coding realms, has cultivated me into a true 'jack of all trades' product generalist.
<br/>
    With a relentless commitment to innovation, a penchant for merging the arts of technology and design, and an unwavering focus on human impact, I eagerly anticipate every opportunity to contribute my multifaceted skills to endeavors that truly matter.
                        Let's shape the future, one transformative creation at a time.
    <br/>
        {/*                <span> </span>*/}
        {/*                Warmly,*/}
        {/*<br/>*/}
        {/*                <span> </span>*/}
        {/*                Diane*/}
        {/*    <br/>*/}
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