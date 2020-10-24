// Import: Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

// Import: Components
import { Product } from "../../components";

// Screen: HomeScreen
export default function HomeScreen() {
  // State = products
  const [products, setProducts] = useState([]);

  // On load, fetches API products data from backend and sets to state
  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("/api/products");

      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}
