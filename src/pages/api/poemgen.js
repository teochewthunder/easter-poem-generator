export default function handler(req, res) {
  if (req.method === "POST") {

    // Perform your form handling logic here (e.g., save data to database)
    return res.status(200).json({ message: "Form submitted successfully!" });
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
};
