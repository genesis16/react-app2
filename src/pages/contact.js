import React, { PureComponent } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'

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
