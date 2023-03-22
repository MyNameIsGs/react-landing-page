import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./cards.jsx";
import Footer from "./footer.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <div className="row justify-content-center">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
