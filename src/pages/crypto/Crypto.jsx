import CoinTable from "../../components/coinTable/CoinTable";
import { useContext, useState } from "react";
import { RootContext } from "../../layouts/RootLayout";

function Crypto() {
  const { coins } = useContext(RootContext);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  return (
    <CoinTable
      coins={coins}
      rowsPerPage={rowsPerPage}
      setRowsPerPage={setRowsPerPage}
    />
  );
}

export const cryptoRoute = { element: <Crypto /> };
