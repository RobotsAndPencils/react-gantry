import phoneFormatter from './phoneFormatter'

it('should format a complete phoneNumber', () => {
  expect(phoneFormatter('123 4567890')).toEqual('123-456-7890')
  expect(phoneFormatter('1234567890')).toEqual('123-456-7890')
  expect(phoneFormatter('123-456-7890')).toEqual('123-456-7890')
  expect(phoneFormatter('(123) 4567890')).toEqual('123-456-7890')
  expect(phoneFormatter('(123)456-7890')).toEqual('123-456-7890')
})

it('should format a partial phoneNumber', () => {
  expect(phoneFormatter('123')).toEqual('123')
  expect(phoneFormatter('123456')).toEqual('123-456')
  expect(phoneFormatter('12345678')).toEqual('123-456-78')
})
