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

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});

// landing message
app.get("/", (req, res) => {
    res.status(201).send({msg: "Welcome to my basic crud API!"});
});

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
});

// DELETE request
app.delete("/api/users/:id", (req, res) => {
    const {
        params: { id },
    } = req

    const parsedId = parseInt(id);
    if(isNaN(parsedId)) 
        return res.sendStatus(400);
    const findIndex = users.findIndex(
        (user) => user.id === parsedId
    );
    if(findIndex === -1)
        return res.sendStatus(404);
    users.splice(findIndex, 1);
    return res.sendStatus(200);
});