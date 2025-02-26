import React, { useState } from "react";
import axios from "axios";
import "../css/PaymentForm.css"

const PaymentForm = () => {
  const [amount, setAmount] = useState("");

//   const handlePayment = async () => {
//     try {
//       const { data } = await axios.post("http://localhost:5000/create-order", {
//         amount: amount,
//       });

//       const options = {
//         key: "rzp_test_3Y8D6944DgvFVL",
//         amount: data.amount,
//         currency: "INR",
//         order_id: data.id,
//         handler: function (response) {
//           alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
//           axios.post("http://localhost:5000/payment-success", { response });
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

const handlePayment = async () => {
    try {
      console.log("Initiating payment..."); // Debugging log
  
      const { data } = await axios.post("http://localhost:5000/create-order", {
        amount: amount,
      });
  
      console.log("Order created:", data); // Debugging log
  
      const options = {
        key: "rzp_test_3Y8D6944DgvFVL", // Make sure this is correct
        amount: data.amount,
        currency: "INR",
        order_id: data.id,
        handler: function (response) {
          console.log("Payment successful:", response); // Debugging log
          alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
          axios.post("http://localhost:3000/payment-success", { response });
        },
      };
  
      console.log("Opening Razorpay payment window...");
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error); // Debugging log
      alert("Payment failed. Check console for details.");
    }
  };
  return (
    <div className="payment-container">
      <h2>Enter Amount</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <br />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentForm;
