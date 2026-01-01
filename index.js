const express = require("express");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());

const ACCESS_TOKEN = process.env.MP_TOKEN;

app.get("/", (req, res) => {
  res.send("Backend rodando OK");
});

app.get("/criar-pagamento", async (req, res) => {
  try {
    const pagamento = {
      items: [
        {
          title: "Produto Teste",
          quantity: 1,
          unit_price: 10
        }
      ]
    };

    const response = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pagamento)
      }
    );

    const data = await response.json();
    res.redirect(data.init_point);

  } catch (err) {
    res.send("Erro ao criar pagamento");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
