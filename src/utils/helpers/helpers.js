function formatValue(value) {
  return value && value.toLocaleString();
}

function isPositive(value) {
  return !Object.is(Math.abs(value), +value);
}

export { formatValue, isPositive };
