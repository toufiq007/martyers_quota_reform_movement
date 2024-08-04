import { useEffect, useState } from "react";

const useMartyers = () => {
  const [martyers, setMartyers] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/api/getAllMatryers`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response is not ok");
        }
        return res.json();
      })
      .then((data) => {
        setMartyers(data);
        setIsSuccess(true);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    isLoading,
    isSuccess,
    isError,
    martyers,
  };
};
export default useMartyers
