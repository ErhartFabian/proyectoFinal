import React from 'react';
import './paymentProcess.css';

function Review() {
  return (
    <div class="row">
      <div class="col-25">
        <div class="container">
          <h4>Review Order <span class="price" style="color:black"></span></h4>
          <p><a href="#">Product 1</a> <span class="price">$15</span></p>
          <p><a href="#">Product 2</a> <span class="price">$5</span></p>
          <p><a href="#">Product 3</a> <span class="price">$8</span></p>
          <p><a href="#">Product 4</a> <span class="price">$2</span></p>
          <hr/>
          <p>Total <span class="price" style="color:black"><b>$30</b></span></p>
        </div>
      </div>
    </div>
  );
}
export default Review;