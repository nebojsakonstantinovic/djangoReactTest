import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';

const propTypes = {
  leads: PropTypes.array.isRequired,
};

// 3333333333333333.37

class Leads extends Component {
  componentDidMount() {
    this.props.getLeads();
  }

  deleteLead = id => () => {
    const { deleteLead } = this.props;
    deleteLead(id);
  };

  render() {
    const { leads, deleteLead } = this.props;
    return (
      <Fragment>
        <h2>Leads</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {leads.map(lead => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={this.deleteLead(lead.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

Leads.propTypes = propTypes;

const mapStateToProps = state => {
  const { leads } = state.leads;
  return { leads };
};

const mapDispatchToProps = {
  getLeads,
  deleteLead,
};

export default connect(mapStateToProps, mapDispatchToProps)(Leads);
