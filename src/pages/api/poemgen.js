export default function handler(req, res) {
  if (req.method === "POST") {
    var symbols = "";
    if (req.body.symbol_bunny !== "") symbols += (req.body.symbol_bunny + ", ");
    if (req.body.symbol_chicks !== "") symbols += (req.body.symbol_chicks + ", ");
    if (req.body.symbol_cross !== "") symbols += (req.body.symbol_cross + ", ");
    if (req.body.symbol_eggs !== "") symbols += (req.body.symbol_eggs + ", ");
    if (req.body.symbol_lillies !== "") symbols += (req.body.symbol_lillies + ", ");
    symbols = symbols.slice(0, -2);

    var headers = {
      "Authorization": "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
      "OpenAI-Oganization": process.env.NEXT_PUBLIC_ORG,
      "Content-Type": "application/json"    
    };  

    var messages = [];
    var obj = {
      "role": "user",
      "content" : "Generate n Easter-themed poem with the following element(s): " + symbols + "."
    };
    messages.push(obj);

    var body = {
      "model": "gpt-3.5-turbo",
      "messages" : messages,
      "max_tokens" : 2000
    };

    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    })
    .then(response => response.text())
    .then(data => { 
      var json_data = JSON.parse(data);
      console.log(json_data.choices);
      var html_content =  json_data.choices[0].message.content.replaceAll("\n", "<br />");
      return res.status(200).json({ message: html_content });
    })
    .catch(err => {
      return res.status(500).json({ message: "Error in poem generation" });
    }); 
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
};
