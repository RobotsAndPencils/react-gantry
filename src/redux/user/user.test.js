import * as userActions from './userActions'
import sampleNames from '../../constants/nameConstants'
import { mockStore, axiosMock } from '../../../testing/mocks'

describe('generic action test', () => {
  it('should create a random name', () => {
    expect(sampleNames).toContain(userActions.randomName().payload)
  })
})

describe('axios/thunk action test', () => {
  it('should ensure React is a skill', () => {
    axiosMock.onGet('/api/profile/skills').reply(200, {
      skills: [
        'html',
        'js',
        'css',
        'React'
      ]
    })

    return mockStore.dispatch(userActions.getSkills()).then(() => {
      expect(mockStore.getActions()[0].payload.data.skills).toContain('React')
    })
  })
})
