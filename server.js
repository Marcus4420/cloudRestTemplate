/* This is the server file (your backend) */
const express = require('express')
const app = express()
const port = 8080

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

app.use(express.static('public'))

/* CODE SNIPPETS */



/* HTTP GET */

/**
 * Root path GET response with json
app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/

/**
 * Root path GET html file
 * app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})
*/

/**
 * Basic fetch from other resources on GET request
  app.get('/api', (req, res) => {
  fetch('https://jsonplaceholder.typicode.com/todos/1') //Replace with your url
  .then(response => response.json())
  .then(json => res.send(json))
*/



/* HTTP POST */

/**
 * Root path POST response with json
app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/


/* Functions for external requests */

/**
 * Async function to post data
async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      'Authorization': 'Bearer ' + token // if needed
    },
    body: JSON.stringify(data)
  });
  return response.json();
}
*/

/**
 * Async function to get data
async function getData(url = '') {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
      'Authorization': 'Bearer ' + token // if needed
    },
  });
  return response.json();
}
*/