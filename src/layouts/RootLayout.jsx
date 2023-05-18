import {
  Outlet,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { getApi } from "../../src/api/api";
import Navigation from "../components/navigation/Navigation";
import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Root } from "./RootLayoutStyles";
import { useLocalStorage } from "../utils/customHooks/useLocalStorage";
import UtilBar from "../components/utilBar/UtilBar";
import SiteBreadcrumb from "../components/breadcrumb/Breadcrumb";

export const RootContext = React.createContext(null);

function RootLayout() {
  // Get loader data
  const { getGlobal, getCoins, getExchanges } = useLoaderData();
  const { state } = useNavigation();

  // Component state
  const [global, setGlobal] = useState(getGlobal);
  const [coins, setCoins] = useState(getCoins);
  const [exchanges, setExchanges] = useState(getExchanges);
  const [showBalance, setShowBalance] = useLocalStorage("SHOW_BALANCE", false);
  const [isDarkMode, setIsDarkMode] = useLocalStorage("IS_DARK_MODE", false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setCoins(
      getCoins.filter((coin) =>
        coin.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, getCoins]);

  useEffect(() => {
    setGlobal(getGlobal);
    setCoins(getCoins);
    setExchanges(getExchanges);

    const interval = setInterval(() => {
      setCoins(getCoins);
    }, 300000);

    return () => {
      clearInterval(interval);
    };
  }, [getGlobal, getCoins, getExchanges]);

  return (
    <RootContext.Provider
      value={{
        global: global,
        coins: coins,
        exchanges: exchanges,
        isDarkMode: isDarkMode,
        setIsDarkMode: setIsDarkMode,
        showBalance: showBalance,
        setShowBalance: setShowBalance,
        searchQuery: searchQuery,
        setSearchQuery: setSearchQuery,
      }}
    >
      <Root isDarkMode={isDarkMode}>
        <UtilBar />
        <Navigation />
        <ScrollRestoration />
        {state === "loading" && <div className="loading-spinner"></div>}
        <Container className={`${state === "loading" ? "loading" : null}`}>
          <SiteBreadcrumb />
          <Outlet />
        </Container>
      </Root>
    </RootContext.Provider>
  );
}

async function loader({ request: { signal } }) {
  const getGlobal = getApi({
    url: "global",
    options: { signal },
  });

  const getCoins = getApi({
    url: "tickers",
    options: { signal },
  });

  const getExchanges = getApi({
    url: "exchanges",
    options: { signal },
  });

  return {
    getGlobal: await getGlobal,
    getCoins: await getCoins,
    getExchanges: await getExchanges,
  };
}

export const rootRoute = {
  loader,
  element: <RootLayout />,
};
