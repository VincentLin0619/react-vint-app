import React from "react";
import MainMenu from "../components/NavBar/MainMenu";
import SubMenu from "../components/NavBar/SubMenu";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <MainMenu />
      <SubMenu />
    </div>
  );
};

export default Home;
