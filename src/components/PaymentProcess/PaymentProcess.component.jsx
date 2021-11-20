import React, {useState} from 'react';
import './paymentProcess.css';


function Checkout() {

    const[state, setState] = useState({
        firstname: "",
        email:"",
        address:"",
        city:"",
        state:"",
        zip:"",
        cardname:"",
        cardnumber:"",
        expmonth:"",
        expyear:"",
        cvv:"",
    });

    function Vacio() {
        const arr = Object.keys(state).map((propiedad) => state[propiedad]);
        for (let i = 0; i < arr.length; i++)
        {
          if(arr[i] === "") {
            return true;
          }
        }
        return false;
    }

    function onSubmit(event) {
        event.preventDefault();
        if(Vacio()) {
            alert("Faltan campos por llenar!!");
        }
        else{
         alert("Su compra fue exitosa!!");

        }
    }

    function handleChange(event) {
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]:value,
        });
    }

  return (
    <div className="main">
        <div className="col-75">
            <div className="container">
                <div className="main">
                  <div className="col-50">
                    <h3>Shiping Address</h3>
                    <label htmlFor="fname">Full Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Yvone" onChange={handleChange}></input>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="yvone@example.com" onChange={handleChange}></input>
                    <label htmlFor="adr">Address</label>
                    <input type="text" id="adr" name="address" placeholder="123 Street" onChange={handleChange}></input>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" placeholder="Pachuca" onChange={handleChange}></input>

                    <div className="main">
                      <div className="col-50">
                        <label htmlFor="state">State</label>
                        <input type="text" id="state" name="state" placeholder="Hgo" onChange={handleChange}></input>
                      </div>
                      <div className="col-50">
                        <label htmlFor="zip">Zip Code</label>
                        <input type="text" id="zip" name="zip" placeholder="10001" onChange={handleChange}></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-50">
                    <h3>Payment</h3>
                    <label htmlFor="cname">Name on Card</label>
                    <input type="text" id="cname" name="cardname" placeholder="Yvone" onChange={handleChange}></input>
                    <label htmlFor="ccnum">Credit card number</label>
                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" onChange={handleChange}></input>
                    <label htmlFor="expmonth">Exp Month</label>
                    <input type="text" id="expmonth" name="expmonth" placeholder="September" onChange={handleChange}></input>

                    <div className="main">
                      <div className="col-50">
                        <label htmlFor="expyear">Exp Year</label>
                        <input type="text" id="expyear" name="expyear" placeholder="2018" onChange={handleChange}></input>
                      </div>
                      <div className="col-50">
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" placeholder="352" onChange={handleChange}></input>
                      </div>
                    </div>
                  </div>

                </div>
                <input type="submit" value="Continue to checkout" className="btn" onClick={onSubmit}></input>
            </div>
          </div>

          <div className="col-25">
            <div className="container">
              <h4>Cart Total</h4>
              <p>Total <span className="price" style={{color: "black"}}><b>$30</b></span></p>
            </div>
          </div>
        </div>
  );
}
export default Checkout;
