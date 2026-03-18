let reports = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    reports.push(data);

    return res.status(200).json({
      message: "Reporte guardado",
      reports: reports
    });
  }

  if (req.method === "GET") {
    return res.status(200).json(reports);
  }

  res.status(405).json({ message: "Método no permitido" });
}