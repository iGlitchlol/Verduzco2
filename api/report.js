let reports = [];

export default function handler(req, res) {

  // 🔥 POST: guardar reporte
  if (req.method === "POST") {
    const data = req.body;

    console.log("Reporte recibido:", data); // DEBUG

    reports.push(data);

    return res.status(200).json({
      message: "Reporte guardado",
      total: reports.length,
      data: reports
    });
  }

  // 🔥 GET: obtener reportes
  if (req.method === "GET") {
    return res.status(200).json(reports);
  }

  res.status(405).json({ message: "Método no permitido" });
}