import axios from 'axios'; 

export function setOrgSignupItem(item, value) {
  return { 
    type: "SET_ORG_SIGNUP_" + item.toUpperCase(),
    value
  };
}

export function createOrg(org) {
  return dispatch => axios.post('/api/organization', org, {
      headers: {'Authorization': 'JWT ' + localStorage.getItem('token') }
    }).then(() => { console.log('hi') });
}