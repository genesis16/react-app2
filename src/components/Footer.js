import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
`
const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
`
const Button = styled.button`
    background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    color: white;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    font-size: 24px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover {
        box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
        transform: translateY(-3px);
    }
`
const LinkGroup = styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    a {
        transition: 0.8s;
    }
    a:hover {
        color: black;
    }
`

const Copyright = styled.div`
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
`

const SocialContainer = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    svg {
      width: 28px;
      height: 28px;
      
      fill: blue;
    }
    
    svg:hover {
      filL: red;
    }
`;

const Footer = ({data, children}) => (
  <FooterGroup>
        <Text>Build and brand your business online with a modern, fast website built in the latest javascript
              frameworks. Contact me @JaneJames</Text>
        <Button>Tweet</Button>
        <LinkGroup>{data.allContentfulLink.edges.map(edge => (
          <a href={edge.node.url}>{edge.node.title}</a>
        ))}</LinkGroup>
        <Copyright>
              {children}

              <SocialContainer>
                    <a href="https://twitter.com">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612"><path d="M612 116.3c-22.5 10-46.7 16.8-72.1 19.8 25.9-15.5 45.8-40.2 55.2-69.4 -24.3 14.4-51.2 24.8-79.8 30.5 -22.9-24.4-55.5-39.7-91.6-39.7 -69.3 0-125.6 56.2-125.6 125.5 0 9.8 1.1 19.4 3.3 28.6C197.1 206.3 104.6 156.3 42.6 80.4c-10.8 18.5-17 40.1-17 63.1 0 43.6 22.2 82 55.8 104.5 -20.6-0.7-39.9-6.3-56.9-15.8v1.6c0 60.8 43.3 111.6 100.7 123.1 -10.5 2.8-21.6 4.4-33.1 4.4 -8.1 0-15.9-0.8-23.6-2.3 16 49.9 62.3 86.2 117.3 87.2 -42.9 33.7-97.1 53.7-155.9 53.7 -10.1 0-20.1-0.6-29.9-1.7 55.6 35.7 121.5 56.5 192.4 56.5 230.9 0 357.2-191.3 357.2-357.2l-0.4-16.3C573.9 163.5 595.2 141.4 612 116.3z"/></svg>
                    </a>

                    <a href="https://linkdein.com/">
                          <svg xmlns="http://www.w3.org/2000/svg" width="430" height="430" viewBox="0 0 430.1 430.1"><path d="M398.4 0H31.8C14.2 0 0 13.8 0 30.8v368.5c0 17 14.2 30.8 31.8 30.8h366.6c17.5 0 31.8-13.8 31.8-30.8V30.8C430.1 13.8 415.9 0 398.4 0zM130.4 360H65.4V165.8H130.4V360zM97.9 139.3h-0.4c-21.8 0-35.9-14.9-35.9-33.6 0-19 14.5-33.5 36.8-33.5 22.2 0 35.9 14.5 36.3 33.5C134.7 124.4 120.6 139.3 97.9 139.3zM364.7 360h-65V256.1c0-26.1-9.4-43.9-32.9-43.9 -18 0-28.6 12-33.3 23.6 -1.7 4.1-2.2 9.9-2.2 15.7v108.5h-65c0 0 0.9-176 0-194.2h65v27.5c8.6-13.2 24-32.1 58.5-32.1 42.8 0 74.8 27.7 74.8 87.4V360zM230.9 194c0.1-0.2 0.3-0.4 0.4-0.6v0.6H230.9z"/></svg>
                    </a>

                    <a href="https://instagram.com//">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 0H160C71.6 0 0 71.6 0 160v192c0 88.4 71.6 160 160 160h192c88.4 0 160-71.6 160-160V160C512 71.6 440.4 0 352 0zM464 352c0 61.8-50.2 112-112 112H160c-61.8 0-112-50.2-112-112V160C48 98.2 98.2 48 160 48h192c61.8 0 112 50.2 112 112V352z"/><path d="M256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128S326.7 128 256 128zM256 336c-44.1 0-80-35.9-80-80 0-44.1 35.9-80 80-80s80 35.9 80 80C336 300.1 300.1 336 256 336z"/><circle cx="393.6" cy="118.4" r="17.1"/></svg>
                    </a>

                    <a href="https://facebook.com/">
                          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96.1 96.1"><path d="M72.1 0L59.6 0C45.6 0 36.6 9.3 36.6 23.7v10.9H24c-1.1 0-2 0.9-2 2v15.8c0 1.1 0.9 2 2 2h12.5v39.9c0 1.1 0.9 2 2 2h16.4c1.1 0 2-0.9 2-2V54.3h14.7c1.1 0 2-0.9 2-2l0-15.8c0-0.5-0.2-1-0.6-1.4 -0.4-0.4-0.9-0.6-1.4-0.6H56.8v-9.2c0-4.4 1.1-6.7 6.8-6.7l8.4 0c1.1 0 2-0.9 2-2V2C74 0.9 73.2 0 72.1 0z"/></svg>
                    </a>
              </SocialContainer>
        </Copyright>


  </FooterGroup>
)

export default Footer
