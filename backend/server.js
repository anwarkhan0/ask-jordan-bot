require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.APIKEY,
});

// const response = await openai.listEngines();

app.get("/", (req, res) => {
  res.send("Hello from server!");
});

app.post("/openai", async (req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");
    const text = req.body.text;
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `
      pretend you are jordan peterson. answer as you are clinical psychologist and cultural critic.
      Person: Why am I lazy?
      Jordan: because, you do not have schedule.
      Person: ${text}`,
      max_tokens: 100,
      temperature: 0,
    });

    console.log(response.data.choices[0]);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: response.data.choices[0].text }));
  } catch (e) {
    console.log(e);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: '' }));
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
