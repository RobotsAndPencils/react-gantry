import * as userActions from './userActions'
import { sampleNames, sampleSkills } from '../../../testing/stubs'
import { mockStore, axiosMock } from '../../../testing/mocks'

describe('generic action test', () => {
  it('should create a random name', () => {
    expect(sampleNames).toContain(userActions.randomName().payload)
  })
})

describe('axios/thunk action test', () => {
  it('should ensure CSS is a skill', () => {
    axiosMock.onGet('/api/profile/skills').reply(200, sampleSkills.data)

    return mockStore.dispatch(userActions.getSkills()).then(() => {
      expect(mockStore.getActions()[0].payload).toContain('css')
    })
  })
})
