const app = require('./app')
const port = process.env.PORT || 666
/* const server = */ app.listen(port, () => console.log(`Server started on ${port}`.magenta.bold))
