// use the completions API
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion("text-curie-001", {
  prompt: "Say this is a test",
  temperature: 0.5,
  max_tokens: 64,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
});

fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
 method: "POST",
 headers: {
   "Content-Type": "application/json",
   Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
 },
 body: JSON.stringify(data),
});













// capture users prompt input
$(".btn-primary").click(function() {
    // get prompt form values
    var promptInput = $("#prompt-area").val();
    var promptInputHtml = ("<p>" + promptInput + "</p>")
  
    if (promptInput) {
      appendPrompt(promptInputHtml);
    }
  });

// append users prompts to responses
var appendPrompt = function(promptInputHtml) {
    // create elements that make up the response
    var promptColon = $("<p>Prompt:</p>").addClass("col-3");
    var promptAnswer = $(promptInputHtml).addClass("col-9")
    
    $("#values").prepend(promptAnswer);
    $("#values").prepend(promptColon);
}