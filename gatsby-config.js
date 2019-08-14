module.exports = {
  siteMetadata: {
	title: 'Alpha + Omega digital',
	description: 'Melbourne web and wordpress developer',
	keywords: 'Melbourne web developer, front end developer, digital marketer, social media marketer, gatsby js developer, Melbourne wordpress developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '065w0ie15r5x',
        accessToken: 'JTamLV_QHVpF5DcWN4wsh6wOcQ1i15yR_Bqm3IUFO7o'
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://gmail.us3.list-manage.com/subscribe/post?u=87674d942c495c6ff1ec6199d&amp;id=7a0e690fb4' // Replace it by OWN link. Described in messages
      }
    }
  ],
}


