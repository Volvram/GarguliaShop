import React from "react";

import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";

import ServicesList from "./components/ServicesList/ServicesList";

const Services: React.FC = () => {
  return (
    <div>
      <Header />
      <ServicesList />
      <Footer />
    </div>
  );
};

export default Services;
