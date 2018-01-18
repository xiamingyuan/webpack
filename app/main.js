// main.js
const greeter = require('./Greeter.js');
const $ = require('./jquery-1.8.3.min.js');
// document.querySelector("#root").appendChild(greeter());
$('#root').text(greeter())