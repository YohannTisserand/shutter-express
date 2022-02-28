const app = require('./app')
const mongoose = require('mongoose')



describe('Sample Test', () => {
  test('should test that true === true', () => {
    expect(true).toBe(true)
  })
})
// afterAll(async () => {
//   await dropAllCollections()
//   // Closes the Mongoose connection
//   await mongoose.connection.close()
// })