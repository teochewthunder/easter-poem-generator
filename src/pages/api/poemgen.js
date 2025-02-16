export default function handler(req, res) {
  if (req.method === "POST") {

    // Perform your form handling logic here (e.g., save data to database)
    var symbols = "";
    if (req.body.symbol_bunny !== "") symbols += (req.body.symbol_bunny + ", ");
    if (req.body.symbol_chicks !== "") symbols += (req.body.symbol_chicks + ", ");
    if (req.body.symbol_cross !== "") symbols += (req.body.symbol_cross + ", ");
    if (req.body.symbol_eggs !== "") symbols += (req.body.symbol_eggs + ", ");
    if (req.body.symbol_lillies !== "") symbols += (req.body.symbol_lillies + ", ");
    symbols = symbols.slice(0, -2);

    console.log('symbols',symbols);

    return res.status(200).json({ message: "Form submitted successfully!" });
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
};
