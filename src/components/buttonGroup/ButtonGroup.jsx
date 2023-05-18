import { ButtonGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { ChartButton } from "./ButtonGroupStyles";

export default function ChartButtonGroup({
  data,
  isDarkMode,
  setState = false,
  type,
}) {
  return (
    <ButtonGroup>
      {data.map((option, index) => {
        return (
          <ChartButton
            $isDarkMode={isDarkMode}
            key={index}
            variant={isDarkMode ? "light" : "dark"}
            onClick={() => type === "DATA" && setState(option.value)}
            href={type === "INTERVAL" && `?interval=${option.value}`}
          >
            {option.name}
          </ChartButton>
        );
      })}
    </ButtonGroup>
  );
}

ChartButtonGroup.propTypes = {
  data: PropTypes.array,
  isDarkMode: PropTypes.bool,
  setState: PropTypes.func,
  type: PropTypes.string,
};
