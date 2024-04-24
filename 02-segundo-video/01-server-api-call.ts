import Express from "express";

const app = Express();

let API_CALLS = 0;
const CITY_BY_STATE_MEMORY_CACHE = {};

app.get("/api/state/:sigla", async (req, res) => {
  API_CALLS += 1;
  const { sigla } = req.params;
  const hasCache = Boolean(CITY_BY_STATE_MEMORY_CACHE[sigla]);

  console.log("API_CALLS", API_CALLS);
  console.log("hasCache?", hasCache);
  console.log("CACHE", CITY_BY_STATE_MEMORY_CACHE);
  console.log("====================================");

  if (!hasCache) {
    const response = await fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${sigla}`, {
      method: "GET",
    })
      .then(response => response.json());

    CITY_BY_STATE_MEMORY_CACHE[sigla] = response;
  }

  res.json({
    sigla,
    response: CITY_BY_STATE_MEMORY_CACHE[sigla],
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

/*

console.log("API_CALLS", API_CALLS);
console.log("hasCache?", hasCache);
console.log("CACHE", CITY_BY_STATE_MEMORY_CACHE);
console.log("====================================");

*/