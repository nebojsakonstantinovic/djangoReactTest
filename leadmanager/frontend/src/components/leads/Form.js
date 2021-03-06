import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';

const propTypes = {
  addLead: PropTypes.func.isRequired,
};
class Form extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
          {/* name */}
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={name}
              onChange={this.onChange}
            />
          </div>
          {/* email */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={email}
              onChange={this.onChange}
            />
          </div>
          {/* message */}
          <div className="form-group">
            <label>Message</label>
            <input
              type="text"
              name="message"
              className="form-control"
              value={message}
              onChange={this.onChange}
            />
          </div>
          {/* submit */}
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addLead,
};

Form.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(Form);
