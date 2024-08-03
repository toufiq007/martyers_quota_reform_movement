import "./style.css";
const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:"#F4F4F4"
      }}
      className="loader_container"
    >
      <img
        className="loader"
        style={{ objectFit:"cover" }}
        src="https://cdn.dribbble.com/users/4358240/screenshots/14660462/media/45a8935c98e3afdb215e9df9313467dd.gif"
        alt=""
      />
    </div>
  );
};

export default Loader;
