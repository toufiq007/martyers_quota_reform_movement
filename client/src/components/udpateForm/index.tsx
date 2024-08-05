import { TextField, Button, Box } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useMartyersDetails from "../../hooks/useMartyersDetails";
import { useParams } from "react-router-dom";
import Loader from "../loader";
import useUpdateMartyers from "../../hooks/usePostUpdateMartyers";
import { IForm } from "../../types/IFormType";

const UpdateMartyerForm = () => {
  const { id } = useParams();
  const { martyer, isLoading: isMartyerLoading } = useMartyersDetails(id);
  const {
    postUpdateMartyers,
    setIsLoading,
    isLoading: isUpdateLoading,
  } = useUpdateMartyers(id);
  const { register, handleSubmit, reset } = useForm<IForm>();

  // set data to the default values
  useEffect(() => {
    if (martyer) {
      reset({
        name: martyer.name,
        age: martyer.age,
        address: martyer.address,
        birthOfDate: martyer.birthOfDate,
        died: martyer.died,
        institution: martyer.institution,
        causeOfDeath: martyer.causeOfDeath,
        history: martyer.history,
        // name: martyer?.people[0]?.name,
        // age: martyer?.people[0]?.age,
        // address: martyer?.people[0]?.address,
        // birthOfDate: martyer?.people[0]?.birthOfDate,
        // died: martyer?.people[0]?.died,
        // institution: martyer?.people[0]?.institution,
        // causeOfDeath: martyer?.people[0]?.causeOfDeath,
        // history: martyer?.people[0]?.history,
      });
    }
  }, [martyer, reset]);

  console.log(martyer?.name, "from the update form function");

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    console.log(data, "from then onSubmit function");
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

    // post your formdata to the backend
    postUpdateMartyers(formData);
  };

  return (
    <>
      {isMartyerLoading ? (
        <Loader />
      ) : (
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
            {isUpdateLoading ? "loading..." : "Submit"}
          </Button>
        </Box>
      )}
    </>
  );
};

export default UpdateMartyerForm;
