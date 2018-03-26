import React from 'react'
import {shallow} from 'enzyme'
import {Profile} from './profileContainer'

describe('with a name prop', () => {
  const profile = shallow(<Profile name='string' />)
  it('should render without crashing', () => {
    expect(profile.length).toBe(1)
  })
})
