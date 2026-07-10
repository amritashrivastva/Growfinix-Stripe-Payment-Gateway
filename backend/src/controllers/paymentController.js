const stripe = require("../config/stripe");

const createCheckoutSession = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Stripe Demo Course",
            },
            unit_amount: 50000, // ₹500
          },
          quantity: 1,
        },
      ],

      mode: "payment",

      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({
  url: session.url,
});
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

module.exports = {
  createCheckoutSession,
};