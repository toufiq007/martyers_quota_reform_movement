const RandomSpans = () => {
  const numberOfSpans = 10; // Number of spans you want to create
  const divStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    border: "1px solid #000",
    overflow: "hidden",
  };

  // Function to generate random position and styles
  const getRandomStyle = () => {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFBD33"];
    const fontSizes = ["14px", "16px", "18px", "20px", "22px"];
    const left = Math.random() * 90 + "%"; // 90% to ensure span stays within the div
    const top = Math.random() * 90 + "%";
    const backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    const fontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];

    return {
      position: "absolute",
      left,
      top,
      backgroundColor,
      fontSize,
      padding: "5px",
      borderRadius: "5px",
    };
  };

  return (
    <>
      <div style={divStyle}>
        {Array.from({ length: numberOfSpans }).map((_, index) => (
          <span key={index} style={getRandomStyle()}>
            Random Span {index + 1}
          </span>
        ))}
      </div>
    </>
  );
};

export default RandomSpans;
