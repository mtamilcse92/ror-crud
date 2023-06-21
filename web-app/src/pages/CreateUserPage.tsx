import { Box, Typography } from "@mui/material";
import useUserCreateMutation from "../hooks/useUserCreateMutation";
import { UserInfo } from "../types/users";
import UserForm from "../components/UserForm";

const CreateUserPage = (): JSX.Element => {
  const {mutateAsync } = useUserCreateMutation();
  const handleSubmit = (data: Partial<UserInfo>) => { mutateAsync(data as UserInfo) };

  return <Box display="flex" p={2} flexDirection="column">
          <Typography variant="h5" sx={{ mb: 2 }} fontWeight={600}>Create New User</Typography>
          <UserForm onSubmit={handleSubmit} />
  </Box>;
};

export default CreateUserPage;
