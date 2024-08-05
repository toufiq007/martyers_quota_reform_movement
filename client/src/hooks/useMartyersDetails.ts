import { useEffect, useState } from "react";
import { IForm } from "../types/IFormType";

const useMartyersDetails = (id: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [martyer, setMartyer] = useState<IForm>();

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
        setMartyer(data?.user);
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
