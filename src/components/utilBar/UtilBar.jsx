import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { RootContext } from "../../layouts/RootLayout";
import { formatValue, isPositive } from "../../utils/helpers/helpers";
import { GlobalValue } from "./UtilBarStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

export default function UtilBar() {
  const { global, exchanges, isDarkMode, setIsDarkMode } =
    useContext(RootContext);

  const cryptoNumber = formatValue(global?.cryptocurrencies_number);
  const exchangesNumber = formatValue(exchanges?.length);
  const totalMarketCap = formatValue(global?.market_cap_usd);
  const marketCap24hChange = global?.market_cap_change_24h;
  const voume24hr = formatValue(global?.volume_24h_usd);
  const volume24hrChange = global?.volume_24h_change_24h;
  const bitcoinDominance = global?.bitcoin_dominance_percentage;

  const globalValues = [
    {
      name: "Coins",
      value: cryptoNumber,
      change: null,
      type: "COUNT",
    },
    {
      name: "Exchanges",
      value: exchangesNumber,
      change: null,
      type: "COUNT",
    },
    {
      name: "Total Market Cap",
      value: totalMarketCap,
      change: marketCap24hChange,
      type: "CURRENCY_VALUE",
    },
    {
      name: "24hr Volume",
      value: voume24hr,
      change: volume24hrChange,
      type: "CURRENCY_VALUE",
    },
    {
      name: "BTC Dominance",
      value: bitcoinDominance,
      change: null,
      type: "PERCENTAGE",
    },
  ];

  return (
    <Container className="py-3 d-none d-md-block">
      <Row className="align-items-center">
        <Col className="d-flex">
          {global && exchanges ? (
            globalValues.map((globalValue, index) => {
              return (
                <GlobalValue
                  key={index}
                  className="p-2 d-flex"
                  isDarkMode={isDarkMode}
                >
                  <div className="globalvalue_name me-1">
                    {globalValue.name}:
                  </div>
                  <div className="globalvalue_value d-flex">
                    {globalValue.type === "CURRENCY_VALUE" && "$"}
                    {globalValue.value}
                    {globalValue.type === "PERCENTAGE" && "%"}
                    {globalValue.change !== null && (
                      <div
                        className={`globalvalue_change-${
                          isPositive(globalValue.change) ? `red` : `green`
                        } ms-1`}
                      >
                        {globalValue.change}%
                      </div>
                    )}
                  </div>
                </GlobalValue>
              );
            })
          ) : (
            <GlobalValue className="p-2">
              No data to show at this time, please try again later.
            </GlobalValue>
          )}
        </Col>
        <Col md={3} className="d-flex justify-content-end">
          <Button
            className="ms-3"
            onClick={() => setIsDarkMode((d) => !d)}
            variant={isDarkMode ? "light" : "dark"}
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
