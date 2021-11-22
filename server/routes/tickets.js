const express = require("express");
const logger = require('../utils/Logger');

const router = express.Router();

// List of tickets
router.get("/list_tickets", (req, res) => 
{
    // var zendesk = require('node-zendesk');

    // var client = zendesk.createClient({
    // username:  'chetangour88@gmail.com',
    // token:     'rwhR69mzFSaumgU0ToUVWMqKCHYs9O1vVAKGlD8s',
    // remoteUri: 'https://zccchetangour.zendesk.com/api/v2/tickets.json'
    // });

    // client.users.list(function (err, req, result) {
    // if (err) {
    //     console.log(err);
    //     return;
    // }
    // res.send(result);
    // });
});

module.exports = router;