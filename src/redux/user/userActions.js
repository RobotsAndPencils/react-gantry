import { getSkillsData } from '../../services/profile'
import sampleNames from '../../constants/nameConstants'

/* Action Type Constants */

const RANDOM_NAME = 'gantry/user/RANDOM_NAME'
const GET_SKILLS = 'gantry/user/GET_SKILLS'

export const types = {
  RANDOM_NAME,
  GET_SKILLS
}

/* Action Creators */

// generic action
export const randomName = () => {
  const randomNameNumber = Math.floor(Math.random() * sampleNames.length)
  return {
    type: types.RANDOM_NAME,
    payload: sampleNames[randomNameNumber]
  }
}

// action with axios and thunk
export const getSkills = () => {
  const request = getSkillsData()

  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request.then((skillsReturn) => {
        // send to reducers
        dispatch({
          type: types.GET_SKILLS,
          payload: skillsReturn
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
