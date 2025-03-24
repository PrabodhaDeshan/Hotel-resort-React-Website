import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("div", { className: "search-room-container", children: _jsxs("form", { onSubmit: handleCheckAvailability, className: "horizontal-form", children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { children: "CHECK-IN" }), _jsx("input", { type: "date", value: checkInDate, onChange: (e) => setCheckInDate(e.target.value), required: true })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { children: "CHECK-OUT" }), _jsx("input", { type: "date", value: checkOutDate, onChange: (e) => setCheckOutDate(e.target.value), required: true })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { children: "GUESTS" }), _jsx("input", { type: "number", value: adults, onChange: (e) => setAdults(e.target.value), min: "1", required: true })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { children: "Have a promotion code?" }), _jsx("input", { type: "text", value: promoCode, onChange: (e) => setPromoCode(e.target.value), placeholder: "Enter promo code" })] }), _jsx("button", { type: "submit", className: "check-availability-btn", children: "CHECK AVAILABILITY" })] }) }));
}
export default Checkout;
