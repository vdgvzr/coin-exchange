import { Breadcrumb } from "react-bootstrap";
import { StyledBreadcrumb } from "./BreadcrumbStyles";
import { useContext } from "react";
import { RootContext } from "../../layouts/RootLayout";

function SiteBreadcrumb() {
  const { isDarkMode } = useContext(RootContext);
  const breadcrumbs = window.location.pathname.split("/").filter((n) => n);

  function formatCrumb(crumb) {
    return crumb.substring(0, crumb.indexOf("-")).toUpperCase();
  }

  return (
    <StyledBreadcrumb className="my-3" isDarkMode={isDarkMode}>
      <Breadcrumb.Item href="/">Cryptocurrencies</Breadcrumb.Item>
      {breadcrumbs.map((crumb, index) => {
        return (
          <Breadcrumb.Item
            key={index}
            active={breadcrumbs.length}
            href={`/${crumb}`}
          >
            {formatCrumb(crumb)}
          </Breadcrumb.Item>
        );
      })}
    </StyledBreadcrumb>
  );
}

export default SiteBreadcrumb;
