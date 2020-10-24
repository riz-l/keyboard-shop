// Import: Dependencies
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// Import: Screens
import { HomeScreen, ProductScreen } from "./screens";

// Import: Components
import { Header, Footer } from "./components";

// Component: App
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
