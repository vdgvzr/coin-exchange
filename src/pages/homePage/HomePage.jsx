import { useContext } from "react";
import { formatValue } from "../../utils/helpers/helpers";
import { RootContext } from "../../layouts/RootLayout";
import { Button, Col, Row } from "react-bootstrap";
import Heading from "../../components/heading/Heading";
import {
  StyledHomePage,
  CoinImageContainer,
  CoinImage,
} from "./HomePageStyles";
import { Link } from "react-router-dom";

function HomePage() {
  const { global, coins, isDarkMode } = useContext(RootContext);
  const totalMarketCap = formatValue(global?.market_cap_usd);

  return (
    <Row>
      <CoinImageContainer>
        {coins.slice(0, 10).map((coin) => {
          console.log(coin);
          return (
            <CoinImage
              key={coin.id}
              src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
              roundedCircle
              fluid
              isDarkMode={isDarkMode}
              width={
                parseInt(coin.quotes.USD.market_cap.toString().slice(0, 2)) * 5
              }
              top={Math.floor(Math.random() * 100)}
              left={Math.floor(Math.random() * 100)}
              absolute={true}
            />
          );
        })}
      </CoinImageContainer>
      <StyledHomePage
        isDarkMode={isDarkMode}
        className="justify-content-between w-100"
      >
        <Col sm={3}>
          <Heading
            headingText={`The world owns $${totalMarketCap} worth of Crypto`}
            headingSize={1}
          />
        </Col>
        <Col className="d-flex justify-content-end align-items-end" sm={3}>
          <Link to="crypto">
            <Button variant={isDarkMode ? "light" : "dark"}>Interested?</Button>
          </Link>
        </Col>
      </StyledHomePage>
    </Row>
  );
}

export const homePageRoute = {
  element: <HomePage />,
};
