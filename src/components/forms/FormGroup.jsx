import PropTypes from "prop-types";

export default function FormGroup({ children, error }) {
  return (
    <div className={`form-group ${error != null ? "error" : ""}`}>
      {children}
      {error != null && <div className="error-message">{error}</div>}
    </div>
  );
}

FormGroup.propTypes = {
  children: PropTypes.any,
  error: PropTypes.any,
};
