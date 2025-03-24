import React, { useState } from "react";
import "./checkout.css";

function Checkout() {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [promoCode, setPromoCode] = useState("");

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    console.log("Check-In Date:", checkInDate);
    console.log("Check-Out Date:", checkOutDate);
    console.log("Adults:", adults);
    console.log("Promo Code:", promoCode);
  };

  return (
    <div className="search-room-container">
      <form onSubmit={handleCheckAvailability} className="horizontal-form">
        <div className="form-group">
          <label>CHECK-IN</label>
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>CHECK-OUT</label>
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>GUESTS</label>
          <input
            type="number"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            min="1"
            required
          />
        </div>
        <div className="form-group">
          <label>Have a promotion code?</label>
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promo code"
          />
        </div>
        <button type="submit" className="check-availability-btn">
          CHECK AVAILABILITY
        </button>
      </form>
    </div>
  );
}

export default Checkout;