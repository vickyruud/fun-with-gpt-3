const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

const response =  openai.createCompletion("text-curie-001", {
  prompt: "Say this is a test",
  max_tokens: 5,
});

console.log(response)
