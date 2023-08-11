import express, { Express, Request, Response } from "express";
const webPush = require("web-push");

const PORT = 3000;
const app: Express = express();

const publicKey =
  "BP-eGQbl1IhWyoQbIMvDOQj30_zVT78tD8pcSQ4vQlr6oWYVb8dZ8gQGlorKt40KJ_iKgIC7uJBX9wb3XKSOxn4";
const privateKey = "DkTg7U5KQMQTata6l8GdIwoBE2qBcdlHhHLZyQcw8Jc";

app.use(express.json());
app.use(express.static("dist"));

app.post("/sendNotification", (req, res) => {
  webPush.setVapidDetails("https://localhost:3000/", publicKey, privateKey);

  const body = req.body;
  const subscription = body.subscription;
  const payload = body.payload;
  const delay = body.delay;
  const options = {
    TTL: body.ttl,
  };

  console.log("sub: ", subscription);

  webPush
    .sendNotification(subscription, payload.body, options)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.get("/*", function (req, res) {
  res.redirect("/");
  //   res.sendFile(path.join(__dirname, "./dist/index.html"), function (err) {
  //     if (err) {
  //       res.status(500).send(err);
  //     }
  //   });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
