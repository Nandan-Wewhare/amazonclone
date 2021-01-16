import React, { useEffect, useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import { auth } from "./firebase";
import "./Payment.css";
import { useStateValue } from "./Stateprovider";
import { Link } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getTotal } from "./reducer";
import { Button } from "@material-ui/core";
function Payment() {
  const [{ basket }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe;
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{auth.currentUser?.email}</p>
            <p>Bruce Wayne</p>
            <p>Batman lane</p>
            <p>Gotham City</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Details</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                {/* {console.log(getTotal(basket))} */}
                <h3>Rs. {getTotal(basket)}</h3>
                <Button
                  disabled={processing || disabled || success}
                  variant="contained"
                  color="primary"
                >
                  <span>
                    {processing ? <p>Processing</p> : "Proceed to pay"}
                  </span>
                </Button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
