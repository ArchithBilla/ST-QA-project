import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '../Home'


Enzyme.configure({ adapter: new Adapter() })
const a = ()=>{}
let props = {
    authUser : 'sfkjhskjf',
    pageStatus  : a
}
let conditionalProps = {
    authUser : '',
    pageStatus  : a
}

describe('Rendering UI components', () => {
    it('should render Refresh button', () => {
      const wrapper = shallow(<Home props = {props} />)
      const buttonElement  = wrapper.find('.refresh');
      expect(buttonElement).toHaveLength(1);
      expect(buttonElement.text()).toEqual('Refresh');
    })
    it('should render Settings button', () => {
        const wrapper = shallow(<Home props = {props} />)
        const buttonElement  = wrapper.find('.settings');
        expect(buttonElement).toHaveLength(1);
        expect(buttonElement.text()).toEqual('Settings');
      })
      it('should render modal button', () => {
        const wrapper = shallow(<Home props = {props} />)
        const modalElement  = wrapper.find('.main_container');
        expect(modalElement).toHaveLength(1);
      })
      it('should render modal button', () => {
        const wrapper = shallow(<Home props = {props} />)
        const radioElement  = wrapper.find('#radio');
        expect(radioElement).toHaveLength(7);
      })
      it('should render modal button', () => {
        const wrapper = shallow(<Home props = {props} />)
        const modalSaveElement  = wrapper.find('.modal-save');
        expect(modalSaveElement).toHaveLength(1);
        expect(modalSaveElement.text()).toEqual('Save');
      })
  })

  describe('Conditional rendering the components', () => {
    it('should render Settings button based on a condition', () => {
        const wrapper = shallow(<Home conditionalProps = {conditionalProps} />)
        const buttonElement  = wrapper.find('.settings');
        expect(buttonElement).toHaveLength(1);
        expect(buttonElement.text()).toEqual('Settings');
    })
  })


  describe('Test driven development fo UI', () => {
    it('should show 4 news feeds', () => {
      const wrapper = shallow(<Home props = {props} />)
      const newsDetails  = wrapper.find('.news_details');
      expect(newsDetails).toHaveLength(4);
    })

    it('should show 8 tabs', () => {
      const wrapper = shallow(<Home props = {props} />)
      const newsDetails  = wrapper.find('.tabs');
      expect(newsDetails).toHaveLength(8);
    })

    it('should show 2 links for next and prev for pagination', () => {
      const wrapper = shallow(<Home props = {props} />)
      const newsDetails  = wrapper.find('.paginationsLinks');
      expect(newsDetails).toHaveLength(2);
    })
  })

 