// import { getSkillsData } from '../../services/profile'
import { sampleNames, sampleSkills } from '../../../testing/stubs'

/* Action Type Constants */

const RANDOM_NAME = 'gantry/user/RANDOM_NAME'
const GET_SKILLS = 'gantry/user/GET_SKILLS'

export const types = {
  RANDOM_NAME,
  GET_SKILLS
}

/* Action Creators */

// generic action
const randomName = () => {
  const randomNameNumber = Math.floor(Math.random() * sampleNames.length)
  return {
    type: types.RANDOM_NAME,
    payload: sampleNames[randomNameNumber]
  }
}

// action with axios and thunk
const getSkills = () => {
  // const request = getSkillsData()
  const request = new Promise((resolve, reject) => resolve(sampleSkills)) // demo return for the above commented out real code

  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request.then((skillsReturn) => {
        // the purpose of Thunks: parse the data before dispatching
        const skills = skillsReturn.data
        skills.push('React')

        // send to reducers
        dispatch({
          type: types.GET_SKILLS,
          payload: skillsReturn.data
        })

        // send back to calling component
        resolve(skillsReturn)
      }, (error) => {
        // handle api error
        reject(error)
      })
    })
  }
}

export const actionCreators = {
  randomName,
  getSkills
}
