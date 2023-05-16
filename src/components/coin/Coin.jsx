import PropTypes from "prop-types";
import { Tr, Td } from "./CoinStyles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RootContext } from "../../layouts/RootLayout";
import { formatValue } from "../../utils/helpers/helpers";

export default function Coin({
  id,
  rank,
  name,
  symbol,
  quotes,
  circulating_supply,
}) {
  const { isDarkMode } = useContext(RootContext);

  return (
    <Tr isDarkMode={isDarkMode}>
      <Td>{rank}</Td>
      <Td style={{ textAlign: "start" }}>
        <Link
          className={`link-${
            isDarkMode ? `light` : `dark`
          } text-decoration-none`}
          to={`${id}`}
        >
          <span className="fw-bold me-2">{name}</span>{" "}
          <small className="fw-ligh">{symbol}</small>
        </Link>
      </Td>
      <Td>${formatValue(quotes.USD.price)}</Td>
      <Td>${formatValue(circulating_supply * quotes.USD.price)}</Td>
    </Tr>
  );
}

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  quotes: PropTypes.object.isRequired,
  circulating_supply: PropTypes.number.isRequired,
};
