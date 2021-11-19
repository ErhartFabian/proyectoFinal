import React from 'react';
import './paymentProcess.css'

function PaymentForm() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-50">
          <h3>Payment</h3>
          <label for="cname">Name on Card</label>
          <input type="text" id="cname" name="cardname" placeholder="Yvone" ></input>
          <label for="ccnum">Credit card number</label>
          <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
          <label for="expmonth">Exp Month</label>
          <input type="text" id="expmonth" name="expmonth" placeholder="September"></input>

          <div class="row">
            <div class="col-50">
              <label for="expyear">Exp Year</label>
              <input type="text" id="expyear" name="expyear" placeholder="2018"></input>
            </div>
            <div class="col-50">
              <label for="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" placeholder="352"></input>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
export default PaymentForm;