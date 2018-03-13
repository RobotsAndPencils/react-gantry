import React from 'react'
import {shallow} from 'enzyme'
import Avatar from './avatar'

it('should render an img', () => {
  const avatar = shallow(<Avatar name='string' />)
  expect(avatar.find('img').length).toBe(1)
})
