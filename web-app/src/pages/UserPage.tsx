import { Box, Typography, Button } from "@mui/material";
import React from "react";
import useUserListQuery from "../hooks/useUserListQuery";
import UserList from "../components/UserList";

const UserPage = (): JSX.Element => {
  const { data = [] } = useUserListQuery();

  return (
    <Box display="flex" p={2} flexDirection="column">
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h5" fontWeight={600}>
          User List
        </Typography>
        <Button variant="outlined" href="/users/create">
          Create User
        </Button>
      </Box>
      <UserList users={data} />
    </Box>
  );
};

export default UserPage;
