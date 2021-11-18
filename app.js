const express = require("express");
const app = express();
const figlet = require("figlet");

const teamName = figlet.textSync("Team JS", {
	font: "georgia11",
	horizontalLayout: "default",
	verticalLayout: "default",
	width: 80,
	whitespaceBreak: true,
});
console.log(teamName);

app.get("/", (req, res) => {
	res.send(`<pre>${teamName}</pre>`);
});
app.get("/js", (req, res) => {
	res.send("JavaScript is the best!");
});

app.listen(9090, () => {
	console.log("app listening on port 9090");
});
