import React from 'react'
import {shallow} from 'enzyme'
import Avatar from './avatar'

describe('without a name prop', () => {
  const avatar = shallow(<Avatar />)

  it('should not render an img', () => {
    expect(avatar.find('img').length).toBe(0)
  })
})

describe('with a name prop', () => {
  const avatar = shallow(<Avatar name='string' />)

  it('should render an img', () => {
    expect(avatar.find('img').length).toBe(1)
  })

  describe('the img tag', () => {
    it('should have a src with the name in it', () => {
      expect(avatar.find('img').prop('src')).toContain('string')
    })
  })
})
