const express = require("express");
const request = require("request");
const app = express();
const PORT = process.env.PORT || 3000;

// Proxy para tu streaming HTTP
app.get("/stream", (req, res) => {
  const streamingURL = "http://45.33.18.196:8000/cnn-roca.m3u";
  
  // Configura las cabeceras para evitar bloqueos
  res.setHeader("Content-Type", "audio/mpeg");
  request.get(streamingURL).pipe(res);
});

// Ruta principal
app.get("/", (req, res) => {
  res.send("Proxy de streaming activo. Accede a /stream para escuchar la radio.");
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
