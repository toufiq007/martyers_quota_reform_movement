import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MartyerDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [martyer, setMartyer] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/api/getMartyer/${id}`)
      .then((res) => res.json())
      .then((data) => setMartyer(data));
  }, []);

  console.log(martyer);

  return (
    <div>
      <h2>Details information</h2>
    </div>
  );
};

export default MartyerDetails;
