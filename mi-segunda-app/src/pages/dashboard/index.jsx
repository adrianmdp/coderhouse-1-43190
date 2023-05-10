import { useState } from "react";
import { Cards, Footer, Header } from "../../components";

const Dashboard = () => {
  return (
    <>
      <Header />
      <h1>Dashboard</h1>

      <Cards />
      <Footer />
    </>
  );
};

export { Dashboard };
