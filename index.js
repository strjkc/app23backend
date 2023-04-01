const app = require('./app')
const config = require('./utils/config')


const port = config.PORT || 3001
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})