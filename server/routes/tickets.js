const express = require("express");
const logger = require('../utils/Logger');
var axios = require('axios');
const router = express.Router();
var zendesk = require('node-zendesk');

// List of tickets
router.get("/list_tickets", (req, res) => 
{
  const url = 'https://' + process.env.mysubdomain + '.zendesk.com/api/v2/tickets.json'
  const zendeskAPI = {
    method: 'get',
    url: url,
    headers: 
        { 
          'Authorization': 'Basic Y2hldGFuZ291cjg4QGdtYWlsLmNvbTpHb2V4dHJlbWVAMQ==', 
          'Cookie': '__cfruid=788e870bd1bc20a5da3d23592017b61a1c39e470-1637561892'
        }
  }
  axios(zendeskAPI)
    .then((response) => 
    {
      res.send(response.data)
    })
    .catch((err) => 
    {
      if (err.response === undefined) 
      {
        res.sendStatus(500)
      } 
      else if (err.response.status) 
      {
        res.sendStatus(err.response.status)
      }
    })
});

// Get details of a ticket
router.get("/ticket_details", (req, res) => 
{
  const url = 'https://' + process.env.mysubdomain + '.zendesk.com/api/v2/tickets/' + req.query.tick_id + '.json'
  const zendeskAPI = {
    method: 'get',
    url: url,
    headers: 
        { 
          'Authorization': 'Basic Y2hldGFuZ291cjg4QGdtYWlsLmNvbTpHb2V4dHJlbWVAMQ==', 
          'Cookie': '__cfruid=788e870bd1bc20a5da3d23592017b61a1c39e470-1637561892'
        }
  }
  axios(zendeskAPI)
    .then((response) => 
    {
      res.send(response.data)
    })
    .catch((err) => 
    {
      if (err.response === undefined) 
      {
        res.sendStatus(500)
      } 
      else if (err.response.status) 
      {
        res.sendStatus(err.response.status)
      }
    })
});

module.exports = router;