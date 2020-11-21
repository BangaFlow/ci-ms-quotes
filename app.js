const express = require('express')
const chalk = require('chalk')

const magenta = chalk.magenta

const app = express()


app.get('/', (req, res) => {
  return res.send("Hello World")
 })

app.listen(5000, () => {
  console.log(magenta(`Server launched 🚀 and running on port 5000.`))
})

module.exports = app