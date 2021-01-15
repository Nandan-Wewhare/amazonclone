import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { auth } from "./firebase";
import { useStateValue } from "./Stateprovider";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h4>Hello, {auth.currentUser?.email}!</h4>
          <h2 className="checkout__title">Your basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              price={item.price}
              title={item.title}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
