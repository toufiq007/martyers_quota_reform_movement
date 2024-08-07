import Card from "../../components/card";
import "./style.css";
import Loader from "../../components/loader";
import useMartyers from "../../hooks/useMartyers";
import { IForm } from "../../types/IFormType";

const HomePage = () => {
  const { isLoading, martyers } = useMartyers();
  return (
    <div className="home_page">
      <h1 className="banner_heading">
        List of Martys in the Quota Reform Movement{" "}
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
