import axios from 'axios';

import { createMessage, returnErrors } from './messages';
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';

// GET Leads
export const getLeads = () => async dispatch => {
  try {
    const response = await axios.get('api/leads/');
    dispatch({
      type: GET_LEADS,
      payload: response.data,
    });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
};

// ADD Lead
export const addLead = lead => async dispatch => {
  try {
    const response = await axios.post('api/leads/', lead);
    await dispatch({
      type: ADD_LEAD,
      payload: response.data,
    });
    dispatch(createMessage({ addLead: 'Lead Added' }));
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    // const errors = {
    //   msg: error.response.data,
    //   status: error.response.status,
    // };
    // dispatch({
    //   type: GET_ERRORS,
    //   payload: errors,
    // });
  }
};

// DELETE Lead
export const deleteLead = id => async dispatch => {
  try {
    await axios.delete(`api/leads/${id}/`);
    await dispatch({
      type: DELETE_LEAD,
      payload: id,
    });
    dispatch(createMessage({ deleteLead: 'Lead Deleted' }));
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
};
