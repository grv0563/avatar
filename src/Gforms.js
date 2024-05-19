// import React from 'react'
// import gapi from '@googleapis/forms'
// function Gforms() {
// <script src="https://apis.google.com/js/api.js"></script>
//     function authenticate() {
//         return gapi.auth2.getAuthInstance()
//             .signIn({ scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/forms.body" })
//             .then(function () { console.log("Sign-in successful"); },
//                 function (err) { console.error("Error signing in", err); });

//         function loadClient() {
//             gapi.client.setApiKey("YOUR_API_KEY");
//             return gapi.client.load("https://forms.googleapis.com/$discovery/rest?version=v1")
//                 .then(function () { console.log("GAPI client loaded for API"); },
//                     function (err) { console.error("Error loading GAPI client for API", err); });
//         }
//         // Make sure the client is loaded and sign-in is complete before calling this method.
//         function execute() {
//             return gapi.client.forms.forms.create({
//                 "resource": {
//                     "info": {
//                         "title": "Quiz on Linux"
//                     }
//                 }
//             })
//                 .then(function (response) {
//                     // Handle the results here (response.result has the parsed body).
//                     console.log("Response", response);
//                 },
//                     function (err) { console.error("Execute error", err); });
//         }

//         gapi.load("client:auth2", function () {
//             gapi.auth2.init({ client_id: "YOUR_CLIENT_ID" });
//         });



//         return (
//             <div>Gforms
//                 <button onclick="authenticate().then(loadClient)">authorize and load</button>
//                 <button onclick="execute()">execute</button>
//             </div>
//         )
//     }

// }
//     export default Gforms;