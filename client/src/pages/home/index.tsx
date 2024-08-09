import Card from "../../components/card";
import "./style.css";
import Loader from "../../components/loader";
import useMartyers from "../../hooks/useMartyers";
import { IForm } from "../../types/IFormType";
import { Button } from "@mui/material";
import RandomSpans from "../../components/randomSpan";

const martyerNote = [
  {
    id: 1,
    note: "Bravers",
  },

  {
    id: 2,
    note: "National Hero",
  },
];

const HomePage = () => {
  const { isLoading, martyers } = useMartyers();
  return (
    <div className="home_page">
      <h1>Are you want to write some note about our martyer?</h1>
      <div
        className="banner_container"
        style={{
          background: "#ededed",
          width: "90%",
          height: "500px",
          margin: "20px auto",
        }}
      >
        <RandomSpans />
      </div>
      <Button variant="contained">Write Note</Button>
      <h1 className="banner_heading">
        List of Martys in the Quota Reform Movement
      </h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="card_container">
          {martyers &&
            martyers?.length > 0 &&
            martyers?.map((singleUser: IForm, index: number) => (
              <Card singleUser={singleUser} index={index} />
            ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
