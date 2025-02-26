import express, { response } from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

const users = [
    {id: 1, username: "johndoe", displayName: "John"},
    {id: 2, username: "janedoe", displayName: "Jane"},
];

const items = [
    {id: 1, name: "milk", quantity: "2", price: "50.00"},
    {id: 2, name: "bread", quantity: "3", price: "30.00"},
];

app.get("/", (req, res) => {
    res.status(201).send({msg: "Welcome to my portfolio!"});
});

app.get('/api/users', (req, res) => {
    res.send(users);
});

app.get('/api/users/:id', (req, res) => {
    console.log(req.params);
    const parsedId = parseInt(req.params.id);
    console.log(parsedId);
    if(isNaN(parsedId))
        return res.status(400).send({msg: "Bad Request. Invalid Id."});

    const findUser = users.find((user) => user.id === parsedId);
    if(!findUser) 
        return res.status(404).send({msg: "User Not Found"});
    
    return res.send(findUser);
});

app.get('/api/items', (req, res) => {
    res.send(items);
});

app.get('/api/items/:id', (req, res) => {
    console.log(req.params);
    const parsedId = parseInt(req.params.id);
    console.log(parsedId);
    if(isNaN(parsedId))
        return res.status(400).send({msg: "Bad Request. Invalid Id."});

    const findItem = items.find((items) => items.id === parsedId);
    if(!findItem) 
        return res.status(404).send({msg: "Item Not Found"});
    
    return res.send(findItem);
});

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});