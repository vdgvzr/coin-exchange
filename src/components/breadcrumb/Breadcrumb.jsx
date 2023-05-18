import { StyledBreadcrumb } from "./BreadcrumbStyles";
import { useContext } from "react";
import { RootContext } from "../../layouts/RootLayout";
import { Link } from "react-router-dom";

function SiteBreadcrumb() {
  const { isDarkMode } = useContext(RootContext);
  const breadcrumbs = window.location.pathname.split("/").filter((n) => n);

  function formatCrumb(crumb) {
    if (crumb.includes("-")) {
      return crumb.substring(0, crumb.indexOf("-")).toUpperCase();
    } else {
      return crumb.charAt(0).toUpperCase() + crumb.slice(1);
    }
  }

  return (
    window.location.pathname !== "/" && (
      <StyledBreadcrumb className="my-3" $isDarkMode={isDarkMode}>
        <li className="breadcrumb-item">
          <Link to="/">{import.meta.env.VITE_SITE_NAME}</Link>
        </li>
        {breadcrumbs.map((crumb, index) => {
          return (
            <li className="breadcrumb-item" key={index}>
              <Link to={`/${crumb}`}>{formatCrumb(crumb)}</Link>
            </li>
          );
        })}
      </StyledBreadcrumb>
    )
  );
}

export default SiteBreadcrumb;
