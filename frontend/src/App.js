// Import: Dependencies
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// Import: Screens
import {
  CartScreen,
  HomeScreen,
  LoginScreen,
  OrderScreen,
  PaymentScreen,
  PlaceOrderScreen,
  ProductListScreen,
  ProductScreen,
  ProfileScreen,
  RegisterScreen,
  ShippingScreen,
  UserEditScreen,
  UserListScreen,
} from "./screens";

// Import: Components
import { Header, Footer } from "./components";

// Component: App
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/admin/productlist" component={ProductListScreen} />
          <Route exact path="/" component={HomeScreen} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
