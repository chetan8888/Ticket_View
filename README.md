# Ticket_View

<h2>Zendesk Coding Challenge  (Summer Internship 2022)</h2>

<p>This project is submitted to Zendesk as the Zendesk Coding Challenge for my candidacy for the position of Software Engineer Intern for Summer 2022 </p>

<p>It is a full stack web application which uses Node.js for backend and React for frontend. The application contains following 3 pages:</p>

<ol>
  <li>Home Page: Contains my information and link to next page. Since this is a demo project where I have to show the tickets in my Zendesk account, I have eliminated the login and signup pages. These pages can be added in future.</li>
  <li>Tickets Table Page: Displays a list of tickets.</li>
  <li>View Ticket Page: Displays all the information for a particular ticket.</li>
</ol>

<h3>Requirements</h3>
<ul>
  <li>NPM</li>
  <li>Node</li>
</ul>

<h3> Installation </h3>

<h4>Backend (Node.js)</h4>
<ol>
  <li>Navigate to server folder</li>
  <li>Run "npm install" command</li>
  <li>Run "nodemon ./index.js" command. This will start the backend Node server at http://localhost:5000</li>
</ol>

<h4>Frontend (React)</h4>
<ol>
  <li>Navigate to client folder</li>
  <li>Run "npm install" command</li>
  <li>Run "npm start" command. This will start the frontend React server at http://localhost:3000</li>
</ol>

<h3> Usage </h3>
<ol>
  <li>Once both the servers are up and running, navigate to http://localhost:3000 on a browser. This will render home page</li>
  <li>Click on "View Tickets" to view all tickets in list format. Use the filter at the top left to filter the tickets on any value. You can also export the tickets data in a CSV or Excel format or export it as a PDF.</li>
  <li>Click on any ticket row to navigate to another page that shows all the details of the ticket.</li>
</ol>

<h3> Understanding Code </h3>
<p> I have used Node.js for my backend The server is created using the Express package and the APIs are called using the axios library. I have also used the "winston" library to log all the successfull and error messages. The log file is named "server.log" and is located in the logs folder. All the APIs created are in the "tickets.js" file locatedi nthe routes folder. The appropriate API is called for a router using the Router package. The user is automatically redirected to the home page if he/she enters a url which is not defined in this project.
</p>

<p>
  I have used React for the frontend as it provides several extensions which are apt for this project. I used React Datatable to render the tickets in tabular form. Pagination is added for data and the user has the option to set the number of tickets displayed on the page. An appropriate error page is displayed if there was an error in getting the response from an API.  
</p>

<h3> Future Work </h3>
<ul>
  <li>Incorporate Login page.</li>
  <li>Improve the styling.</li>
  <li>Add create ticket functionality.</li>
  <li>Allow user to update ticket.</li>
  <li>Improve performance by reducing the number of API calls and calling segregated data for the tickets table page.</li> 
</ul>

<h4>
Feel free to contact me regarding the project. Drop me an email at "chetangour88@gmail.com"
</h4>
