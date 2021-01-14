import React from "react";
import "./Product.css";
import Button from "@material-ui/core/Button";
import { useStateValue } from "./Stateprovider";
function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>Rs. </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => {
              return <p>⭐</p>;
            })}
        </div>
      </div>
      <img src={image} alt="bed" />
      <Button onClick={addToBasket} variant="contained" color="secondary">
        Add to basket
      </Button>
    </div>
  );
}

export default Product;
