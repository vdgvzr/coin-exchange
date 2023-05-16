import Coin from "../coin/Coin";
import PropTypes from "prop-types";
import { RootContext } from "../../layouts/RootLayout";
import { useContext, useEffect, useState } from "react";
import { StyledTable } from "./CoinTableStyles";
import useTable from "../../utils/customHooks/useTable";
import CoinPagination from "../coinPagination/CoinPagination";
import Heading from "../heading/Heading";
import { Col, Form, FormLabel, FormSelect, Row } from "react-bootstrap";
import FormGroup from "../forms/FormGroup";

export default function CoinTable({ coins, rowsPerPage, setRowsPerPage }) {
  const { isDarkMode } = useContext(RootContext);
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(coins, page, rowsPerPage);

  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  return (
    <Row className="my-5">
      <Col>
        <Row>
          <Col>
            <Heading headingText="Cryptocurrency Prices" headingSize={1} />
          </Col>
          <Col md={2}>
            <Form>
              <FormGroup>
                <FormLabel htmlFor="display" className="me-3">
                  Rows Per Page
                </FormLabel>
                <FormSelect onChange={(e) => setRowsPerPage(e.target.value)}>
                  <option value="10">10</option>
                  <option value="50">50</option>
                  <option value="100" selected>
                    100
                  </option>
                  <option value={coins.length}>All</option>
                </FormSelect>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <StyledTable isDarkMode={isDarkMode}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Coin</th>
                  <th>Price</th>
                  <th>Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {slice.map((coin) => {
                  return <Coin key={coin.id} {...coin} />;
                })}
              </tbody>
            </StyledTable>
            <CoinPagination range={range} setPage={setPage} page={page} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

CoinTable.propTypes = {
  coins: PropTypes.any,
  isDarkMode: PropTypes.bool,
  handleRefresh: PropTypes.func,
  rowsPerPage: PropTypes.any,
  setRowsPerPage: PropTypes.func,
};
