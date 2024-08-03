/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

const HomePage = () => {
  const [martyers, setMartyers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/getAllMatryers`)
      .then((res) => res.json())
      .then((data) => setMartyers(data));
  }, []);
  console.log(martyers, "from the home page");
  return (
    <div>
      <h2>homepage</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {martyers?.user &&
          martyers?.user?.length > 0 &&
          martyers?.user?.map((singleUser: any) => (
            <div
              style={{
                background: "pink",
                margin: "10px",
                width: "300px",
                height: "400px",
              }}
            >
              <p>{singleUser?.name}</p>
              <p>{singleUser?.age}</p>
              <img src={`http://localhost:5000/${singleUser?.personalImage}`} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
