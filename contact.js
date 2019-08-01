import React, { PureComponent } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Link from 'gatsby-link'
import Section from '../components/Section'
import Wave from '../components/Wave'
import styled from 'styled-components'
import Layout from '../layouts'


const ContactForm = styled.div`
font-size: 2rem;
display: flex;
justify-content: center;

`
const Email = styled.div`
display: flex;
justify-content: center;
font-weight: bold;
margin: 0 auto;
font-size: 2rem;
input {
  padding-left: 70px;
}

`
const SubmitButton = styled.button`
    background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    margin-top: 30px;
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
const EnterMail = styled.div`
display: flex;
justify-content: center;
margin: 0 auto;

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
            <h2>Contact me</h2></ContactForm>
            <Email>
              <form onSubmit={this.onSubmit}>
              <EnterMail>
                <label htmlFor="email">Email</label></EnterMail>
                <div className="entername">
                <input type="email" value={this.state.email} onChange={this.onChange} />
                <div></div>
                <SubmitButton>Submit</SubmitButton>
              
                </div>
      </form>
    </Email>
          
    <Section
     image= {require('../images/rain.jpg')}
     logo= {require('../images/logo-react.png')}
      title="Build your dream website"
      text="Transform your website into a feature rich, lightening fast, SEO optimised site that will improve your page loading speed, decrease your bounce rate, and convert more clients. "
     />
     </div>
    </Layout>
  }
}
