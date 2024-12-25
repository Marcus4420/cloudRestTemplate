const express = require('express')
const app = express()
const port = 8080

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

app.use(express.static('public'))


app.get('/magic-header', (req, res) => {
    fetch('https://magic-server-802314573716.europe-north1.run.app/magic-code')
    .then(response => response.json())
    .then(json => res.send(json))
})

app.get('/final-answer', (req, res) => {
    fetch('https://final-answer-802314573716.europe-north1.run.app/final-answer', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + req.headers.bearer
        }
    })
    .then(response => response.json())
    .then(json => res.send(json))
})