import { Box, Typography } from "@mui/material";
import useUserUpdateMutation from "../hooks/useUserUpdateMutation";
import { UserInfo } from "../types/users";
import UserForm from "../components/UserForm";
import { useParams } from "react-router-dom";
import useUserDetailQuery from "../hooks/useUserDetailQuery";

const UpdateUserPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>()
  const { data } = useUserDetailQuery(Number(id));
  const {mutateAsync } = useUserUpdateMutation();
  
  const handleSubmit = (data: Partial<UserInfo>) => { mutateAsync(data as UserInfo) };

  return <Box display="flex" p={2} flexDirection="column">
          <Typography variant="h5" sx={{ mb: 2 }} fontWeight={600}>Update User</Typography>
          <UserForm defaultValue={data} onSubmit={handleSubmit} />
  </Box>;
};

export default UpdateUserPage;
