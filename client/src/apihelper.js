const getTickets = async () => {
    try {
      const response = await fetch('http://localhost:5000/tickets/list_tickets');
      if (response.status !== 200) {
        return {
          error: response.status
        }
      } else {
        const json = await response.json()
        return json.tickets 
      }
    }
    catch(err) {
      return {
        error: 'Server Unavailable'
      }
    }
  }

  const get_ticket_details = async (tick_id) => {
    try 
    {
      const response = await fetch('http://localhost:5000/tickets/ticket_details?tick_id=' + tick_id);
      if (response.status !== 200) 
      {
        return {
          error: response.status
        }
      } 
      else 
      {
        const json = await response.json()
        return json.ticket
      }
    }
    catch(err) 
    {
      return {
        error: 'Server Unavailable'
      }
    }
  }
  
module.exports.getTickets = getTickets;
module.exports.get_ticket_details = get_ticket_details;