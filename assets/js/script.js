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