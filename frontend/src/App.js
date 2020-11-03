// Import: Dependencies
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// Import: Screens
import { CartScreen, HomeScreen, LoginScreen, ProductScreen } from "./screens";

// Import: Components
import { Header, Footer } from "./components";

// Component: App
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" component={LoginScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route exact path="/" component={HomeScreen} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
