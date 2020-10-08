import React, { useState } from "react";

import HousingDetail from "./HousingDetail";
import HousingList from "./HousingList";

const Navigator = () => {
  const [navigation, setNavigation] = useState({
    currentScreen: "list",
    screenParams: {},
  });

  const handleScreenChange = (page, params) => {
    setNavigation({
      currentScreen: page,
      screenParams: params,
    });
  };

  return (
    <>
      {navigation.currentScreen === "list" ? (
        <HousingList
          onScreenChange={handleScreenChange}
          params={navigation.screenParams}
        />
      ) : navigation.currentScreen === "detail" ? (
        <HousingDetail
          onScreenChange={handleScreenChange}
          params={navigation.screenParams}
        />
      ) : null}
    </>
  );
};

export default Navigator;
