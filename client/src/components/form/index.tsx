import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

type IForm = {
  name: string;
  age: number;
  address: string;
  birthOfDate: string;
  died: string;
  institution: string;
  causeOfDeath: string;
  history: History;
  personalImage: string;
};

const CustomForm = () => {
  const { register, handleSubmit, reset } = useForm<IForm>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    console.log(data);
    const formData = new FormData();

    // append text files
    formData.append("name", data.name);
    formData.append("age", data.age.toString());
    formData.append("address", data.address);
    formData.append("birthOfDate", data.birthOfDate);
    formData.append("died", data.died);
    formData.append("institution", data.institution);
    formData.append("causeOfDeath", data.causeOfDeath);
    formData.append("history", data.history);

    // append image files
    if (data.personalImage && data.personalImage.length > 0) {
      formData.append("personalImage", data.personalImage[0]);
    }
    try {
      const response = await fetch("http://localhost:5000/api/addNewMatryers", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setIsLoading(false);
        setIsSuccess(true);
        reset();
      }

      const result = await response.json();

      console.log(result);
    } catch (error) {
      console.error("Error submitting form data:", error);
      setIsLoading(false);
      setIsSuccess(false);
      setIsError(true);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "80%",
        margin: "0 auto",
      }}
      encType="multipart/form-data"
    >
      <TextField
        label="Name"
        variant="outlined"
        {...register("name")}
        size="small"
        fullWidth
      />
      <TextField
        variant="outlined"
        type="file"
        {...register("personalImage")}
        size="small"
        fullWidth
      />
      <TextField
        label="Age"
        type="number"
        variant="outlined"
        {...register("age")}
        size="small"
        fullWidth
      />

      <TextField
        label="Address"
        variant="outlined"
        {...register("address")}
        size="small"
        fullWidth
      />

      <TextField
        label="Institution"
        variant="outlined"
        {...register("institution")}
        size="small"
        fullWidth
      />

      <TextField
        label="Date of birth"
        variant="outlined"
        {...register("birthOfDate")}
        size="small"
        fullWidth
      />

      <TextField
        label="Date of death"
        variant="outlined"
        {...register("died")}
        size="small"
        fullWidth
      />

      <TextField
        label="Cause Of Death"
        variant="outlined"
        {...register("causeOfDeath")}
        size="small"
        fullWidth
      />

      <TextField
        label="History"
        variant="outlined"
        multiline
        rows={4}
        placeholder="enter your history"
        {...register("history")}
        size="small"
        fullWidth
      />

      <Button variant="contained" type="submit">
        {isLoading ? "loading..." : "Submit"}
      </Button>
    </Box>
  );
};

export default CustomForm;
