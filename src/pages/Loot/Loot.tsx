import React from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LootList from "./components/LootList/LootList";
import LootSections from "./components/LootSections/LootSections";

const Loot: React.FC = () => {
  return (
    <>
      <Header />
      <LootSections />
      <LootList />
      <Footer />
    </>
  );
};

export default Loot;
