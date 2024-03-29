import React from 'react'
import { shallow } from 'enzyme'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Header'

test('should render Header correctly (Test with react-test-renderer)', () => {
  const renderer = new ReactShallowRenderer()
  renderer.render(<Header />)

  expect(renderer.getRenderOutput()).toMatchSnapshot()
})

// Tests with enzyme

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />)

  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('h1').length).toBe(1)
  expect(wrapper.find('h1').text()).toBe('Expensify')
})