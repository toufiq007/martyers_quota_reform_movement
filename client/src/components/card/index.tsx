import { useNavigate } from "react-router-dom";
import "./style.css";
import { IForm } from "../../types/IFormType";

type ICard = {
  singleUser: IForm;
  index: number;
};

const Card = ({ singleUser, index }: ICard) => {
  const navigate = useNavigate();
  const handleMartyerDetails = (id: string) => {
    navigate(`/martyer/${id}`);
  };
  return (
    <div
      className="martyers_card"
      key={index}
      onClick={() => handleMartyerDetails(singleUser?._id)}
    >
      <img src={`${singleUser?.personalImage}`} />
      <p className="martyers_name">{singleUser?.name}</p>
      <p className="martyers_institution">{singleUser?.institution}</p>
      <span className="martyers_died">18th July, 2024</span>
    </div>
  );
};

export default Card;
