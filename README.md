# Gonzalo and Khizar's simple js app

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

    app.get("/", (req, res) => {
        res.send("Team JS");
    });
    app.get("/js", (req, res) => {
        res.send("JavaScript is the best!");
    });

    app.listen(9090, () => {
        console.log("app listening on port 9090");
    });

```

6. run the app

```
node app.js

```
