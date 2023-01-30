import React from "react";

import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";

import AnnouncementsList from "./components/AnnouncementsList/AnnouncementsList";

const Announcements: React.FC = () => {
  return (
    <>
      <Header />
      <AnnouncementsList />
      <Footer />
    </>
  );
};

export default Announcements;
