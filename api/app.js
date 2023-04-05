const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');


const bodyParser = require('body-parser');


// Load in the mongoose models
const { List, Task,} = require('./db/Models');


// Load middleware
app.use(bodyParser.json());


/*Routes Handlers */


/*List Routes */



/**
 * GET /lists
 * purpose : GET all lists
 */
app.get('/lists', authenticate, (req, res) => {
    // We want to return an array of all the lists that belong to the authenticated user 
    List.find({
        _userId: req.user_id
    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})

/**
 * POST /lists
 * purpose : Create a list
 */
app.post('/lists', authenticate, (req, res) => {
    // We want to create a new list and return the new list document back to the user (which includes the id)
    // The list information (fields) will be passed in via the JSON request body
    let title = req.body.title;

    let newList = new List({
        title,
        _userId: req.user_id
    });
    newList.save().then((listDoc) => {
        // the full list document is returned (incl. id)
        res.send(listDoc);
    })
});

/**
 * PATCH /lists/:id
 * purpose : Update a specified lists
 */
app.patch('/lists/:id', (req, res ) => {
    // we want to update the specified lists (lists document with id in the URL) with th new values specified in the JSON body of the request
});


/**
 * DELETE /lists/:id
 * purpose : Delete a lists
 */
app.delete('/lists/:id', (req, res ) => {
    // we want to delete the specified list (document with id in the URL)
});


app.listen(3000, () => {
    console.log("Server listening on port : 3000");
});
