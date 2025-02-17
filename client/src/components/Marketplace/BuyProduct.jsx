// import { useState, useEffect } from "react";
// import "../../styles/buyproduct.css";

// const BuyProduct = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/marketplace")
//       .then((response) => response.json())
//       .then((data) => setProducts(data));
//   }, []);

//   const handleVideoCall = async (sellerPhone, productName) => {
//     if (!sellerPhone || !productName) {
//       alert("Seller phone or product name is missing!");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/video-call/send-link", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ sellerPhone, productName }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || "Failed to create video call link");
//       }

//       window.open(data.meetingLink, "_blank");
//       alert(`Video call link sent to seller: ${data.meetingLink}`);
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error starting video call.");
//     }
//   };

//   const handleBuy = async (productId, price, sellerEmail) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/payment/payment', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ productId, price, sellerEmail }),
//       });

//       if (!response.ok) {
//         throw new Error('Payment creation failed');
//       }

//       const data = await response.json();
//       const razorpayOrderId = data.id;

//       const options = {
//         key: process.env.REACT_APP_RAZORPAY_KEY_ID,
//         amount: price * 100,
//         currency: 'INR',
//         order_id: razorpayOrderId,
//         handler: function () {
//           alert('Payment successful!');
//         },
//         prefill: {
//           name: 'Buyer Name',
//           email: 'buyer@example.com',
//           contact: '1234567890',
//         },
//         theme: { color: '#00b894' },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();
//     } catch (error) {
//       console.error('Payment error:', error);
//     }
//   };

//   return (
//     <div className="buy-product-container">
//       <h2 className="title">Available Products</h2>
//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product._id} className="product-card">
//             <img src={product.image} alt={product.name} className="product-image" />
//             <div className="product-info">
//               <h3>{product.name}</h3>
//               <p className="description">{product.description}</p>
//               <p className="price">Price: ₹{product.price}</p>
//               <p className="seller">Seller: {product.seller}</p>
//               <div className="button-group">
//                 <button className="buy-button" onClick={() => handleBuy(product._id, product.price, product.seller)}>
//                   Buy Now
//                 </button>
//                 <button className="video-call-button" onClick={() => handleVideoCall(product.phone, product.name)}>
//                   Video Call Seller
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BuyProduct;

// import { useState, useEffect } from "react";
// import "../../styles/buyproduct.css";

// const BuyProduct = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/marketplace")
//       .then((response) => response.json())
//       .then((data) => setProducts(data));
//   }, []);

//   const handleVideoCall = async (sellerPhone, productName) => {
//     if (!sellerPhone || !productName) {
//       alert("Seller phone or product name is missing!");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/video-call/send-link", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ sellerPhone, productName }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || "Failed to create video call link");
//       }

//       window.open(data.meetingLink, "_blank");
//       alert(`Video call link sent to seller: ${data.meetingLink}`);
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error starting video call.");
//     }
//   };

//   const handleBuy = async (productId, price, sellerEmail) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/payment/payment', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ productId, price, sellerEmail }),
//       });

//       if (!response.ok) {
//         throw new Error('Payment creation failed');
//       }

//       const data = await response.json();
//       const razorpayOrderId = data.id;

//       const options = {
//         key: process.env.REACT_APP_RAZORPAY_KEY_ID,
//         amount: price * 100,
//         currency: 'INR',
//         order_id: razorpayOrderId,
//         handler: function () {
//           alert('Payment successful!');
//         },
//         prefill: {
//           name: 'Buyer Name',
//           email: 'buyer@example.com',
//           contact: '1234567890',
//         },
//         theme: { color: '#00b894' },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();
//     } catch (error) {
//       console.error('Payment error:', error);
//     }
//   };

//   return (
//     <div className="buy-product-container">
//       <h2 className="title">Available Products</h2>
//       <div className="product-grid">
//         {products.map((product) => (
//           <div key={product._id} className="product-card">
//             <img
//               src={product.image ? `http://localhost:5000/${product.image}` : "default-product.jpg"}
//               alt={product.name}
//               className="product-image"
//             />
//             <div className="product-info">
//               <h3>{product.name}</h3>
//               <p className="description">{product.description}</p>
//               <p className="price">₹{product.price}</p>
//               <p className="seller">Seller: {product.seller}</p>
//               <div className="button-group">
//                 <button className="buy-button" onClick={() => handleBuy(product._id, product.price, product.seller)}>
//                   Buy Now
//                 </button>
//                 <button className="video-call-button" onClick={() => handleVideoCall(product.phone, product.name)}>
//                   Video Call Seller
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BuyProduct;


import { useState, useEffect } from "react";
import "../../styles/buyproduct.css";

const BuyProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/marketplace")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleVideoCall = async (sellerPhone, productName) => {
    if (!sellerPhone || !productName) {
      alert("Seller phone or product name is missing!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/video-call/send-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sellerPhone, productName }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create video call link");
      }

      window.open(data.meetingLink, "_blank");
      alert(`Video call link sent to seller: ${data.meetingLink}`);
    } catch (error) {
      console.error("Error:", error);
      alert("Error starting video call.");
    }
  };

  const handleBuy = async (productId, price, sellerEmail) => {
    try {
      const response = await fetch("http://localhost:5000/api/payment/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, price, sellerEmail }),
      });

      if (!response.ok) {
        throw new Error("Payment creation failed");
      }

      const data = await response.json();
      const razorpayOrderId = data.id;

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: price * 100,
        currency: "INR",
        order_id: razorpayOrderId,
        handler: function () {
          alert("Payment successful!");
        },
        prefill: {
          name: "Buyer Name",
          email: "buyer@example.com",
          contact: "1234567890",
        },
        theme: { color: "#00b894" },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return (
    <div className="buy-product-container">
      <h2 className="title">Available Products</h2>
      <div className="product-grid">
        {products.length === 0 ? (
          <p className="no-products">No products available</p>
        ) : (
          products.map((product) => (
            <div key={product._id} className="product-card">
              <img
                src={
                  product.photo ? `http://localhost:5000/${product.photo}` : 'default-image.jpg'
                }
                alt={product.name || "Product Image"}
                className="product-image"
                onError={(e) => (e.target.src = "default-product.jpg")} // Fallback image
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="description">{product.description}</p>
                <p className="price">₹{product.price}</p>
                <p className="seller">Seller: {product.seller}</p>
                <div className="button-group">
                  <button className="buy-button" onClick={() => handleBuy(product._id, product.price, product.seller)}>
                    Buy Now
                  </button>
                  <button className="video-call-button" onClick={() => handleVideoCall(product.phone, product.name)}>
                    Video Call Seller
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BuyProduct;
