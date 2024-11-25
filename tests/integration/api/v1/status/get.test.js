test("GET contra esse endpoint /api/v1/status deve retornar status-code 200", async function () {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});
