'use client'
import styled from 'styled-components'
export default function RecentWork(){
    return(
        <>
            <MainContent>
                <img src='/Marketplace_responsive.png'
                     alt="Neighborly Desktop"
                     height={1300}
                     width={1300}
                     priority/>
                <TableOfContents>
                    <Title>001 Neighborly</Title>
                    <Title>002 Foodie</Title>
                    <Title>003 Keto Diet App</Title>
                    <Title>004 Case Study</Title>
                    <Title>005 Responsive Design</Title>
                </TableOfContents>
            </MainContent>
            <p>tbd</p>
        </>
    )
}


const MainContent = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    margin: 300px 0px 0px 500px;
    
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