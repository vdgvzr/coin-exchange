import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { RootContext } from "../../layouts/RootLayout";
import { formatValue } from "../../utils/helpers/helpers";
import { GlobalValue } from "./UtilBarStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

export default function UtilBar() {
  const { global, exchanges, isDarkMode, setIsDarkMode } =
    useContext(RootContext);

  return (
    <Container className="py-3">
      <Row className="align-items-center">
        <Col className="d-flex">
          <GlobalValue className="p-2 d-flex" isDarkMode={isDarkMode}>
            <div className="globalvalue_name me-1">Coins:</div>{" "}
            <div className="globalvalue_value">
              {formatValue(global.cryptocurrencies_number)}
            </div>
          </GlobalValue>
          <GlobalValue className="p-2 d-flex" isDarkMode={isDarkMode}>
            <div className="globalvalue_name me-1">Echanges:</div>{" "}
            <div className="globalvalue_value">
              {formatValue(exchanges.length)}
            </div>
          </GlobalValue>
          <GlobalValue className="p-2 d-flex" isDarkMode={isDarkMode}>
            <div className="globalvalue_name me-1">Total Market Cap:</div>
            <div className="globalvalue_value d-flex">
              ${formatValue(global.market_cap_usd)}{" "}
              <div
                className={`globalvalue_change-${
                  global.volume_24h_change_24h < 0 ? `red` : `green`
                } ms-1`}
              >
                {global.market_cap_change_24h}
              </div>
            </div>
          </GlobalValue>
          <GlobalValue className="p-2 d-flex" isDarkMode={isDarkMode}>
            <div className="globalvalue_name me-1">24hr Volume:</div>
            <div className="globalvalue_value d-flex">
              ${formatValue(global.volume_24h_usd)}{" "}
              <div
                className={`globalvalue_change-${
                  global.volume_24h_change_24h < 0 ? `red` : `green`
                } ms-1`}
              >
                {global.volume_24h_change_24h}
              </div>
            </div>
          </GlobalValue>
          <GlobalValue className="p-2 d-flex" isDarkMode={isDarkMode}>
            <div className="globalvalue_name me-1">BTC Dominance:</div>
            <div className="globalvalue_value d-flex">
              {formatValue(global.bitcoin_dominance_percentage)}%
            </div>
          </GlobalValue>
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
