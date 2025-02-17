// components/Marketplace/SellProduct.jsx
// import '../../styles/sellproduct.css'
// import { useState } from "react";

// const SellProduct = () => {
//   const [product, setProduct] = useState({
//     name: "",
//     price: "",
//     description: "",
//     seller: "",
//     razorpayAccount: "",
//     photo: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setProduct({ ...product, photo: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.keys(product).forEach((key) => {
//       formData.append(key, product[key]);
//     });

//     try {
//       const response = await fetch("http://localhost:5000/api/marketplace/add", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         alert("Product added successfully!");
//       } else {
//         alert("Failed to add product");
//       }
//     } catch (error) {
//       alert("Error adding product");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required />
//       <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
//       <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
//       <input type="text" name="seller" value={product.seller} onChange={handleChange} placeholder="Your Name" required />
//       <input type="text" name="razorpayAccount" value={product.razorpayAccount} onChange={handleChange} placeholder="Razorpay Account" required />
//       <input type="file" name="photo" onChange={handleFileChange} required />
//       <button type="submit">Upload Product</button>
//     </form>
//   );
// };

// export default SellProduct;

import '../../styles/sellproduct.css';
import { useState } from "react";

const SellProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    seller: "",
    phone: "",  // Updated field for seller's phone number
    razorpayAccount: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    setProduct({ ...product, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(product).forEach((key) => {
      formData.append(key, product[key]);
    });

    try {
      const response = await fetch("http://localhost:5000/api/marketplace/add", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Product added successfully!");
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      alert("Error adding product");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required />
      <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
      <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
      <input type="text" name="seller" value={product.seller} onChange={handleChange} placeholder="Your Name" required />
      <input type="text" name="phone" value={product.phone} onChange={handleChange} placeholder="Your Phone Number" required />  {/* New field */}
      <input type="text" name="razorpayAccount" value={product.razorpayAccount} onChange={handleChange} placeholder="Razorpay Account" required />
      <input type="file" name="photo" onChange={handleFileChange} required />
      <button type="submit">Upload Product</button>
    </form>
  );
};

export default SellProduct;
