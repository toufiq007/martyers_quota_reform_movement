/* eslint-disable @typescript-eslint/no-explicit-any */
import "./style.css"

const Card = ({ singleUser, index }: any) => {
  return (
    <div
    className="martyers_card"
      key={index}
    >
      <img
        src={`${singleUser?.personalImage}`}
      />
      <p className="martyers_name">{singleUser?.name}</p>
      <p className="martyers_institution">{singleUser?.institution}</p>
      <span className="martyers_died">18th July, 2024</span>
    </div>
  );
};

export default Card;
