import React from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LootList from "./components/LootList/LootList";

const Loot: React.FC = () => {
  return (
    <>
      <Header />
      <LootList />
      <Footer />
    </>
  );
};

export default Loot;
