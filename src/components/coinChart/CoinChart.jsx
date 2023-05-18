import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";
import moment from "moment";
import { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { RootContext } from "../../layouts/RootLayout";
import ChartButtonGroup from "../buttonGroup/ButtonGroup";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function CoinChart({ coinName, chartData }) {
  const chartDataPrice = chartData.map((value) => value.price);
  const chartDataVolume = chartData.map((value) => value.volume_24h);
  const chartDataMktCap = chartData.map((value) => value.market_cap);

  const [showData, setShowData] = useState(chartDataPrice);
  const { isDarkMode } = useContext(RootContext);

  const chartDataOptions = [
    { name: "Price", value: chartDataPrice },
    { name: "Volume", value: chartDataVolume },
    { name: "Mkt Cap", value: chartDataMktCap },
  ];

  const chartIntervalOptions = [
    { name: "1d", value: "1d" },
    { name: "7d", value: "7d" },
    { name: "30d", value: "30d" },
  ];

  const options = {
    responsive: true,
  };

  const data = {
    labels: chartData.map((value) =>
      moment(value.timestamp).format("MMM Do YY")
    ),
    datasets: [
      {
        label: coinName,
        fill: false,
        data: showData,
        borderColor: "hsl(200, 100%, 50%)",
      },
    ],
  };

  return (
    <Row className="my-5">
      <Col>
        <Row className="my-3">
          <Col>
            <ChartButtonGroup
              data={chartDataOptions}
              type="DATA"
              $isDarkMode={isDarkMode}
              setState={setShowData}
            />
          </Col>
        </Row>
        <Row className="my-3">
          <Col className="my-3">
            <ChartButtonGroup
              data={chartIntervalOptions}
              type="INTERVAL"
              $isDarkMode={isDarkMode}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Line options={options} data={data} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

CoinChart.propTypes = {
  coinName: PropTypes.string,
  chartData: PropTypes.array,
};
