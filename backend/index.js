const app = require('./app')
const port = process.env.PORT || 5000
/* const server = */ app.listen(port, () => console.log(`Server started on ${port}`.magenta.bold))
