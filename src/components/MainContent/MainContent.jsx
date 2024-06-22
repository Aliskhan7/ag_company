"use client";
import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { ShaderGradientCanvas } from "shadergradient";
import Gradient from "../ui/Gradient/Gradient";

const MainContent = () => {
    let a= '3'
    a.l
  return (
    <div className="main-shadow">
      <ShaderGradientCanvas style={{ position: "absolute", height: "100vh" }}>
        <Gradient />
      </ShaderGradientCanvas>
      <Header />
      <Main />
    </div>
  );
};

export default MainContent;
