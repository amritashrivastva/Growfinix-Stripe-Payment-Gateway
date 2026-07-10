require("dotenv").config();

console.log("PORT =", process.env.PORT);
console.log(
  "STRIPE KEY =",
  process.env.STRIPE_SECRET_KEY ? "FOUND ✅" : "NOT FOUND ❌"
);

const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});