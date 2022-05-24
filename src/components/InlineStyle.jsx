export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justfyContent: "space-around",
    alignItems: "center",
  };
  const titleStyle = {};
  const buttonStyle = {};
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Style -</p>
      <button style={buttonStyle}>FIGHT!</button>
    </div>
  );
};