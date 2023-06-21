import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";
import { UserInfo } from "../types/users";

type UserFormProps = {
  defaultValue?: Partial<UserInfo>;
  onSubmit: (value: Partial<UserInfo>) => void;
};

const defaultFormData = {
  first_name: "test",
  last_name: "user",
  email: "test@gmail.com",
  phone_no: "+91 8903484244",
};

const UserForm = ({
  defaultValue,
  onSubmit,
}: UserFormProps) => {
  const { register, handleSubmit } = useForm<Partial<UserInfo>>({
    defaultValues: defaultValue || defaultFormData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box width={300} display="flex" flexDirection="column" gap={3}>
        <TextField
          {...register("first_name")}
          label="First Name"
          variant="outlined"
          margin="normal"
        />

        <TextField
          {...register("last_name")}
          label="Last Name"
          variant="outlined"
          margin="normal"
        />

        <TextField
          {...register("phone_no")}
          label="Phone Number"
          variant="outlined"
          margin="normal"
        />

        <TextField
          {...register("email")}
          label="Email"
          variant="outlined"
          margin="normal"
        />
        <Box display="flex" justifyContent="flex-end">
          <Button type="submit" variant="contained" color="primary">
            {defaultValue ? "Update" : "Submit"}
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default UserForm;
