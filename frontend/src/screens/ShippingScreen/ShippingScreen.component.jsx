// Import: Dependencies
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// Import: Components
import { FormContainer } from "../../components";

// Screen: ShippingScreen
export default function ShippingScreen({ history }) {
  // State = address, city, postCode, country
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [country, setCountry] = useState("");

  return (
    <FormContainer>
      <h1>Shipping</h1>
    </FormContainer>
  );
}
