# Gonzalo and Khizar's simple js app

## This is an open source project!! Please feel free to contribute

![alt text](https://c.tenor.com/wRYX2P4yzPcAAAAC/the-office-michael-scott.gif)

MAKE SURE YOU HAVE NODE INSTALLED

On MacOS install nodejs with homebrew:
```
brew install node
```
If you're on any other OS... google how to install nodejs

1. first make a directory
2. cd in to this directory and open a terminal
3. install all dependencies using npm

```
npm i express figlet

```

4. make a file called app.js in the directory
5. copy paste this into the app:

```
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

    app.get("/", (req, res) => {
        res.send(`<pre>${teamName}</pre>`);
    });
    app.get("/js", (req, res) => {
        res.send("JavaScript is the best!");
    });

    app.listen(9090, () => {
        console.log("app listening on port 9090");
    });

```

6. run the app (it runs on port 9090)

```
node app.js

```

7. open the browser and go to http://localhost:9090/
