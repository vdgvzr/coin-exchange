import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/errorPage/ErrorPage";
import { rootRoute } from "./layouts/RootLayout";
import { cryptoRoute } from "./pages/crypto/Crypto";
import { coinRoute } from "./pages/coinPage/CoinPage";
import { homePageRoute } from "./pages/homePage/HomePage";

export const PAGES = [
  { name: "Crypto", url: "crypto" },
  //{ name: "Exchanges", url: "exchanges" },
];

export const router = createBrowserRouter([
  {
    path: "/",
    ...rootRoute,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, ...homePageRoute },
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
