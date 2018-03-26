/* Action Type Constants */

const RANDOM_NAME = 'gantry/user/RANDOM_NAME'

export const types = {
  RANDOM_NAME
}

/* Action Creators */

const randomName = (payload) => ({
  type: types.RANDOM_NAME,
  payload: payload
})

export const actionCreators = {
  randomName
}
