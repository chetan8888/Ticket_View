import axios from "axios";
var request = require('request');

const BASE_URL = "http://localhost:5000";
export const LIST_TICKETS = () => 
{
    var ticket_list_api = 
    {
        method: 'get',
        url: 'https://zccchetangour.zendesk.com/api/v2/tickets.json',
        headers: 
        { 
          'Authorization': 'Basic Y2hldGFuZ291cjg4QGdtYWlsLmNvbTpHb2V4dHJlbWVAMQ==', 
          'Cookie': '__cfruid=788e870bd1bc20a5da3d23592017b61a1c39e470-1637561892'
        }
    };

    return axios(ticket_list_api)
    .then(function (response)
    {
        return response.data
    })
    .catch(function (error)
    {
        return error
    });

    
    // var options = {
    // 'method': 'GET',
    // 'url': 'https://zccchetangour.zendesk.com/api/v2/tickets.json',
    // 'headers': {
    //             'Authorization': 'Basic Y2hldGFuZ291cjg4QGdtYWlsLmNvbTpHb2V4dHJlbWVAMQ==',
    //             'Cookie': '__cfruid=8c1af49aff1b4d2483a8ef353ae99573b8b4d4d1-1637569851'
    //            }
    // };

    // request(options, function (error, response) {
    // if (error) throw new Error(error);
    // console.log(response.body);
    // });

    // return request(options)

}
