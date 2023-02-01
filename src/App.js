import React, { Fragment } from "react";
import { Container, Navbar } from "react-bootstrap";
import "./App.css";

const productsArr = [
  {
    id: "1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const App = () => {
  return (
    <Fragment>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/">E-Commerce Site</Navbar.Brand>
        </Container>
      </Navbar>
      {productsArr.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.title} />
            <h2>{product.title}</h2>
            <span>$<span>{product.price}</span></span>
          </div>
        ))};
    </Fragment>
  );
};

export default App;
