import axios from "axios";
import { useLoaderData } from "react-router-dom";
import SiteBreadcrumb from "../../components/breadCrumb/Breadcrumb";

function CoinPage() {
  const { getCoin } = useLoaderData();

  return (
    <>
      <SiteBreadcrumb />
      <div>{getCoin.name}</div>
    </>
  );
}

async function loader({ params, request: { signal } }) {
  const getCoin = await axios
    .get(`https://api.coinpaprika.com/v1/tickers/${params.coinId}`, { signal })
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    });

  return { getCoin };
}

export const coinRoute = {
  loader,
  element: <CoinPage />,
};
