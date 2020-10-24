// Import: Dependencies
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

// Import: Components
import Rating from "../Rating/Rating.component";

// Component: Product
export default function Product({ product }) {
  return (
    <Card className="my-3 pd-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">£{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}
