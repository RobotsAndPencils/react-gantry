import React from 'react'
import { shallow } from 'enzyme'
import { Profile } from './profileContainer'

describe('with a name prop', () => {
  const randomName = jest.fn()
  const getSkills = jest.fn()
  const profile = shallow(
    <Profile
      name='test'
      randomName={randomName}
      getSkills={getSkills} />
  )
  it('should render without crashing', () => {
    expect(profile.length).toBe(1)
  })
})
