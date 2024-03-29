import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'
import Layout from '../layouts'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
  <div>
   <div className="Hero">
   <div className="HeroGroup">
        <h1>Alpha + Omega digital </h1>
        <p>Build. Brand. Develop </p>
        <Link className="link hero" to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <a className="link icon-link" href="https://sketch.com">
            <img src={require("../images/logo-sketch.png")} width="50" />
          </a>
          <img src={require("../images/logo-figma.png")} width="50" />
          <img src={require("../images/logo-framer.png")} width="50" />
          <img src={require("../images/logo-react.png")} width="50" />
          <img src={require("../images/logo-swift.png")} width="50" />
          <img src={require("../images/logo-studio.png")} width="50" />
        <Wave />
       </div>
       </div>
      </div>
    <div className="Cards">
      <h2>See all Projects</h2>
      <div className="CardGroup">
        <Card
          url="https://google.com/"
          title="In and Out Fitness"
          text="12 sections"
          image={require('../images/Topography4.png')}
        />
        <Card
          title="Gutter Guard"
          text="12 sections"
          image={require('../images/Topography4.png')}
        />
        <Card
          title="Mercers restaurant"
          text="12 sections"
          image={require('../images/wallpaper3.jpg')}
        />
      </div>
    </div>
    <Section
     image= {require('../images/rain.jpg')}
     logo= {require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
     />
    <SectionCaption>12 sections - 6 hours</SectionCaption>
  <SectionCellGroup>
  {staticdata.cells.map(cell => (
  <Cell
      url="https://google.com/"
     title={cell.title}
     image={cell.image} />
      ))}
      </SectionCellGroup>
      </div>
 </Layout>
)

export default IndexPage
