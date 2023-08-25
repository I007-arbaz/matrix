import Main from "./Main";
import SideMenu from "./SideMenu";
import "./App.css";
import TokenAddress from "./TokenAddress";
import PairAddress from "./PairAddress";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
let Lander = () => {

  return (
    <>
      <div className="lander-page">
        <SideMenu />
        
        <Routes>
          <Route path="/" element={<TokenAddress />} />
          <Route path="/pairaddress" element={<PairAddress />} />
        </Routes>
      </div>
    </>
  );
};
export default Lander;
