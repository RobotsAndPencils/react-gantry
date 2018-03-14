import profileService from './profile'

it('should just return its input because it is a placeholder', () => {
  expect(profileService('string')).toBe('string')
})
