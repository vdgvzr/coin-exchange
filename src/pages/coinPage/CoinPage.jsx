import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { formatValue } from "../../utils/helpers/helpers";
import { Image } from "react-bootstrap";
import { getApi } from "../../api/api";
import { StyledCoinPage, StyledListGroup } from "./CoinPageStyles";
import { useContext } from "react";
import { RootContext } from "../../layouts/RootLayout";
import { isPositive } from "../../utils/helpers/helpers";
import PropTypes from "prop-types";
import CoinChart from "../../components/coinChart/CoinChart";
import Heading from "../../components/heading/Heading";
import moment from "moment";

function CoinPage() {
  const { coin, ticker, chartData } = useLoaderData();
  const { isDarkMode } = useContext(RootContext);

  const marketCap = formatValue(ticker?.quotes.USD.market_cap);
  const dailyTradeVolume = formatValue(ticker?.quotes.USD.volume_24h);
  const fdv =
    ticker?.max_supply !== 0
      ? formatValue(ticker?.quotes.USD.price * ticker?.max_supply)
      : formatValue(ticker?.quotes.USD.price * ticker?.total_supply);
  const circulatingSupply = formatValue(ticker?.circulating_supply);
  const totalSupply = formatValue(ticker?.total_supply);
  const maxSupply =
    ticker?.max_supply !== 0 ? formatValue(ticker?.max_supply) : "∞";

  const coinInfo = [
    {
      title: "Market Cap",
      value: marketCap,
      currency: true,
      middle: false,
    },
    {
      title: "Circulating Supply",
      value: circulatingSupply,
      currency: false,
      middle: false,
    },
    {
      title: "24hr Trading Volume",
      value: dailyTradeVolume,
      currency: true,
      middle: true,
    },
    {
      title: "Total Supply",
      value: totalSupply,
      currency: false,
      middle: true,
    },
    {
      title: "Fully Diluted Valuation",
      value: fdv,
      currency: true,
      middle: false,
    },

    {
      title: "Max Supply",
      value: maxSupply,
      currency: false,
      middle: false,
    },
  ];

  return (
    <StyledCoinPage isDarkMode={isDarkMode}>
      <Col md={9}>
        <Row>
          <Col>
            <div className="coinpage_rank">
              <Button variant={isDarkMode ? "light" : "dark"} disabled>
                Rank #{ticker?.rank}
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="coinpage_name">
              <Image src={coin?.logo} />
              <span className="coinpage_name_name">{ticker?.name}</span>{" "}
              <small className="coinpage_name_ticker?">{ticker?.symbol}</small>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <div className="coinpage_price">
              <span className="coinpage_price_price">
                ${formatValue(ticker?.quotes.USD.price)}
              </span>{" "}
              <span
                className={`coinpage_price_change_${
                  !isPositive(ticker?.quotes.USD.percent_change_24h)
                    ? "green"
                    : "red"
                }`}
              >
                {ticker?.quotes.USD.percent_change_24h}%
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          {coinInfo.map((info, index) => {
            return (
              <Col key={index} md={6}>
                <CoinInfo {...info} />
              </Col>
            );
          })}
        </Row>
      </Col>
      <Col md={3}>
        <StyledListGroup isDarkMode={isDarkMode} className="mt-4 mt-md-0">
          <ListGroup.Item>
            <small>Status: {coin.development_status}</small>
          </ListGroup.Item>
          <ListGroup.Item>
            <small>Wallet?: {coin.hardware_wallet ? "Yes" : "No"}</small>
          </ListGroup.Item>
          <ListGroup.Item>
            <small>Hash: {coin.hash_algorithm}</small>
          </ListGroup.Item>
          <ListGroup.Item>
            <small>Structure: {coin.org_structure}</small>
          </ListGroup.Item>
          <ListGroup.Item>
            <small>Proof Type: {coin.proof_type}</small>
          </ListGroup.Item>
          <ListGroup.Item>
            <small>Type: {coin.type}</small>
          </ListGroup.Item>
          <ListGroup.Item>
            <small>
              <Image
                src={coin.whitepaper.thumbnal}
                alt={coin.whitepaper.thumbnal}
                fluid
              />
              <Link to={coin.whitepaper.link} target="_blank" rel="noreferrer">
                Whitepaper
              </Link>
            </small>
          </ListGroup.Item>
        </StyledListGroup>
      </Col>
      <Row className="mt-5">
        <Col>
          <Heading headingSize={3} headingText="Details" />
          <p>{coin?.description}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <CoinChart coinName={ticker?.name} chartData={chartData} />
        </Col>
      </Row>
    </StyledCoinPage>
  );
}

function CoinInfo({ title, value, currency, middle }) {
  return (
    <Col
      className={`d-flex justify-content-between coinpage_coininfo py-1 border-md-0 border border-top-0 border-start-0 border-end-0 ${
        middle && `border-md border-md-start-0 border-md-end-0 `
      }`}
    >
      <div>{title}</div>{" "}
      <div className="coinpage_coininfo_value">
        {currency && "$"}
        {value}
      </div>
    </Col>
  );
}

CoinInfo.propTypes = {
  title: PropTypes.string,
  value: PropTypes.any,
  currency: PropTypes.bool,
  middle: PropTypes.bool,
};

async function loader({ params, request: { signal, url } }) {
  const searchParams = new URL(url).searchParams;
  const interval = searchParams.get("interval");
  const date = new Date();
  const momentString = moment(date).subtract(364, "days").calendar();
  const formatDate = momentString.split("/");
  formatDate.unshift(formatDate.pop());
  const startDate = formatDate.join("-");

  const getCoin = getApi({
    url: `coins/${params.coinId}`,
    options: { signal },
  });

  const getTicker = getApi({
    url: `tickers/${params.coinId}`,
    options: { signal },
  });

  const getChartData = getApi({
    url: `tickers/${params.coinId}/historical?start=${startDate}&interval=${
      interval ? interval : "1d"
    }`,
    options: { signal },
  });

  return {
    coin: await getCoin,
    ticker: await getTicker,
    chartData: await getChartData,
  };
}

export const coinRoute = {
  loader,
  element: <CoinPage />,
};
