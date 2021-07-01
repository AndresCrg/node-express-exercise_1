const express = require('express')
const app = express()
const port = 3000
const users = ['Hugo', 'Paco', 'Luis', 'Andres', 'Juana']

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/users/:index', (req, res) => {
    const index = req.params.index;
    console.log(index)
    if (index < users.length) {
        res.send("The user is " + users[index])
    } else {
        res.status(404).send('User not found')
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})