
import axios from "axios";


function App() {
  const handlePayment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/payment/create-checkout-session"
      );

     const checkoutUrl = response.data.url;
window.location.href = checkoutUrl;

    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(JSON.stringify(error.response.data));
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        onClick={handlePayment}
        style={{
          padding: "15px 30px",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        Pay ₹500
      </button>
    </div>
  );
}

export default App;