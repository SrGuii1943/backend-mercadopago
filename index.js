const express = require("express");
const app = express();

app.use(express.json());

// ROTA PRINCIPAL (TESTE)
app.get("/", (req, res) => {
  res.send("Backend rodando OK 🚀");
});

// ROTA DE CHECKOUT (TESTE)
app.get("/checkout", (req, res) => {
  const price = req.query.price;

  if (!price) {
    return res.status(400).send("Preço não informado");
  }

  res.json({
    produto: "Produto Teste",
    valor: price
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
