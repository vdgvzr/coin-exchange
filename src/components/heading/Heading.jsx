import { useContext } from "react";
import { RootContext } from "../../layouts/RootLayout";
import { H1, H2, H3, H4, H5, H6 } from "./HeadingStyles";
import PropTypes from "prop-types";

export default function Heading({ headingText, headingSize }) {
  const { isDarkMode } = useContext(RootContext);

  switch (headingSize) {
    case 1:
      return (
        <H1 className="mb-3" isDarkMode={isDarkMode}>
          {headingText}
        </H1>
      );
    case 2:
      return (
        <H2 className="mb-3" isDarkMode={isDarkMode}>
          {headingText}
        </H2>
      );
    case 3:
      return (
        <H3 className="mb-3" isDarkMode={isDarkMode}>
          {headingText}
        </H3>
      );
    case 4:
      return (
        <H4 className="mb-3" isDarkMode={isDarkMode}>
          {headingText}
        </H4>
      );
    case 5:
      return (
        <H5 className="mb-3" isDarkMode={isDarkMode}>
          {headingText}
        </H5>
      );
    case 6:
      return (
        <H6 className="mb-3" isDarkMode={isDarkMode}>
          {headingText}
        </H6>
      );
  }
}

Heading.propTypes = {
  headingText: PropTypes.string.isRequired,
  headingSize: PropTypes.number.isRequired,
};
