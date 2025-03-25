import express from 'express';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const users = [
    {id: 1, username: "johndoe", displayName: "John"},
    {id: 2, username: "janedoe", displayName: "Jane"},
    {id: 3, username: "alice", displayName: "Alice"},
    {id: 4, username: "bobby", displayName: "Bob"},
];

const items = [
    {id: 1, name: "litre-of-milk", quantity: "2", unit_price: "40.00"},
    {id: 2, name: "loaf-of-bread", quantity: "1", unit_price: "30.00"},
    {id: 3, name: "carton-of-eggs", quantity: "2", unit_price: "50.00"},
    {id: 4, name: "apples", quantity: "4", unit_price: "20.00"},
];

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});

app.get("/", (req, res) => {
    res.status(201).send({msg: "Welcome to my portfolio!"});
});

app.get('/api/users', (req, res) => {
    console.log(req.query);
    const {
        query: {filter, val}
    } = req;
    if(filter && val) 
        return res.send(
            users.filter((user) => user[filter].includes(val))
        );
    return res.send(users);
});

app.post('/api/users', (req, res) => {
    console.log(req.body);
    const { body } = req;
    const newUser = {id: users[users.length - 1].id + 1, ...body};
    users.push(newUser);

    return res.status(201).send(newUser)
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

app.get('/api/items', (req, res) => {
    console.log(req.query);
    const {
        query: {filter, val}
    } = req;
    if(filter && val) 
        return res.send(
            items.filter((item) => item[filter].includes(val))
        );
    return res.send(items);
});

app.post('/api/items', (req, res) => {
    console.log(req.body);
    const { body } = req;
    const newItem = {id: items[items.length - 1].id + 1, ...body};
    items.push(newItem);

    return res.status(201).send(newItem)
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