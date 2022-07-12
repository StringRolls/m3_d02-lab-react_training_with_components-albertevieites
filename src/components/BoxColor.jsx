const BoxColor = ({ r, g, b }) => {
  const divColor = {
    backgroundColor: `rgb(${r},${g},${b})`,
  };

  const hexColor = (r, g, b) =>
    `#${r.toString(2)}${g.toString(2)}${b.toString(2)}`;

  return (
    <div style={divColor} className="colorBox">
      <p>
        rgb({r},{g},{b})
      </p>
      <p>{hexColor(r, g, b)}</p>
    </div>
  );
};

export default BoxColor;
