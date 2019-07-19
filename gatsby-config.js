module.exports = {
  siteMetadata: {
	title: 'Alpha + Omega digital',
	description: 'Melbourne web and wordpress developer',
	keywords: 'Melbourne web developer, front end developer, digital marketer, social media marketer, gatsby js developer, Melbourne wordpress developer'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '065w0ie15r5x',
        accessToken: 'JTamLV_QHVpF5DcWN4wsh6wOcQ1i15yR_Bqm3IUFO7o'
      }
    }
  ],
}


