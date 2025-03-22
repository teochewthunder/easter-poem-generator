export async function POST(req) {
	const formData = await req.json();

	var symbols = "";
	if (formData.symbol_bunny !== "") symbols += (formData.symbol_bunny + ", ");
	if (formData.symbol_chicks !== "") symbols += (formData.symbol_chicks + ", ");
	if (formData.symbol_cross !== "") symbols += (formData.symbol_cross + ", ");
	if (formData.symbol_eggs !== "") symbols += (formData.symbol_eggs + ", ");
	if (formData.symbol_lillies !== "") symbols += (formData.symbol_lillies + ", ");
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

	try {
		const apiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
		  method: "POST",
		  headers: headers,
		  body: JSON.stringify(body)
		});

	    if (!apiResponse.ok) {
		  return new Response(JSON.stringify({ message: "Error in poem generation" }), {
		    status: 500,
		    headers: { "Content-Type": "application/json" },
		  });
	    }

	    const data = await apiResponse.json();
	    var html_content =  data.choices[0].message.content.replaceAll("\n", "<br />");

	    return new Response(JSON.stringify({ message: html_content }), {
	      status: 200, 
	      headers: { "Content-Type": "application/json" },
	    });
	} catch (error) {
		return new Response(JSON.stringify({ message: error.message }), {
		  status: 500, 
		  headers: { "Content-Type": "application/json" },
		});
	}
}
