import express from 'express';

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

// mock list of users
const users = [
    {id: 1, username: "johndoe", displayName: "John"},
    {id: 2, username: "janedoe", displayName: "Jane"},
    {id: 3, username: "alice", displayName: "Alice"},
    {id: 4, username: "bobby", displayName: "Bob"},
];

// mock list of items
const items = [
    {id: 1, item_name: "milk", quantity: "2", price: "40.00"},
    {id: 2, item_name: "bread", quantity: "1", price: "30.00"},
    {id: 3, item_name: "eggs", quantity: "2", price: "50.00"},
    {id: 4, item_name: "apples", quantity: "4", price: "20.00"},
];

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});

// landing message
app.get("/", (req, res) => {
    res.status(201).send({msg: "Welcome to my portfolio!"});
});

// USERS
// GET request
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

// GET request + route param
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

// POST request
app.post('/api/users', (req, res) => {
    console.log(req.body);
    const { body } = req;
    const newUser = {id: users.length + 1, ...body};
    users.push(newUser);

    return res.status(201).send(newUser)
});

// PUT request
app.put('/api/users/:id', (req, res) => {
    const { 
        body, 
        params: { id },
    } = req;

    const parsedId = parseInt(id);
    if(isNaN(parsedId)) 
        return res.sendStatus(400);
    const findIndex = users.findIndex(
        (user) => user.id === parsedId
    );
    if(findIndex === -1) 
        return res.sendStatus(404);
    users[findIndex] = { id: parsedId, ...body };

    return res.sendStatus(200);
});

// PATCH request
app.patch('/api/users/:id', (req, res) => {
    const { 
        body, 
        params: { id },
    } = req;

    const parsedId = parseInt(id);
    if(isNaN(parsedId)) 
        return res.sendStatus(400);
    const findIndex = users.findIndex(
        (user) => user.id === parsedId
    );
    if(findIndex === -1) 
        return res.sendStatus(404);
    users[findIndex] = { ...users[findIndex], ...body };
})

// ITEMS
// GET request
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

// GET request + route param
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

// POST request
app.post('/api/items', (req, res) => {
    console.log(req.body);
    const { body } = req;
    const newItem = {id: items[items.length - 1].id + 1, ...body};
    items.push(newItem);

    return res.status(201).send(newItem)
});

// PUT request
app.put('/api/items/:id', (req, res) => {
    const { 
        body, 
        params: { id },
    } = req;

    const parsedId = parseInt(id);
    if(isNaN(parsedId)) 
        return res.sendStatus(400);
    const findIndex = items.findIndex(
        (item) => item.id === parsedId
    );
    if(findIndex === -1) 
        return res.sendStatus(404);
    items[findIndex] = { id: parsedId, ...body };

    return res.sendStatus(200);
});

// PATCH request
app.patch('/api/items/:id', (req, res) => {
    const { 
        body, 
        params: { id },
    } = req;

    const parsedId = parseInt(id);
    if(isNaN(parsedId)) 
        return res.sendStatus(400);
    const findIndex = items.findIndex(
        (item) => item.id === parsedId
    );
    if(findIndex === -1) 
        return res.sendStatus(404);
    items[findIndex] = { ...items[findIndex], ...body };

    return res.sendStatus(200);
})