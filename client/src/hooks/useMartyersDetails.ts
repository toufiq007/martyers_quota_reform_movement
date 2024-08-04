/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

const useMartyersDetails = (id: any) => {
  console.log(id);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  console.log(id);
  const [martyer, setMartyer] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/api/getMartyer/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setMartyer(data);
        setIsError(false);
        setIsSuccess(false);
      })
      .catch((err) => {
        setIsError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    isLoading,
    isSuccess,
    isError,
    martyer,
  };
};

export default useMartyersDetails;
