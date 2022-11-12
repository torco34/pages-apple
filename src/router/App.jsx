import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MacPages } from "../pages/MacPages";
import { IpadPage } from "../pages/IpadPage";
import { TvCasaPage } from "../pages/TvCasaPage";
import { SoloApplePage } from "../pages/SoloApplePage";
import { SoportePage } from "../pages/SoportePage";
import { DondeComPage } from "../pages/DondeComPage";
import { WatchPage } from "../pages/WatchPage";
import { AirPudsPage } from "../pages/AirPudsPage";
import { IphonPage } from "../pages/IphonPage";

import { Header } from "../components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<MacPages />}></Route>
        <Route path="/ipad" element={<IpadPage />}></Route>
        <Route path="/iphon" element={<IphonPage />}></Route>
        <Route path="/reloj" element={<WatchPage />}></Route>
        <Route path="/audi" element={<AirPudsPage />}></Route>
        <Route path="/tv" element={<TvCasaPage />}></Route>
        <Route path="/solo" element={<SoloApplePage />}></Route>
        <Route path="/sopo" element={<SoportePage />}></Route>
        <Route path="/donde" element={<DondeComPage />}></Route>

        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </Router>
  );
}

export default App;
