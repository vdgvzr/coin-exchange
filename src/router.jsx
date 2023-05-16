import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/errorPage/ErrorPage";
import { rootRoute } from "./layouts/RootLayout";
import { homeRoute } from "./pages/home/Home";
import { coinRoute } from "./pages/coinPage/CoinPage";
import { Container } from "react-bootstrap";

export const PAGES = [];

export const router = createBrowserRouter([
  {
    path: "/",
    ...rootRoute,
    errorElement: (
      <Container className="my-5">
        <ErrorPage />
      </Container>
    ),
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            children: [
              { index: true, ...homeRoute },
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
