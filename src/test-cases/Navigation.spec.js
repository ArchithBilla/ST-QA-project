import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Navigatiom from '../Navigation'

Enzyme.configure({ adapter: new Adapter() })
const a = ()=>{}
let props = {
    page : 'jcbv',
    authUser : 'sfkjhskjf',
    authStatus  : a
}


describe(' rendering the components', () => {
    it('should render greeting message when user is signed in', () => {
        const wrapper = shallow(<Navigatiom props = {props} />)
        const greet  = wrapper.find('.userName');
        expect(greet).toHaveLength(1);
    })
  })