import Coin from "../coin/Coin";
import PropTypes from "prop-types";
import { RootContext } from "../../layouts/RootLayout";
import { useContext, useEffect, useRef, useState } from "react";
import { StyledTable } from "./CoinTableStyles";
import useTable from "../../utils/customHooks/useTable";
import CoinPagination from "../coinPagination/CoinPagination";
import Heading from "../heading/Heading";
import { Col, Form, FormLabel, FormSelect, Row } from "react-bootstrap";
import FormGroup from "../forms/FormGroup";
import { Form as DomForm } from "react-router-dom";

export default function CoinTable({ coins, rowsPerPage, setRowsPerPage }) {
  const { isDarkMode, searchQuery, setSearchQuery } = useContext(RootContext);
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(coins, page, rowsPerPage);

  const queryRef = useRef();

  useEffect(() => {
    if (queryRef.current.value === "") {
      queryRef.current.value = searchQuery;
    }
  });

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
        </Row>
        <Row>
          <Col md={6}>
            <DomForm>
              <FormLabel htmlFor="search-table">Search Coins</FormLabel>
              <Form.Control
                id="search-table"
                type="search"
                className="me-2"
                name="query"
                onChange={(e) => setSearchQuery(e.target.value)}
                ref={queryRef}
              />
            </DomForm>
          </Col>
          <Col md={6}>
            <Form>
              <FormGroup>
                <FormLabel htmlFor="row-display">Rows Per Page</FormLabel>
                <FormSelect
                  id="row-display"
                  onChange={(e) => setRowsPerPage(e.target.value)}
                >
                  <option value="10">10</option>
                  <option value="50">50</option>
                  <option value="100" selected>
                    100
                  </option>
                  <option value={coins?.length}>All</option>
                </FormSelect>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row className="my-3">
          {searchQuery && <Col>{coins.length} results</Col>}
        </Row>
        <Row>
          <Col>
            {coins ? (
              <StyledTable isDarkMode={isDarkMode} responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>1h</th>
                    <th>24h</th>
                    <th>7d</th>
                    <th>Mkt Cap</th>
                  </tr>
                </thead>
                <tbody>
                  {slice.map((coin) => {
                    return <Coin key={coin.id} {...coin} />;
                  })}
                </tbody>
              </StyledTable>
            ) : (
              <Heading
                headingText="No data to show at this time, please try again later."
                headingSize={6}
              />
            )}
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
