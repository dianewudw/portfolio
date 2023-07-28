'use client'
import styled from 'styled-components'
export default function RecentWork(){
    return(
        <>
            <h1 class='flex justify-center text-8xl font-display my-80'>Recent Work</h1>
            <div class='flex justify-center flex-wrap direction-row items-center my-60'>
                <img src='/Marketplace_responsive.png'
                     alt="Neighborly Desktop"
                     class='max-h-2xl max-w-2xl'
                />
                <div class='flex-col'>
                    <p class='flex flex-nowrap font-body text-3xl sm:text-7xl text-gray hover:text-diane sm:ml-10'>001 Neighborly</p>
                    <p class='flex flex-nowrap font-body text-3xl sm:text-7xl text-gray hover:text-diane sm:ml-10'>002 Foodie</p>
                    <p class='flex flex-nowrap font-body text-3xl sm:text-7xl text-gray hover:text-diane sm:ml-10'>003 Keto Diet App</p>
                    <p class='flex flex-nowrap font-body text-3xl sm:text-7xl text-gray hover:text-diane sm:ml-10'>004 Case Study</p>
                    <p class='flex flex-nowrap font-body text-3xl sm:text-7xl text-gray hover:text-diane sm:ml-10'>005 Responsive Design</p>
                </div>
            </div>
            <div class='flex flex-row justify-end'>
                <a href='https://linkedin.com/in/dianewudw'>
                    <img src='/linkedin.svg' alt='linkedin icon' class='max-h-20 max-w-20 mx-4'/>
                </a>
                <a href='https://github.com/dianewudw'>
                    <img src='/Github.svg' alt='github icon' class='max-h-20 max-w-20 mx-4' />
                </a>
            </div>
        </>
    )
}


const MainContent = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    margin: 800px 0px 0px 300px;
    
`

const Title = styled.p`
    display:flex;
    font-size:100px;
    color: #333333;
    font-family:'K2D';
    margin: 30px 0px 30px 0px;
`
const TableOfContents = styled.div`
    display:flex;
    align-items: flex-start;
    flex-direction: column;
    margin:0px 180px 100px 300px;
    :hover${Title}{
      color:#AA57CA;
    }
`