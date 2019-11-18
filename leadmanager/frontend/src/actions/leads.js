import axios from 'axios';

import { GET_LEADS, DELETE_LEAD } from './types';

// GET Leads
export const getLeads = () => async dispatch => {
  try {
    const response = await axios.get('api/leads/');
    dispatch({
      type: GET_LEADS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// DELETE Lead
export const deleteLead = id => async dispatch => {
  try {
    await axios.delete(`api/leads/${id}/`);
    dispatch({
      type: DELETE_LEAD,
      payload: id,
    });
  } catch (error) {
    console.log(error.message);
  }
};
