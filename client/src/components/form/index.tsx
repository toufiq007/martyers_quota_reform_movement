/* eslint-disable @typescript-eslint/no-explicit-any */

import { TextField, Button, Box } from "@mui/material";
import { useForm } from "react-hook-form";

type IForm = {
  name: string;
  age: number;
  address: string;
  birthOfDate: string;
  deathOfDate: string;
  institution: string;
  causeOfDeath: string;
  history: History;
  personalImage: string;
};

const CustomForm = () => {
  const { register, handleSubmit } = useForm<IForm>();

  const onSubmit = async (data: any) => {
    console.log(data);
    const formData = new FormData();
    // append text files
    formData.append("name", data.name);
    formData.append("age", data.age.toString());
    formData.append("address", data.address);
    formData.append("birthOfDate", data.birthOfDate);
    formData.append("deathOfDate", data.deathOfDate);
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

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error submitting form data:", error);
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
        {...register("deathOfDate")}
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
        Submit
      </Button>
    </Box>
  );
};

export default CustomForm;
