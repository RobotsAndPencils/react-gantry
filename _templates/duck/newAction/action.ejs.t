---
inject: true
to: src/redux/<%= h.inflection.camelize(duck, true) %>/<%= h.inflection.camelize(duck, true) %>Actions.js
before: export default {
skip_if: const <%= h.inflection.camelize(name, true) %> =
---
<% if (locals.thunk && locals.promise) { -%>
export const <%= h.inflection.camelize(name, true) %> = (payload) => {
  const request = someAsyncRequest()
  // const request = new Promise((resolve, reject) => resolve(sampleSkills)) // demo return for the above actual request

  return (dispatch) => {
    return new Promise((resolve, reject) => {
      request.then(
        (response) => {
<% if(locals.document){ -%>
          /* Manipulate your data before it is dispatched to Store here */
<% } -%>
          let data = response.data
          data.reverse()

<% if(locals.document){ -%>
          /* Dispatch that data to the store */
<% } -%>
          dispatch({
            type: types.<%= h.inflection.underscore(name).toUpperCase() %>,
            payload: data
          })

<% if(locals.document){ -%>
          /* Resolve this returned promise */
<% } -%>
          resolve(response)
        },
        (error) => {
<% if(locals.document){ -%>
          /* Handle your errors here */
<% } -%>
          reject(error)
        }
      )
    })
  }
}
<% } else if (locals.thunk) { -%>
export const <%= h.inflection.camelize(name, true) %> = (payload) => {
  const request = someAsyncRequest()
  // const request = new Promise((resolve, reject) => resolve(sampleSkills)) // demo return for the above actual request

  return (dispatch) => {
    return request.then(
      (response) => {
<% if(locals.document){ -%>
        /* Manipulate your data before it is dispatched to Store here */
<% } -%>
        let data = response.data
        data.reverse()

<% if(locals.document){ -%>
        /* Dispatch that data to the store */
<% } -%>
        dispatch({
          type: types.<%= h.inflection.underscore(name).toUpperCase() %>,
          payload: data
        })
      },
      (error) => {
<% if(locals.document){ -%>
        /* Handle your errors here */
<% } -%>
        console.log(error)
      }
    )
  }
}
<% } else { -%>
export const <%= h.inflection.camelize(name, true) %> = (payload) => ({
  type: types.<%= h.inflection.underscore(name).toUpperCase() %>,
  payload: payload
})
<% } -%>