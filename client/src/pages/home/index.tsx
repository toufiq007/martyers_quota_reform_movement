/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Card from "../../components/card";
import "./style.css";
import Loader from "../../components/loader";

const HomePage = () => {
  const [martyers, setMartyers] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/api/getAllMatryers`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setMartyers(data);
        setIsSuccess(true);
        setIsError(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  console.log(martyers, "from the home page");
  return (
    <div className="home_page">
      <h1 className="banner_heading">
        List of Martys in the Quota Reform Movement{" "}
      </h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="card_container">
          {martyers?.user &&
            martyers?.user?.length > 0 &&
            martyers?.user?.map((singleUser: any, index: number) => (
              <Card singleUser={singleUser} index={index} />
            ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
