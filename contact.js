import React, { PureComponent } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Link from 'gatsby-link'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'
import Layout from '../layouts'


const ContactForm = styled.div`
font-size: 2rem;
display: flex;
justify-content: center;

`
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

  render = () => {
    return <Layout>
      <div>
        <div className="Hero">
          <div className="HeroGroup">
            <h1>Get in touch</h1>
            <p>Build. Brand. Develop </p>
            <Link className="link hero" to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <a className="link icon-link" href="https://sketch.com">
            <img src={require("../images/logo-sketch.png")} width="50" />
          </a>
          <a className="link icon-link" href="https://www.figma.com">
          <img src={require("../images/logo-figma.png")} width="50" />
          </a>
          <a className="link icon-link" href="https://www.framer.com">
          <img src={require("../images/logo-framer.png")} width="50" />
          </a>
          <a className="link icon-link" href="https://www.gatsbyjs.org">
          <img src={require("../images/gatsby-icon.png")} width="50" />
          </a>
          <a className="link icon-link" href="https://www.reactjs.org">
          <img src={require("../images/logo-react.png")} width="50" />
          </a>
          <a className="link icon-link" href="https://wordpress.org">
          <img src={require("../images/wordpressicon.png")} width="50" />
          </a>
            <Wave/>
            </div>
           </div>
         </div>
            <ContactForm>{this.props.title}
            <h2>Contact me</h2>
              <form onSubmit={this.onSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" value={this.state.email} onChange={this.onChange} />
                <input type="submit" value="Submit"/>
              </form>
              </ContactForm>

    

          
        <Section
          image={require('../images/rain.jpg')}
          logo={require('../images/logo-react.png')}
          title="React for Designers"
          text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
        />
     </div>
    </Layout>
  }
}
