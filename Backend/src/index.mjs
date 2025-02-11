import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(201).send({msg: "Welcome to my portfolio!"});
});

app.get('/api/users', (req, res) => {
    res.send([
        {id: 1, username: "johndoe", displayName: "John"},
        {id: 2, username: "janedoe", displayName: "Jane"},
    ])
});

app.get('/api/items', (req, res) => {
    res.send([
        {id: 1, name: "milk", quantity: "2", price: "50.00"},
        {id: 2, name: "bread", quantity: "3", price: "30.00"},
    ])
});

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});