import { Button } from "@material-ui/core";
import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./Stateprovider";
function CheckoutProduct({ id, image, price, title, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        <Button variant="contained" color="secondary" onClick={removeFromCart}>
          Remove from cart
        </Button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
