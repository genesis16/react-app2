import React, { PureComponent } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Link from 'gatsby-link'
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
const Contact = () => (
  <Layout>
  <div>
   <div className="Hero">
   <div className="HeroGroup">
        <h4>Hi, I'm Jane. I'ts nice to meet you. </h4>
        <p>Build. Brand. Develop </p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
        <img src={require("../images/logo-sketch.png")} width="50" />
          <img src={require("../images/logo-figma.png")} width="50" />
          <img src={require("../images/logo-framer.png")} width="50" />
          <img src={require("../images/logo-react.png")} width="50" />
          <img src={require("../images/logo-swift.png")} width="50" />
          <img src={require("../images/logo-studio.png")} width="50" />
        <Wave
                    export default class Contact extends PureComponent {

state = {
  email: ''
};

onSubmit = async e => {
  e.preventDefault();

  try {
    const data = await addToMailchimp(this.state.email);
    alert(data.msg)
  } catch (error) {
    console.log(error);
    alert(error)
  }
};

onChange = e => {
  this.setState({
    email: e.target.value
  })
};

render = () => (
  <form onSubmit={this.onSubmit}>
    <label htmlFor="email">Email</label>
    <input type="email" value={this.state.email} onChange={this.onChange} />

    <input type="submit" value="Submit"/>
  </form>
)
}
        />
        />

       </div>
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
     title={cell.title}
     image={cell.image} />
      ))}
      </SectionCellGroup>
      </div>
 </Layout>
)
export default Contact