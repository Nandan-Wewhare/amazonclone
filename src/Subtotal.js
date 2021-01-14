import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import Button from "@material-ui/core/Button";
import { useStateValue } from "./Stateprovider";
import { getTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong> {value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs."}
      />
      <Button variant="contained" color="primary">
        Proceed and Pay
      </Button>
    </div>
  );
}

export default Subtotal;
