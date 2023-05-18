import { Navigate, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/errorPage/ErrorPage";
import { rootRoute } from "./layouts/RootLayout";
import { cryptoRoute } from "./pages/crypto/Crypto";
import { coinRoute } from "./pages/coinPage/CoinPage";

export const PAGES = [
  { name: "Crypto", url: "crypto" },
  { name: "Exchanges", url: "exchanges" },
];

export const router = createBrowserRouter([
  {
    path: "/",
    ...rootRoute,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/" /> },
          {
            path: "/crypto",
            children: [
              { index: true, ...cryptoRoute },
              {
                path: ":coinId",
                children: [{ index: true, ...coinRoute }],
              },
            ],
          },
        ],
      },
    ],
  },
]);
