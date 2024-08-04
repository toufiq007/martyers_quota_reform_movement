/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Card from "../../components/card";
import "./style.css";
import Loader from "../../components/loader";
import useMartyers from "../../hooks/useMartyers";

const HomePage = () => {
  const { isLoading, martyers } = useMartyers();
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
