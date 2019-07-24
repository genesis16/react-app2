import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'
import Layout from '../layouts'

const About = () => (
  <Layout>
  <div>
   <div className="Hero">
   <div className="HeroGroup">
        <h1>Alpha + Omega digital </h1>
        <p>Build. Brand. Develop </p>
        <Link to="/page-2/">Watch the video</Link>
        <Wave />
       </div>
      </div>
    <div className="Cards">
      <h2>See all Projects</h2>
      <div className="CardGroup">
        <Card
          title="In and Out Fitness"
          text="12 sections"
          image={require('../images/wallpaper.jpg')}
        />
        <Card
          title="Gutter Guard"
          text="12 sections"
          image={require('../images/wallpaper2.jpg')}
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
    <Wave/>
      </div>
    <Wave/>
 </Layout>
)

export default About
