import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { ControlLabel, FormControl } from 'react-bootstrap';
import MainNavBar from '../../../client/src/components/MainNavBar';
import NameBirthdateInput from '../../../client/src/components/NameBirthdateInput';

describe('Components', () => {
  describe('<MainNavBar />', () => {
    it('should not have any props but children', () => {
      const wrapper = shallow(<MainNavBar />);   
      var props = wrapper.props();
  
      expect(Object.keys(props).length).to.equal(1);
      expect(Object.keys(props)[0]).to.equal('children');
    });
  });
  
  describe('<NameBirthdateInput />', () => {
    it('should render 6 FormControls', () => {
      const wrapper = 
        shallow(<NameBirthdateInput setItem={ () => {} } signup={ {
          username: '',
          password: '',
          'confirm_password': '',
          email: '',
          'first_name': '',
          'last_name': '',
          'birth_day': '',
          'birth_month': '',
          'birth_year': ''
        } }/>);
  
      expect(wrapper.find(FormControl)).to.have.length(6);
    });
  
    it('should render 4 ControlLabels', () => {
      const wrapper = 
        shallow(<NameBirthdateInput setItem={ () => {} } signup={ {
          username: '',
          password: '',
          'confirm_password': '',
          email: '',
          'first_name': '',
          'last_name': '',
          'birth_day': '',
          'birth_month': '',
          'birth_year': ''
        } }/>);
  
      expect(wrapper.find(ControlLabel)).to.have.length(4);
    });
  
    it('should have labels for email, first name, last name, and birthdate', () => {
      const wrapper = 
        shallow(<NameBirthdateInput setItem={ () => {} } signup={ {
          username: '',
          password: '',
          'confirm_password': '',
          email: '',
          'first_name': '',
          'last_name': '',
          'birth_day': '',
          'birth_month': '',
          'birth_year': ''
        } }/>);
  
      var textNodes = [];
      wrapper.find(ControlLabel).forEach(item => { textNodes.push(item.children().text()) });
  
      expect(textNodes).to.deep.equal(['Email address', 'First name', 'Last name', 'Birthdate']);
    });
  
    it('should have props signup and setItem', () => {
      const wrapper = 
        mount(<NameBirthdateInput setItem={ () => {} } signup={ {
          username: '',
          password: '',
          'confirm_password': '',
          email: '',
          'first_name': '',
          'last_name': '',
          'birth_day': '',
          'birth_month': '',
          'birth_year': ''
        } }/>);
  
      expect(wrapper.props().signup).to.deep.equal({
        username: '',
        password: '',
        'confirm_password': '',
        email: '',
        'first_name': '',
        'last_name': '',
        'birth_day': '',
        'birth_month': '',
        'birth_year': ''
      });
  
      expect(wrapper.props().setItem).to.be.a('function');
    });
  
  });
});