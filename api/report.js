let lastReport = null;

export default function handler(req, res) {

  // 📤 POST
  if (req.method === "POST") {
    const data = req.body;

    console.log("POST recibido:", data);

    lastReport = data;

    return res.status(200).json({
      message: "Guardado",
      data: lastReport
    });
  }

  // 📥 GET
  if (req.method === "GET") {

    if (!lastReport) {
      return res.status(200).json([]);
    }

    return res.status(200).json([lastReport]);
  }

  res.status(405).json({ message: "Método no permitido" });
}