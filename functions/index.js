/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51N2RzuCtnKT7yz0wUCFdGA0khBJdiYTGSu8HCiUKddzghbHYqekiQw4Iz4ys1AUfqSL3SrA1BUruvcUIzB8Wb0ds0026KfLYQW");

// App config
const app = express();
// middlewares
app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command
exports.api = functions.https.onRequest(app);
// http://127.0.0.1:5001/myo-855c4/us-central1/api
