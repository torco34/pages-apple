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
import { PageIconMac } from "../pages/PageIconMac";

import { Header } from "../components/Header";
import NotFound from "../pages/NotFound";
import { ModeloM1 } from "../components/ModeloM1";

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
        <Route path="/airMac" element={<PageIconMac />}></Route>
        <Route path="/modelo" element={<ModeloM1 />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
