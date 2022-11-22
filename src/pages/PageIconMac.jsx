import React from "react";
import { PageMacBody, ParrafoMacAir } from "../assets/styleds/PageMac";
import { ListaMacAir } from "../components/ListaMacAir";
import { MacBody } from "../components/MacBody";

const PageIconMac = () => {
  return (
    <div className="container">
      <ListaMacAir />
      <PageMacBody>
        <h2 className="text-center">MacBook Air</h2>
      </PageMacBody>
      <div>
        <MacBody />
      </div>
      <ParrafoMacAir>
        <h2 className="text-center">Encuentra el Mac perfecto para ti.</h2>
      </ParrafoMacAir>
    </div>
  );
};

export { PageIconMac };
