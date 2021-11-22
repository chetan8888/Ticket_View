const express = require("express");
const logger = require('../utils/Logger');
var axios = require('axios');
const router = express.Router();

// List of tickets
router.get("/list_tickets", (req, res) => 
{
    var ticket_list_api = 
    {
        method: 'get',
        url: 'https://' + process.env.mysubdomain + '.zendesk.com/api/v2/tickets.json',
        headers: 
        { 
          'Authorization': 'Basic Y2hldGFuZ291cjg4QGdtYWlsLmNvbTpHb2V4dHJlbWVAMQ==', 
          'Cookie': '__cfruid=788e870bd1bc20a5da3d23592017b61a1c39e470-1637561892'
        }
    };
      
    axios(ticket_list_api)
    .then(function (response)
    {
        res.send(response.data)
    })
    .catch(function (error)
    {
        res.send(error)
    });
});

module.exports = router;