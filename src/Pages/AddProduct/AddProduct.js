import React from "react";
import { toast, ToastContainer } from "react-toastify";
import logo from "../../images/logo2.png";

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const des = event.target.des.value;
        const category = event.target.foodCategory.value;
        const price = event.target.price.value;
        const img = event.target.img.value;
        const product = {
            name,
            des,
            category,
            price,
            img
        }
        console.log(name, des, category, price, img);
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if(result?.acknowledged === true) {
                toast('Product added successfully');
                event.target.reset();
            }
            else {
                toast('Something Went Wrong');
            }
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
      <div className="form d-flex justify-content-center align-items-center">
        <div>
          <img
            src={logo}
            className="img-fluid mb-5 d-block mx-auto"
            style={{ height: "80px" }}
            alt="logo"
          />
          <form onSubmit={handleAddProduct} className="login-form">
            <input type="text" name="name" placeholder="Name" required />
            <input
              type="text"
              name="des"
              placeholder="Description"
              required
            />
            <select name="foodCategory" id="cars">
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
            <input type="number" name="price" placeholder="Price" required />
            <input type="text" name="img" placeholder="PhotoURL" required />
            <input type="submit" value="Add Product" className="submit-btn" />
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddProduct;
