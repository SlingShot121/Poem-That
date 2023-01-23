function generatePoem() {
    var recipient = document.getElementById("recipient").value;
    var occasion = document.getElementById("occasion").value;
    var mood = document.getElementById("mood").value;
    var apiKey = "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";
    var apiUrl = "https://api.openai.com/v1/engines/davinci/completions";
    var prompt = 'Write a poem addressed to ' + recipient + ' for ' + occasion + ' with ' + mood + ' mood';
  
    // Use the Fetch API to make a POST request to the OpenAI API
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 100
      })
    })
    .then(response => response.json())
    .then(data => {
      // Check if the data.choices array is empty
      if(data.choices.length == 0){
        // If empty, display "NO INFO" in the "poem" div
        var poemDiv = document.getElementById("poem");
        poemDiv.innerHTML = "NO INFO";
      }else{
        // Extract the generated poem from the API response
        var poem = data.choices[0].text;
        // Display the poem in the "poem" div
        var poemDiv = document.getElementById("poem");
        poemDiv.innerHTML = poem;
      }
    })
    console.log(poemDiv)
    console.log(poem)
    console.log(data)
    console.log(response)
    .catch(error => console.error(error));
  }