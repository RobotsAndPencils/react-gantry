---
to: src/components/<%= h.inflection.camelize(name, true) %>/<%= h.inflection.camelize(name, true) %>.test.js
---

import React from 'react'
import {shallow} from 'enzyme'
import <%= h.inflection.camelize(name) %> from './<%= h.inflection.camelize(name, true) %>'

it('renders without crashing', () => {
  const <%= h.inflection.camelize(name, true) %> = shallow(<<%= h.inflection.camelize(name) %> />)
  expect(<%= h.inflection.camelize(name, true) %>.length).toBe(1)
})
