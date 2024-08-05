import { useState } from "react";

const useUpdateMartyers = (id: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const postUpdateMartyers = async (formData: any) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/updateMartyer/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error("Network response is not ok");
      }

      const result = await response.json();
      console.log(result);

      setIsLoading(false);
      setIsSuccess(true);
      setIsError(false);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      setIsSuccess(false);
      console.log(err);
    }
  };

  return {
    isLoading,
    isSuccess,
    isError,
    setIsLoading,
    postUpdateMartyers,
  };
};

export default useUpdateMartyers;
