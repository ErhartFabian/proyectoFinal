import React from 'react';
import './paymentProcess.css';

function AddressForm() {
  return (
    <div class="container">
        <div class="row">
          <div class="col-50">
            <h3>Shipping Address</h3>
            <label for="fname">Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Yvone"></input>
            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder="yvone@example.com"></input>
            <label for="adr">Address</label>
            <input type="text" id="adr" name="address" placeholder="123 Street"></input>
            <label for="city">City</label>
            <input type="text" id="city" name="city" placeholder="Pachuca"></input>

            <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="Hgo"></input>
              </div>
              <div class="col-50">
                <label for="zip">Zip Code</label>
                <input type="text" id="zip" name="zip" placeholder="10001"></input>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
export default AddressForm;